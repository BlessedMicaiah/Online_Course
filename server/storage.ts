import { 
  users, type User, type InsertUser, 
  courses, type Course, type InsertCourse, 
  challenges, type Challenge, type InsertChallenge,
  enrollments, type Enrollment, type InsertEnrollment,
  submissions, type Submission, type InsertSubmission,
} from "@shared/schema";
import { db } from "./db";
import { eq, and, desc, isNotNull } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Course operations
  getCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
  
  // Challenge operations
  getChallenges(): Promise<Challenge[]>;
  getChallenge(id: number): Promise<Challenge | undefined>;
  getActiveChallenge(): Promise<Challenge | undefined>;
  createChallenge(challenge: InsertChallenge): Promise<Challenge>;
  
  // Enrollment operations
  getEnrollmentsByUserId(userId: number): Promise<Enrollment[]>;
  getEnrollmentByCourseAndUser(courseId: number, userId: number): Promise<Enrollment | undefined>;
  createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment>;
  updateEnrollmentProgress(id: number, progress: number, completed: boolean): Promise<Enrollment>;
  
  // Submission operations
  getSubmissionsByUserId(userId: number): Promise<Submission[]>;
  getSubmissionsByChallengeId(challengeId: number): Promise<Submission[]>;
  createSubmission(submission: InsertSubmission): Promise<Submission>;
}

// Database storage implementation using Drizzle ORM
export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const results = await db.select().from(users).where(eq(users.id, id));
    return results[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const results = await db.select().from(users).where(eq(users.username, username));
    return results[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  // Course operations
  async getCourses(): Promise<Course[]> {
    return await db.select().from(courses);
  }

  async getCourse(id: number): Promise<Course | undefined> {
    const results = await db.select().from(courses).where(eq(courses.id, id));
    return results[0];
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const result = await db.insert(courses).values(insertCourse).returning();
    return result[0];
  }

  // Challenge operations
  async getChallenges(): Promise<Challenge[]> {
    return await db.select().from(challenges);
  }

  async getChallenge(id: number): Promise<Challenge | undefined> {
    const results = await db.select().from(challenges).where(eq(challenges.id, id));
    return results[0];
  }

  async getActiveChallenge(): Promise<Challenge | undefined> {
    const results = await db.select()
      .from(challenges)
      .where(eq(challenges.isActive, true))
      .limit(1);
    return results[0];
  }

  async createChallenge(insertChallenge: InsertChallenge): Promise<Challenge> {
    const result = await db.insert(challenges).values(insertChallenge).returning();
    return result[0];
  }

  // Enrollment operations
  async getEnrollmentsByUserId(userId: number): Promise<Enrollment[]> {
    return await db.select()
      .from(enrollments)
      .where(eq(enrollments.userId, userId))
      .orderBy(desc(enrollments.enrolledAt));
  }

  async getEnrollmentByCourseAndUser(courseId: number, userId: number): Promise<Enrollment | undefined> {
    const results = await db.select()
      .from(enrollments)
      .where(
        and(
          eq(enrollments.courseId, courseId),
          eq(enrollments.userId, userId)
        )
      )
      .limit(1);
    return results[0];
  }

  async createEnrollment(insertEnrollment: InsertEnrollment): Promise<Enrollment> {
    const result = await db.insert(enrollments).values(insertEnrollment).returning();
    return result[0];
  }

  async updateEnrollmentProgress(id: number, progress: number, completed: boolean): Promise<Enrollment> {
    const result = await db.update(enrollments)
      .set({ progress, completed })
      .where(eq(enrollments.id, id))
      .returning();
    return result[0];
  }

  // Submission operations
  async getSubmissionsByUserId(userId: number): Promise<Submission[]> {
    return await db.select()
      .from(submissions)
      .where(eq(submissions.userId, userId))
      .orderBy(desc(submissions.submittedAt));
  }

  async getSubmissionsByChallengeId(challengeId: number): Promise<Submission[]> {
    return await db.select()
      .from(submissions)
      .where(eq(submissions.challengeId, challengeId))
      .orderBy(desc(submissions.submittedAt));
  }

  async createSubmission(insertSubmission: InsertSubmission): Promise<Submission> {
    const result = await db.insert(submissions).values(insertSubmission).returning();
    return result[0];
  }
  
  // Helper method to initialize database with demo data
  async initializeDemoData() {
    try {
      // Check if we already have courses
      const existingCourses = await this.getCourses();
      if (existingCourses.length === 0) {
        // Add demo courses
        const demoCourses = [
          {
            title: "Introduction to 3D Modeling",
            description: "Learn the basics of 3D modeling using modern tools and techniques.",
            difficulty: "Beginner" as const,
            duration: "2.5 hours",
            imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
          },
          {
            title: "React Three Fiber Fundamentals",
            description: "Create 3D web experiences with React and Three.js using React Three Fiber.",
            difficulty: "Intermediate" as const,
            duration: "3.5 hours",
            imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
          },
          {
            title: "Advanced 3D Animations",
            description: "Master the art of animation in 3D environments with advanced techniques.",
            difficulty: "Advanced" as const,
            duration: "4 hours",
            imageUrl: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
          }
        ];
        
        for (const course of demoCourses) {
          await this.createCourse(course);
        }
      }

      // Check if we already have challenges
      const existingChallenges = await this.getChallenges();
      if (existingChallenges.length === 0) {
        // Add demo challenges
        const demoChallenges = [
          {
            title: "Create a Sci-Fi Environment",
            description: "Design and build a futuristic environment using techniques learned in our courses.",
            imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
            endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
            isActive: true,
          },
          {
            title: "Low Poly Character",
            description: "Create a stylized low-poly game character.",
            imageUrl: "https://images.unsplash.com/photo-1624114568348-0292a4637f30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
            endDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
            isActive: false,
          },
          {
            title: "Procedural Landscape",
            description: "Generate a procedural terrain with custom shaders.",
            imageUrl: "https://images.unsplash.com/photo-1600959906371-f6b5984b2d13?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
            endDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
            isActive: false,
          },
          {
            title: "Interactive UI",
            description: "Design a 3D user interface with interactive elements.",
            imageUrl: "https://images.unsplash.com/photo-1633259584592-adb58ca47bcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
            endDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
            isActive: false,
          },
          {
            title: "Game Asset Pack",
            description: "Create a cohesive set of assets for a game environment.",
            imageUrl: "https://images.unsplash.com/photo-1619343346847-917d6a8de69a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
            endDate: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000), // 20 days ago
            isActive: false,
          }
        ];
        
        for (const challenge of demoChallenges) {
          await this.createChallenge(challenge);
        }
      }
      
      console.log("Demo data initialized successfully");
    } catch (error) {
      console.error("Error initializing demo data:", error);
    }
  }
}

// Create and export database storage instance
export const storage = new DatabaseStorage();
