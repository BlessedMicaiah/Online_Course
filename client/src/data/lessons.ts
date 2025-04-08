export interface Lesson {
  id: number;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  imageUrl: string;
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: "Introduction to 3D Modeling",
    description: "Learn the basics of 3D modeling using modern tools and techniques.",
    difficulty: "Beginner",
    duration: "2.5 hours",
    imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
  },
  {
    id: 2,
    title: "React Three Fiber Fundamentals",
    description: "Create 3D web experiences with React and Three.js using React Three Fiber.",
    difficulty: "Intermediate",
    duration: "3.5 hours",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
  },
  {
    id: 3,
    title: "Advanced 3D Animations",
    description: "Master the art of animation in 3D environments with advanced techniques.",
    difficulty: "Advanced",
    duration: "4 hours",
    imageUrl: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
  },
  {
    id: 4,
    title: "Shader Programming Basics",
    description: "Learn how to write GLSL shaders for stunning visual effects in 3D applications.",
    difficulty: "Intermediate",
    duration: "3 hours",
    imageUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
  },
  {
    id: 5,
    title: "Game Development with Three.js",
    description: "Build interactive 3D games using Three.js and modern JavaScript.",
    difficulty: "Advanced",
    duration: "5 hours",
    imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
  },
  {
    id: 6,
    title: "3D Character Rigging",
    description: "Learn professional techniques for rigging 3D characters for animation.",
    difficulty: "Advanced",
    duration: "4.5 hours",
    imageUrl: "https://images.unsplash.com/photo-1633259584592-adb58ca47bcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
  }
];

export default lessons;
