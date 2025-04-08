import { users, type User, type InsertUser, courses, type Course, type InsertCourse, challenges, type Challenge, type InsertChallenge } from "@shared/schema";

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
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private coursesMap: Map<number, Course>;
  private challengesMap: Map<number, Challenge>;
  private userId: number;
  private courseId: number;
  private challengeId: number;

  constructor() {
    this.users = new Map();
    this.coursesMap = new Map();
    this.challengesMap = new Map();
    this.userId = 1;
    this.courseId = 1;
    this.challengeId = 1;
    
    // Initialize with some demo courses
    this.initializeDemoData();
  }

  private initializeDemoData() {
    // Add demo courses
    const demoCourses = [
      {
        title: "Introduction to 3D Modeling",
        description: "Learn the basics of 3D modeling using modern tools and techniques.",
        difficulty: "Beginner",
        duration: "2.5 hours",
        imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      },
      {
        title: "React Three Fiber Fundamentals",
        description: "Create 3D web experiences with React and Three.js using React Three Fiber.",
        difficulty: "Intermediate",
        duration: "3.5 hours",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      },
      {
        title: "Advanced 3D Animations",
        description: "Master the art of animation in 3D environments with advanced techniques.",
        difficulty: "Advanced",
        duration: "4 hours",
        imageUrl: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      }
    ];
    
    demoCourses.forEach(course => this.createCourse(course));
    
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
    
    demoChallenges.forEach(challenge => this.createChallenge(challenge));
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id, createdAt: new Date() };
    this.users.set(id, user);
    return user;
  }

  // Course operations
  async getCourses(): Promise<Course[]> {
    return Array.from(this.coursesMap.values());
  }

  async getCourse(id: number): Promise<Course | undefined> {
    return this.coursesMap.get(id);
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = this.courseId++;
    const course: Course = { ...insertCourse, id, createdAt: new Date() };
    this.coursesMap.set(id, course);
    return course;
  }

  // Challenge operations
  async getChallenges(): Promise<Challenge[]> {
    return Array.from(this.challengesMap.values());
  }

  async getChallenge(id: number): Promise<Challenge | undefined> {
    return this.challengesMap.get(id);
  }

  async getActiveChallenge(): Promise<Challenge | undefined> {
    return Array.from(this.challengesMap.values()).find(
      (challenge) => challenge.isActive === true
    );
  }

  async createChallenge(insertChallenge: InsertChallenge): Promise<Challenge> {
    const id = this.challengeId++;
    const challenge: Challenge = { ...insertChallenge, id, createdAt: new Date() };
    this.challengesMap.set(id, challenge);
    return challenge;
  }
}

export const storage = new MemStorage();
