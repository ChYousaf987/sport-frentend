
import { useEffect, useState } from "react";
import { FAQ } from "./FAQ";

export const Accordain = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false); // Track active FAQ by ID

  let faq=[
    {
      "id": 1,
      "question": "Q. Lorem ipsum asd adasd dasdsa adsd kiov fjoj",
      "answer": "React.js is a powerful JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes, making it an excellent choice for building fast, dynamic, and scalable applications."
    },
    {
      "id": 2,
      "question": "Q. Lorem ipsum asd adasd dasdsa adsd kiov fjoj",
      "answer": "The Virtual DOM is a lightweight copy of the real DOM in React. When a component's state changes, React compares the new virtual DOM with the previous one, calculates the difference, and updates only the necessary parts of the real DOM, improving performance."
    },
    {
      "id": 3,
      "question": "Q. Lorem ipsum asd adasd dasdsa adsd kiov fjoj",
      "answer": "Components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation. Components can be functional or class-based, making code modular and easier to manage."
    },
    {
      "id": 4,
      "question": "Q. Lorem ipsum asd adasd dasdsa adsd kiov fjoj",
      "answer": "State in React is managed using the useState hook in functional components or the setState method in class components. State allows you to store and manage dynamic data in a component, re-rendering the UI whenever the state changes."
    },
    {
      "id": 5,
      "question": "Q. Lorem ipsum asd adasd dasdsa adsd kiov fjoj",
      "answer": "JSX is a syntax extension that looks similar to HTML, but it’s actually used in React to describe the UI. JSX allows you to write HTML-like code within JavaScript, making the structure of components more readable and intuitive."
    },
    {
        "id": 6,
        "question": "Q. Lorem ipsum asd adasd dasdsa adsd kiov fjoj",
        "answer": "JSX is a syntax extension that looks similar to HTML, but it’s actually used in React to describe the UI. JSX allows you to write HTML-like code within JavaScript, making the structure of components more readable and intuitive."
      }
  ]
  useEffect(() => {
    setData(faq);
  }, []);

  console.log(data);

  const handleToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
  };

  return (
    <>
      <ul className="w-[100%] flex flex-col gap-6 mt-6">
        {data &&
          data.map((curElem) => {
            const { id } = curElem;
            return (
              <FAQ
                key={id}
                curData={curElem}
                isActive={activeId === id}
                onToggle={() => handleToggle(id)}
              />
            );
          })}
      </ul>
    </>
  );
};
