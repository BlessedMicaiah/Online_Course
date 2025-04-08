export interface Challenge {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  endDate?: Date;
  isActive: boolean;
}

export interface MainChallenge extends Challenge {
  daysRemaining: number;
}

export interface PastChallenge extends Challenge {
  submissionCount?: number;
}

const currentDate = new Date();

const mainChallenge: MainChallenge = {
  id: 1,
  title: "Create a Sci-Fi Environment",
  description: "Design and build a futuristic environment using techniques learned in our courses.",
  imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
  endDate: new Date(currentDate.getTime() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
  isActive: true,
  daysRemaining: 5
};

const pastChallenges: PastChallenge[] = [
  {
    id: 2,
    title: "Low Poly Character",
    description: "Create a stylized low-poly game character.",
    imageUrl: "https://images.unsplash.com/photo-1624114568348-0292a4637f30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    isActive: false,
    submissionCount: 42
  },
  {
    id: 3,
    title: "Procedural Landscape",
    description: "Generate a procedural terrain with custom shaders.",
    imageUrl: "https://images.unsplash.com/photo-1600959906371-f6b5984b2d13?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    isActive: false,
    submissionCount: 38
  },
  {
    id: 4,
    title: "Interactive UI",
    description: "Design a 3D user interface with interactive elements.",
    imageUrl: "https://images.unsplash.com/photo-1633259584592-adb58ca47bcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    isActive: false,
    submissionCount: 27
  },
  {
    id: 5,
    title: "Game Asset Pack",
    description: "Create a cohesive set of assets for a game environment.",
    imageUrl: "https://images.unsplash.com/photo-1619343346847-917d6a8de69a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    isActive: false,
    submissionCount: 31
  }
];

export { mainChallenge, pastChallenges };
