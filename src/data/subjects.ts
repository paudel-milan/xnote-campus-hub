import { Subject } from "@/components/SubjectGrid";

// Define interfaces for resources
export interface Module {
  id: string;
  name: string;
  url: string;
}

export interface Exam {
  id: string;
  name: string;
  url: string;
}

export interface VideoResource {
  id: string;
  moduleNumber: number;
  name: string;
  url: string;
}

// Extended Subject interface with resources
export interface SubjectWithResources extends Subject {
  modules: Module[];
  exams: Exam[];
  videos: VideoResource[];
}

// Mock subject data for the application
const subjects: SubjectWithResources[] = [
  // CSE - Semester 1
  {
    id: "cse101",
    code: "CS101",
    name: "Introduction to Programming",
    department: "cse",
    semester: "1",
    modules: [
      { id: "m1_cse101", name: "Module 1: Basics of Programming", url: "https://example.com/cse101/module1" },
      { id: "m2_cse101", name: "Module 2: Control Structures", url: "https://example.com/cse101/module2" },
      { id: "m3_cse101", name: "Module 3: Functions", url: "https://example.com/cse101/module3" },
      { id: "m4_cse101", name: "Module 4: Arrays", url: "https://example.com/cse101/module4" },
      { id: "m5_cse101", name: "Module 5: Pointers", url: "https://example.com/cse101/module5" },
    ],
    exams: [
      { id: "cie1_cse101", name: "CIE 1", url: "https://example.com/cse101/cie1" },
      { id: "cie2_cse101", name: "CIE 2", url: "https://example.com/cse101/cie2" },
      { id: "cie3_cse101", name: "CIE 3", url: "https://example.com/cse101/cie3" },
      { id: "see_cse101", name: "SEE", url: "https://example.com/cse101/see" },
    ],
    videos: [
      { id: "v1_cse101", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/cse101/video1" },
      { id: "v2_cse101", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/cse101/video2" },
      { id: "v3_cse101", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/cse101/video3" },
      { id: "v4_cse101", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/cse101/video4" },
      { id: "v5_cse101", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/cse101/video5" },
    ],
  },
  {
    id: "cse102",
    code: "CS102",
    name: "Digital Logic",
    department: "cse",
    semester: "1",
    modules: [
      { id: "m1_cse102", name: "Module 1: Number Systems", url: "https://example.com/cse102/module1" },
      { id: "m2_cse102", name: "Module 2: Boolean Algebra", url: "https://example.com/cse102/module2" },
      { id: "m3_cse102", name: "Module 3: Logic Gates", url: "https://example.com/cse102/module3" },
      { id: "m4_cse102", name: "Module 4: Combinational Logic", url: "https://example.com/cse102/module4" },
      { id: "m5_cse102", name: "Module 5: Sequential Logic", url: "https://example.com/cse102/module5" },
    ],
    exams: [
      { id: "cie1_cse102", name: "CIE 1", url: "https://example.com/cse102/cie1" },
      { id: "cie2_cse102", name: "CIE 2", url: "https://example.com/cse102/cie2" },
      { id: "cie3_cse102", name: "CIE 3", url: "https://example.com/cse102/cie3" },
      { id: "see_cse102", name: "SEE", url: "https://example.com/cse102/see" },
    ],
    videos: [
      { id: "v1_cse102", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/cse102/video1" },
      { id: "v2_cse102", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/cse102/video2" },
      { id: "v3_cse102", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/cse102/video3" },
      { id: "v4_cse102", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/cse102/video4" },
      { id: "v5_cse102", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/cse102/video5" },
    ],
  },
  {
    id: "cse103",
    code: "MA101",
    name: "Engineering Mathematics I",
    department: "cse",
    semester: "1",
    modules: [
      { id: "m1_cse103", name: "Module 1: Differential Calculus", url: "https://example.com/cse103/module1" },
      { id: "m2_cse103", name: "Module 2: Integral Calculus", url: "https://example.com/cse103/module2" },
      { id: "m3_cse103", name: "Module 3: Matrices", url: "https://example.com/cse103/module3" },
      { id: "m4_cse103", name: "Module 4: Differential Equations", url: "https://example.com/cse103/module4" },
      { id: "m5_cse103", name: "Module 5: Series", url: "https://example.com/cse103/module5" },
    ],
    exams: [
      { id: "cie1_cse103", name: "CIE 1", url: "https://example.com/cse103/cie1" },
      { id: "cie2_cse103", name: "CIE 2", url: "https://example.com/cse103/cie2" },
      { id: "cie3_cse103", name: "CIE 3", url: "https://example.com/cse103/cie3" },
      { id: "see_cse103", name: "SEE", url: "https://example.com/cse103/see" },
    ],
    videos: [
      { id: "v1_cse103", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/cse103/video1" },
      { id: "v2_cse103", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/cse103/video2" },
      { id: "v3_cse103", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/cse103/video3" },
      { id: "v4_cse103", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/cse103/video4" },
      { id: "v5_cse103", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/cse103/video5" },
    ],
  },
  
  // CSE - Semester 2
  {
    id: "cse201",
    code: "CS201",
    name: "Data Structures",
    department: "cse",
    semester: "2",
    modules: [
      { id: "m1_cse201", name: "Module 1: Introduction", url: "https://example.com/cse201/module1" },
      { id: "m2_cse201", name: "Module 2: Arrays & Linked Lists", url: "https://example.com/cse201/module2" },
      { id: "m3_cse201", name: "Module 3: Stacks & Queues", url: "https://example.com/cse201/module3" },
      { id: "m4_cse201", name: "Module 4: Trees", url: "https://example.com/cse201/module4" },
      { id: "m5_cse201", name: "Module 5: Graphs", url: "https://example.com/cse201/module5" },
    ],
    exams: [
      { id: "cie1_cse201", name: "CIE 1", url: "https://example.com/cse201/cie1" },
      { id: "cie2_cse201", name: "CIE 2", url: "https://example.com/cse201/cie2" },
      { id: "cie3_cse201", name: "CIE 3", url: "https://example.com/cse201/cie3" },
      { id: "see_cse201", name: "SEE", url: "https://example.com/cse201/see" },
    ],
    videos: [
      { id: "v1_cse201", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/cse201/video1" },
      { id: "v2_cse201", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/cse201/video2" },
      { id: "v3_cse201", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/cse201/video3" },
      { id: "v4_cse201", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/cse201/video4" },
      { id: "v5_cse201", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/cse201/video5" },
    ],
  },
  {
    id: "cse202",
    code: "CS202",
    name: "Object-Oriented Programming",
    department: "cse",
    semester: "2",
    modules: [
      { id: "m1_cse202", name: "Module 1: OOP Concepts", url: "https://example.com/cse202/module1" },
      { id: "m2_cse202", name: "Module 2: Classes & Objects", url: "https://example.com/cse202/module2" },
      { id: "m3_cse202", name: "Module 3: Inheritance", url: "https://example.com/cse202/module3" },
      { id: "m4_cse202", name: "Module 4: Polymorphism", url: "https://example.com/cse202/module4" },
      { id: "m5_cse202", name: "Module 5: Exception Handling", url: "https://example.com/cse202/module5" },
    ],
    exams: [
      { id: "cie1_cse202", name: "CIE 1", url: "https://example.com/cse202/cie1" },
      { id: "cie2_cse202", name: "CIE 2", url: "https://example.com/cse202/cie2" },
      { id: "cie3_cse202", name: "CIE 3", url: "https://example.com/cse202/cie3" },
      { id: "see_cse202", name: "SEE", url: "https://example.com/cse202/see" },
    ],
    videos: [
      { id: "v1_cse202", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/cse202/video1" },
      { id: "v2_cse202", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/cse202/video2" },
      { id: "v3_cse202", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/cse202/video3" },
      { id: "v4_cse202", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/cse202/video4" },
      { id: "v5_cse202", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/cse202/video5" },
    ],
  },
  {
    id: "cse203",
    code: "MA201",
    name: "Engineering Mathematics II",
    department: "cse",
    semester: "2",
    modules: [
      { id: "m1_cse203", name: "Module 1: Vector Calculus", url: "https://example.com/cse203/module1" },
      { id: "m2_cse203", name: "Module 2: Complex Analysis", url: "https://example.com/cse203/module2" },
      { id: "m3_cse203", name: "Module 3: Fourier Series", url: "https://example.com/cse203/module3" },
      { id: "m4_cse203", name: "Module 4: Laplace Transforms", url: "https://example.com/cse203/module4" },
      { id: "m5_cse203", name: "Module 5: Z-Transforms", url: "https://example.com/cse203/module5" },
    ],
    exams: [
      { id: "cie1_cse203", name: "CIE 1", url: "https://example.com/cse203/cie1" },
      { id: "cie2_cse203", name: "CIE 2", url: "https://example.com/cse203/cie2" },
      { id: "cie3_cse203", name: "CIE 3", url: "https://example.com/cse203/cie3" },
      { id: "see_cse203", name: "SEE", url: "https://example.com/cse203/see" },
    ],
    videos: [
      { id: "v1_cse203", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/cse203/video1" },
      { id: "v2_cse203", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/cse203/video2" },
      { id: "v3_cse203", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/cse203/video3" },
      { id: "v4_cse203", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/cse203/video4" },
      { id: "v5_cse203", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/cse203/video5" },
    ],
  },
  
  // CSE - Semester 3
  {
    id: "cse301",
    code: "CS301",
    name: "Design and Analysis of Algorithms",
    department: "cse",
    semester: "3",
    modules: [
      { id: "m1_cse301", name: "Module 1: Algorithm Analysis", url: "https://example.com/cse301/module1" },
      { id: "m2_cse301", name: "Module 2: Divide and Conquer", url: "https://example.com/cse301/module2" },
      { id: "m3_cse301", name: "Module 3: Greedy Algorithms", url: "https://example.com/cse301/module3" },
      { id: "m4_cse301", name: "Module 4: Dynamic Programming", url: "https://example.com/cse301/module4" },
      { id: "m5_cse301", name: "Module 5: NP-Completeness", url: "https://example.com/cse301/module5" },
    ],
    exams: [
      { id: "cie1_cse301", name: "CIE 1", url: "https://example.com/cse301/cie1" },
      { id: "cie2_cse301", name: "CIE 2", url: "https://example.com/cse301/cie2" },
      { id: "cie3_cse301", name: "CIE 3", url: "https://example.com/cse301/cie3" },
      { id: "see_cse301", name: "SEE", url: "https://example.com/cse301/see" },
    ],
    videos: [
      { id: "v1_cse301", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/cse301/video1" },
      { id: "v2_cse301", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/cse301/video2" },
      { id: "v3_cse301", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/cse301/video3" },
      { id: "v4_cse301", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/cse301/video4" },
      { id: "v5_cse301", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/cse301/video5" },
    ],
  },
  
  // ECE and other departments follow the same pattern
  // Adding just a few examples for each department to keep this concise
  
  // ECE - Semester 1
  {
    id: "ece101",
    code: "EC101",
    name: "Basic Electronics",
    department: "ece",
    semester: "1",
    modules: [
      { id: "m1_ece101", name: "Module 1: Semiconductor Basics", url: "https://example.com/ece101/module1" },
      { id: "m2_ece101", name: "Module 2: Diodes", url: "https://example.com/ece101/module2" },
      { id: "m3_ece101", name: "Module 3: Transistors", url: "https://example.com/ece101/module3" },
      { id: "m4_ece101", name: "Module 4: Amplifiers", url: "https://example.com/ece101/module4" },
      { id: "m5_ece101", name: "Module 5: Oscillators", url: "https://example.com/ece101/module5" },
    ],
    exams: [
      { id: "cie1_ece101", name: "CIE 1", url: "https://example.com/ece101/cie1" },
      { id: "cie2_ece101", name: "CIE 2", url: "https://example.com/ece101/cie2" },
      { id: "cie3_ece101", name: "CIE 3", url: "https://example.com/ece101/cie3" },
      { id: "see_ece101", name: "SEE", url: "https://example.com/ece101/see" },
    ],
    videos: [
      { id: "v1_ece101", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/ece101/video1" },
      { id: "v2_ece101", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/ece101/video2" },
      { id: "v3_ece101", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/ece101/video3" },
      { id: "v4_ece101", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/ece101/video4" },
      { id: "v5_ece101", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/ece101/video5" },
    ],
  },
  
  // CIVIL - Semester 1
  {
    id: "civil101",
    code: "CV101",
    name: "Engineering Mechanics",
    department: "civil",
    semester: "1",
    modules: [
      { id: "m1_civil101", name: "Module 1: Statics", url: "https://example.com/civil101/module1" },
      { id: "m2_civil101", name: "Module 2: Dynamics", url: "https://example.com/civil101/module2" },
      { id: "m3_civil101", name: "Module 3: Kinematics", url: "https://example.com/civil101/module3" },
      { id: "m4_civil101", name: "Module 4: Kinetics", url: "https://example.com/civil101/module4" },
      { id: "m5_civil101", name: "Module 5: Friction", url: "https://example.com/civil101/module5" },
    ],
    exams: [
      { id: "cie1_civil101", name: "CIE 1", url: "https://example.com/civil101/cie1" },
      { id: "cie2_civil101", name: "CIE 2", url: "https://example.com/civil101/cie2" },
      { id: "cie3_civil101", name: "CIE 3", url: "https://example.com/civil101/cie3" },
      { id: "see_civil101", name: "SEE", url: "https://example.com/civil101/see" },
    ],
    videos: [
      { id: "v1_civil101", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/civil101/video1" },
      { id: "v2_civil101", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/civil101/video2" },
      { id: "v3_civil101", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/civil101/video3" },
      { id: "v4_civil101", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/civil101/video4" },
      { id: "v5_civil101", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/civil101/video5" },
    ],
  },
  
  // AIML - Semester 5
  {
    id: "aiml501",
    code: "AI501",
    name: "Machine Learning Fundamentals",
    department: "aiml",
    semester: "5",
    modules: [
      { id: "m1_aiml501", name: "Module 1: Introduction to ML", url: "https://example.com/aiml501/module1" },
      { id: "m2_aiml501", name: "Module 2: Supervised Learning", url: "https://example.com/aiml501/module2" },
      { id: "m3_aiml501", name: "Module 3: Unsupervised Learning", url: "https://example.com/aiml501/module3" },
      { id: "m4_aiml501", name: "Module 4: Neural Networks", url: "https://example.com/aiml501/module4" },
      { id: "m5_aiml501", name: "Module 5: Deep Learning", url: "https://example.com/aiml501/module5" },
    ],
    exams: [
      { id: "cie1_aiml501", name: "CIE 1", url: "https://example.com/aiml501/cie1" },
      { id: "cie2_aiml501", name: "CIE 2", url: "https://example.com/aiml501/cie2" },
      { id: "cie3_aiml501", name: "CIE 3", url: "https://example.com/aiml501/cie3" },
      { id: "see_aiml501", name: "SEE", url: "https://example.com/aiml501/see" },
    ],
    videos: [
      { id: "v1_aiml501", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/aiml501/video1" },
      { id: "v2_aiml501", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/aiml501/video2" },
      { id: "v3_aiml501", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/aiml501/video3" },
      { id: "v4_aiml501", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/aiml501/video4" },
      { id: "v5_aiml501", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/aiml501/video5" },
    ],
  },
  
  // Continuing with the remaining subjects in a similar pattern
  {
    id: "cse302",
    code: "CS302",
    name: "Computer Organization",
    department: "cse",
    semester: "3",
    modules: [
      { id: "m1_cse302", name: "Module 1: Computer Architecture", url: "https://example.com/cse302/module1" },
      { id: "m2_cse302", name: "Module 2: CPU Design", url: "https://example.com/cse302/module2" },
      { id: "m3_cse302", name: "Module 3: Memory Organization", url: "https://example.com/cse302/module3" },
      { id: "m4_cse302", name: "Module 4: I/O Systems", url: "https://example.com/cse302/module4" },
      { id: "m5_cse302", name: "Module 5: Pipelining", url: "https://example.com/cse302/module5" },
    ],
    exams: [
      { id: "cie1_cse302", name: "CIE 1", url: "https://example.com/cse302/cie1" },
      { id: "cie2_cse302", name: "CIE 2", url: "https://example.com/cse302/cie2" },
      { id: "cie3_cse302", name: "CIE 3", url: "https://example.com/cse302/cie3" },
      { id: "see_cse302", name: "SEE", url: "https://example.com/cse302/see" },
    ],
    videos: [
      { id: "v1_cse302", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/cse302/video1" },
      { id: "v2_cse302", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/cse302/video2" },
      { id: "v3_cse302", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/cse302/video3" },
      { id: "v4_cse302", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/cse302/video4" },
      { id: "v5_cse302", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/cse302/video5" },
    ],
  },
  
  // Additional subjects with resources following the same pattern
  {
    id: "cse303",
    code: "CS303",
    name: "Database Management Systems",
    department: "cse",
    semester: "3",
    modules: [
      { id: "m1_cse303", name: "Module 1: Database Concepts", url: "https://example.com/cse303/module1" },
      { id: "m2_cse303", name: "Module 2: ER Model", url: "https://example.com/cse303/module2" },
      { id: "m3_cse303", name: "Module 3: SQL", url: "https://example.com/cse303/module3" },
      { id: "m4_cse303", name: "Module 4: Normalization", url: "https://example.com/cse303/module4" },
      { id: "m5_cse303", name: "Module 5: Transaction Management", url: "https://example.com/cse303/module5" },
    ],
    exams: [
      { id: "cie1_cse303", name: "CIE 1", url: "https://example.com/cse303/cie1" },
      { id: "cie2_cse303", name: "CIE 2", url: "https://example.com/cse303/cie2" },
      { id: "cie3_cse303", name: "CIE 3", url: "https://example.com/cse303/cie3" },
      { id: "see_cse303", name: "SEE", url: "https://example.com/cse303/see" },
    ],
    videos: [
      { id: "v1_cse303", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/cse303/video1" },
      { id: "v2_cse303", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/cse303/video2" },
      { id: "v3_cse303", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/cse303/video3" },
      { id: "v4_cse303", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/cse303/video4" },
      { id: "v5_cse303", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/cse303/video5" },
    ],
  },
  {
    id: "ece102",
    code: "EC102",
    name: "Electric Circuits",
    department: "ece",
    semester: "1",
    modules: [
      { id: "m1_ece102", name: "Module 1: Circuit Elements", url: "https://example.com/ece102/module1" },
      { id: "m2_ece102", name: "Module 2: Network Theorems", url: "https://example.com/ece102/module2" },
      { id: "m3_ece102", name: "Module 3: AC Circuits", url: "https://example.com/ece102/module3" },
      { id: "m4_ece102", name: "Module 4: Resonance", url: "https://example.com/ece102/module4" },
      { id: "m5_ece102", name: "Module 5: Two-Port Networks", url: "https://example.com/ece102/module5" },
    ],
    exams: [
      { id: "cie1_ece102", name: "CIE 1", url: "https://example.com/ece102/cie1" },
      { id: "cie2_ece102", name: "CIE 2", url: "https://example.com/ece102/cie2" },
      { id: "cie3_ece102", name: "CIE 3", url: "https://example.com/ece102/cie3" },
      { id: "see_ece102", name: "SEE", url: "https://example.com/ece102/see" },
    ],
    videos: [
      { id: "v1_ece102", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/ece102/video1" },
      { id: "v2_ece102", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/ece102/video2" },
      { id: "v3_ece102", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/ece102/video3" },
      { id: "v4_ece102", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/ece102/video4" },
      { id: "v5_ece102", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/ece102/video5" },
    ],
  },
  {
    id: "ece103",
    code: "MA101",
    name: "Engineering Mathematics I",
    department: "ece",
    semester: "1",
    modules: [
      { id: "m1_ece103", name: "Module 1: Differential Calculus", url: "https://example.com/ece103/module1" },
      { id: "m2_ece103", name: "Module 2: Integral Calculus", url: "https://example.com/ece103/module2" },
      { id: "m3_ece103", name: "Module 3: Matrices", url: "https://example.com/ece103/module3" },
      { id: "m4_ece103", name: "Module 4: Differential Equations", url: "https://example.com/ece103/module4" },
      { id: "m5_ece103", name: "Module 5: Series", url: "https://example.com/ece103/module5" },
    ],
    exams: [
      { id: "cie1_ece103", name: "CIE 1", url: "https://example.com/ece103/cie1" },
      { id: "cie2_ece103", name: "CIE 2", url: "https://example.com/ece103/cie2" },
      { id: "cie3_ece103", name: "CIE 3", url: "https://example.com/ece103/cie3" },
      { id: "see_ece103", name: "SEE", url: "https://example.com/ece103/see" },
    ],
    videos: [
      { id: "v1_ece103", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/ece103/video1" },
      { id: "v2_ece103", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/ece103/video2" },
      { id: "v3_ece103", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/ece103/video3" },
      { id: "v4_ece103", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/ece103/video4" },
      { id: "v5_ece103", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/ece103/video5" },
    ],
  },
  {
    id: "civil102",
    code: "CV102",
    name: "Construction Materials",
    department: "civil",
    semester: "1",
    modules: [
      { id: "m1_civil102", name: "Module 1: Concrete", url: "https://example.com/civil102/module1" },
      { id: "m2_civil102", name: "Module 2: Steel", url: "https://example.com/civil102/module2" },
      { id: "m3_civil102", name: "Module 3: Timber", url: "https://example.com/civil102/module3" },
      { id: "m4_civil102", name: "Module 4: Masonry", url: "https://example.com/civil102/module4" },
      { id: "m5_civil102", name: "Module 5: Modern Materials", url: "https://example.com/civil102/module5" },
    ],
    exams: [
      { id: "cie1_civil102", name: "CIE 1", url: "https://example.com/civil102/cie1" },
      { id: "cie2_civil102", name: "CIE 2", url: "https://example.com/civil102/cie2" },
      { id: "cie3_civil102", name: "CIE 3", url: "https://example.com/civil102/cie3" },
      { id: "see_civil102", name: "SEE", url: "https://example.com/civil102/see" },
    ],
    videos: [
      { id: "v1_civil102", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/civil102/video1" },
      { id: "v2_civil102", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/civil102/video2" },
      { id: "v3_civil102", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/civil102/video3" },
      { id: "v4_civil102", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/civil102/video4" },
      { id: "v5_civil102", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/civil102/video5" },
    ],
  },
  {
    id: "aiml502",
    code: "AI502",
    name: "Neural Networks",
    department: "aiml",
    semester: "5",
    modules: [
      { id: "m1_aiml502", name: "Module 1: Perceptrons", url: "https://example.com/aiml502/module1" },
      { id: "m2_aiml502", name: "Module 2: Backpropagation", url: "https://example.com/aiml502/module2" },
      { id: "m3_aiml502", name: "Module 3: CNN", url: "https://example.com/aiml502/module3" },
      { id: "m4_aiml502", name: "Module 4: RNN", url: "https://example.com/aiml502/module4" },
      { id: "m5_aiml502", name: "Module 5: GANs", url: "https://example.com/aiml502/module5" },
    ],
    exams: [
      { id: "cie1_aiml502", name: "CIE 1", url: "https://example.com/aiml502/cie1" },
      { id: "cie2_aiml502", name: "CIE 2", url: "https://example.com/aiml502/cie2" },
      { id: "cie3_aiml502", name: "CIE 3", url: "https://example.com/aiml502/cie3" },
      { id: "see_aiml502", name: "SEE", url: "https://example.com/aiml502/see" },
    ],
    videos: [
      { id: "v1_aiml502", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/aiml502/video1" },
      { id: "v2_aiml502", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/aiml502/video2" },
      { id: "v3_aiml502", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/aiml502/video3" },
      { id: "v4_aiml502", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/aiml502/video4" },
      { id: "v5_aiml502", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/aiml502/video5" },
    ],
  },
  {
    id: "aiml503",
    code: "AI503",
    name: "Data Mining",
    department: "aiml",
    semester: "5",
    modules: [
      { id: "m1_aiml503", name: "Module 1: Data Preprocessing", url: "https://example.com/aiml503/module1" },
      { id: "m2_aiml503", name: "Module 2: Association Rules", url: "https://example.com/aiml503/module2" },
      { id: "m3_aiml503", name: "Module 3: Classification", url: "https://example.com/aiml503/module3" },
      { id: "m4_aiml503", name: "Module 4: Clustering", url: "https://example.com/aiml503/module4" },
      { id: "m5_aiml503", name: "Module 5: Advanced Topics", url: "https://example.com/aiml503/module5" },
    ],
    exams: [
      { id: "cie1_aiml503", name: "CIE 1", url: "https://example.com/aiml503/cie1" },
      { id: "cie2_aiml503", name: "CIE 2", url: "https://example.com/aiml503/cie2" },
      { id: "cie3_aiml503", name: "CIE 3", url: "https://example.com/aiml503/cie3" },
      { id: "see_aiml503", name: "SEE", url: "https://example.com/aiml503/see" },
    ],
    videos: [
      { id: "v1_aiml503", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/aiml503/video1" },
      { id: "v2_aiml503", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/aiml503/video2" },
      { id: "v3_aiml503", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/aiml503/video3" },
      { id: "v4_aiml503", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/aiml503/video4" },
      { id: "v5_aiml503", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/aiml503/video5" },
    ],
  },
  {
    id: "aids501",
    code: "DS501",
    name: "Applied Statistics",
    department: "aids",
    semester: "5",
    modules: [
      { id: "m1_aids501", name: "Module 1: Probability", url: "https://example.com/aids501/module1" },
      { id: "m2_aids501", name: "Module 2: Distributions", url: "https://example.com/aids501/module2" },
      { id: "m3_aids501", name: "Module 3: Hypothesis Testing", url: "https://example.com/aids501/module3" },
      { id: "m4_aids501", name: "Module 4: Regression", url: "https://example.com/aids501/module4" },
      { id: "m5_aids501", name: "Module 5: Experimental Design", url: "https://example.com/aids501/module5" },
    ],
    exams: [
      { id: "cie1_aids501", name: "CIE 1", url: "https://example.com/aids501/cie1" },
      { id: "cie2_aids501", name: "CIE 2", url: "https://example.com/aids501/cie2" },
      { id: "cie3_aids501", name: "CIE 3", url: "https://example.com/aids501/cie3" },
      { id: "see_aids501", name: "SEE", url: "https://example.com/aids501/see" },
    ],
    videos: [
      { id: "v1_aids501", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/aids501/video1" },
      { id: "v2_aids501", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/aids501/video2" },
      { id: "v3_aids501", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/aids501/video3" },
      { id: "v4_aids501", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/aids501/video4" },
      { id: "v5_aids501", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/aids501/video5" },
    ],
  },
  {
    id: "aids502",
    code: "DS502",
    name: "Big Data Analytics",
    department: "aids",
    semester: "5",
    modules: [
      { id: "m1_aids502", name: "Module 1: Big Data Concepts", url: "https://example.com/aids502/module1" },
      { id: "m2_aids502", name: "Module 2: Hadoop", url: "https://example.com/aids502/module2" },
      { id: "m3_aids502", name: "Module 3: MapReduce", url: "https://example.com/aids502/module3" },
      { id: "m4_aids502", name: "Module 4: Spark", url: "https://example.com/aids502/module4" },
      { id: "m5_aids502", name: "Module 5: NoSQL", url: "https://example.com/aids502/module5" },
    ],
    exams: [
      { id: "cie1_aids502", name: "CIE 1", url: "https://example.com/aids502/cie1" },
      { id: "cie2_aids502", name: "CIE 2", url: "https://example.com/aids502/cie2" },
      { id: "cie3_aids502", name: "CIE 3", url: "https://example.com/aids502/cie3" },
      { id: "see_aids502", name: "SEE", url: "https://example.com/aids502/see" },
    ],
    videos: [
      { id: "v1_aids502", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/aids502/video1" },
      { id: "v2_aids502", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/aids502/video2" },
      { id: "v3_aids502", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/aids502/video3" },
      { id: "v4_aids502", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/aids502/video4" },
      { id: "v5_aids502", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/aids502/video5" },
    ],
  },
  {
    id: "ise401",
    code: "IS401",
    name: "Software Engineering",
    department: "ise",
    semester: "4",
    modules: [
      { id: "m1_ise401", name: "Module 1: SDLC", url: "https://example.com/ise401/module1" },
      { id: "m2_ise401", name: "Module 2: Requirements Engineering", url: "https://example.com/ise401/module2" },
      { id: "m3_ise401", name: "Module 3: Design Patterns", url: "https://example.com/ise401/module3" },
      { id: "m4_ise401", name: "Module 4: Testing", url: "https://example.com/ise401/module4" },
      { id: "m5_ise401", name: "Module 5: Project Management", url: "https://example.com/ise401/module5" },
    ],
    exams: [
      { id: "cie1_ise401", name: "CIE 1", url: "https://example.com/ise401/cie1" },
      { id: "cie2_ise401", name: "CIE 2", url: "https://example.com/ise401/cie2" },
      { id: "cie3_ise401", name: "CIE 3", url: "https://example.com/ise401/cie3" },
      { id: "see_ise401", name: "SEE", url: "https://example.com/ise401/see" },
    ],
    videos: [
      { id: "v1_ise401", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/ise401/video1" },
      { id: "v2_ise401", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/ise401/video2" },
      { id: "v3_ise401", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/ise401/video3" },
      { id: "v4_ise401", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/ise401/video4" },
      { id: "v5_ise401", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/ise401/video5" },
    ],
  },
  {
    id: "ise402",
    code: "IS402",
    name: "Web Technologies",
    department: "ise",
    semester: "4",
    modules: [
      { id: "m1_ise402", name: "Module 1: HTML & CSS", url: "https://example.com/ise402/module1" },
      { id: "m2_ise402", name: "Module 2: JavaScript", url: "https://example.com/ise402/module2" },
      { id: "m3_ise402", name: "Module 3: React", url: "https://example.com/ise402/module3" },
      { id: "m4_ise402", name: "Module 4: Node.js", url: "https://example.com/ise402/module4" },
      { id: "m5_ise402", name: "Module 5: Web Security", url: "https://example.com/ise402/module5" },
    ],
    exams: [
      { id: "cie1_ise402", name: "CIE 1", url: "https://example.com/ise402/cie1" },
      { id: "cie2_ise402", name: "CIE 2", url: "https://example.com/ise402/cie2" },
      { id: "cie3_ise402", name: "CIE 3", url: "https://example.com/ise402/cie3" },
      { id: "see_ise402", name: "SEE", url: "https://example.com/ise402/see" },
    ],
    videos: [
      { id: "v1_ise402", moduleNumber: 1, name: "Module 1 Overview", url: "https://example.com/ise402/video1" },
      { id: "v2_ise402", moduleNumber: 2, name: "Module 2 Overview", url: "https://example.com/ise402/video2" },
      { id: "v3_ise402", moduleNumber: 3, name: "Module 3 Overview", url: "https://example.com/ise402/video3" },
      { id: "v4_ise402", moduleNumber: 4, name: "Module 4 Overview", url: "https://example.com/ise402/video4" },
      { id: "v5_ise402", moduleNumber: 5, name: "Module 5 Overview", url: "https://example.com/ise402/video5" },
    ],
  },
];

export default subjects;
