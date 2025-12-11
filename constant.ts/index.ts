export const items = [
    {
        id: 0,
        title: "Clean Data",
        description: "Fix missing values, remove duplicates and correct inconsistent formatting (dates, capitalization, units) instantly.",
        icon: "/images/document-validation.svg",
        href: "#",
    },
    {
        id: 1,
        title: "Generate Visuals",
        description: "Generate charts and visuals from your data quickly and easily.",
        icon: "/images/ai-image.svg",
        href: "#",
    },
    {
        id: 2,
        title: "Research & Benchmark",
        description: "Bring in external Market & Industry data, benchmarks, and competitive context to enrich decision-making.",
        icon: "/images/ai-search.svg",
        href: "#",
    },
    {
        id: 3,
        title: "Generate Reports",
        description: "Turn your analysis into executive-ready reports with insights and recommendations.",
        icon: "/images/license.svg",
        href: "#",
    },
    {
        id: 4,
        title: "Analyze Data",
        description: "Explore data, detect patterns, correlations, anomalies, key metrics, and uncover trends in your dataset.",
        icon: "/images/pie-chart.svg",
        href: "#",
    },
    {
        id: 5,
        title: "Generate Analysis Code",
        description: "Generate SQL, Python, and Pandas code tailored to your dataset.",
        icon: "/images/code.svg",
        href: "#",
    },
];



import { Message } from "@/app/(root)/api/conversation/[id]/page"; // or wherever your Message type is defined

export const fakeMessages: Message[] = [
  {
    id: 1,
    sender: "human",
    content: "Hello! What can you help me with today?"
  },
  {
    id: 2,
    sender: "ai",
    content: "Hi! I can help you code, analyze data, explain concepts, write texts, and more. What would you like to do?"
  },
  {
    id: 3,
    sender: "human",
    content: "Can you explain what an API is in simple words?"
  },
  {
    id: 4,
    sender: "ai",
    content: "Sure! An API is like a waiter. It takes your request, sends it to the server kitchen, and brings back the response."
  },
  {
    id: 5,
    sender: "human",
    content: "Nice! And how do I improve my JavaScript skills?"
  },
  {
    id: 6,
    sender: "ai",
    content: "Build small projects, read other people's code, practice daily, and challenge yourself to solve real tasks."
  },
  {
    id: 7,
    sender: "human",
    content: "What's the difference between SQL and NoSQL?"
  },
  {
    id: 8,
    sender: "ai",
    content: "SQL stores structured tables with relationships. NoSQL is more flexible, storing documents or key-value data and scales easily."
  }
];
