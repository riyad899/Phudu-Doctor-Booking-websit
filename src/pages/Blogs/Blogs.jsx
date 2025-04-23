import React from 'react';

const blogs = [
  {
    id: 1,
    question: 'What is useState and how does it work in React?',
    answer: 'useState is a Hook that lets you add state to functional components. It returns a stateful value and a function to update it.',
    date: '2025-04-12',
  },
  {
    id: 2,
    question: 'What is the purpose of useEffect in React?',
    answer: 'useEffect is a Hook that runs side effects in functional components, like data fetching or subscriptions.',
    date: '2025-04-13',
  },
  {
    id: 3,
    question: 'What is JSX in React?',
    answer: 'JSX is a syntax extension that looks similar to XML or HTML and is used to describe UI in React components.',
    date: '2025-04-14',
  },
  {
    id: 4,
    question: 'How does React handle rendering efficiently?',
    answer: 'React uses a virtual DOM to efficiently update the UI by comparing differences and applying minimal updates.',
    date: '2025-04-15',
  },
  {
    id: 5,
    question: 'What are props in React?',
    answer: 'Props are arguments passed into components and used to pass data from parent to child components.',
    date: '2025-04-16',
  },
  {
    id: 6,
    question: 'What is the difference between state and props?',
    answer: 'Props are immutable and passed from parent, while state is mutable and managed within the component.',
    date: '2025-04-17',
  },
  {
    id: 7,
    question: 'How do you create a component in React?',
    answer: 'You can create a component using a function or class. Functional components are more common in modern React.',
    date: '2025-04-18',
  },
  {
    id: 8,
    question: 'What is conditional rendering in React?',
    answer: 'Conditional rendering allows you to render different UI elements based on conditions or state.',
    date: '2025-04-19',
  },
  {
    id: 9,
    question: 'What is a key in React lists?',
    answer: 'A key is a unique identifier used to optimize rendering performance when displaying lists of items.',
    date: '2025-04-20',
  },
  {
    id: 10,
    question: 'What is React Router?',
    answer: 'React Router is a library for routing in React apps. It allows you to navigate between views or pages.',
    date: '2025-04-21',
  },
];

export const Blogs = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <p className="text-gray-500 mb-8">Let's explore some basic concepts that will make you a good developer</p>
      <p className="text-red-600 mb-4">raditkhanyt@gmail.com</p>
      {blogs.map((blog) => (
        <div key={blog.id} className="mb-8 border-b pb-4">
          <h2 className="font-semibold text-lg mb-1">{blog.question}</h2>
          <p className="text-blue-600 mb-1">Answer</p>
          <p className="text-gray-600">{blog.answer}</p>
          <p className="text-sm text-gray-400 mt-2">📅 Added at: {blog.date}</p>
        </div>
      ))}
    </div>
  );
};
