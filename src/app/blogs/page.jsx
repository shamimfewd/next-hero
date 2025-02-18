import Link from "next/link";
import React from "react";
const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "Shamin Mahmud",
    content:
      "React Hooks provide a powerful way to manage state and side effects in functional components.",
    published_date: "2025-02-18",
    tags: ["React", "JavaScript", "Web Development"],
  },
  {
    id: 2,
    title: "Getting Started with Next.js",
    author: "Shamin Mahmud",
    content:
      "Next.js is a React framework that offers server-side rendering, static site generation, and many more features.",
    published_date: "2025-02-17",
    tags: ["Next.js", "React", "Frontend"],
  },
  {
    id: 3,
    title: "CSS Tips for Responsive Design",
    author: "Jane Smith",
    content:
      "Creating responsive websites is essential today. Learn some useful CSS techniques for building flexible layouts.",
    published_date: "2025-02-16",
    tags: ["CSS", "Responsive Design", "Web Development"],
  },
  {
    id: 4,
    title: "Mastering JavaScript Async/Await",
    author: "Michael Johnson",
    content:
      "Async/Await makes asynchronous code easier to write and understand in JavaScript.",
    published_date: "2025-02-15",
    tags: ["JavaScript", "Async/Await", "Programming"],
  },
  {
    id: 5,
    title: "Top 5 Tools for Web Developers in 2025",
    author: "Emily Davis",
    content:
      "Explore the top tools that can boost your productivity as a web developer in 2025.",
    published_date: "2025-02-14",
    tags: ["Web Development", "Tools", "Productivity"],
  },
];

export default function page() {
  return (
    <div>
      {blogs?.map((blog) => (
        <div className="grid grid-col-4 lg:grid-col-2">
          <div>
            <h1>{blog.title}</h1>
            <button className="font-bold">
              <Link href="">read more</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
