import { useState } from "react";

// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import Button from "./components/Button";
import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";
import BookCard from "./components/BookCard";

import './App.css';


import prideAndPrejudiceCover from './assets/images/pride.jpeg'; 
import mockingbird from './assets/images/mockingbird.jpeg'
import GreatGatsby from './assets/images/GreatGatsby.jpeg'
import python from './assets/images/python.png'
import reactbook from './assets/images/react.png'

import ProfilePhoto from './assets/avatar/efrata_cv.jpg';
const App = () => {
  const [count, setCount] = useState(0);
  const hours = new Date().getHours();
  let greetingMessage;

  if (hours < 12) {
    greetingMessage = "Good Morning!";
  } else if (hours < 18) {
    greetingMessage = "Good Afternoon!";
  } else {
    greetingMessage = "Good Evening!";
  }

   // Sample book data
   const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A novel about the American dream, set in the 1920s.",
      coverImage: GreatGatsby, // Replace with actual image URL
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A story of racial injustice and moral growth in the South.",
      coverImage: mockingbird, // Replace with actual image URL
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description: "a novel that follows the Bennet family, a family of the gentry who have five daughters and no sons.",
      coverImage: prideAndPrejudiceCover, // Replace with actual image URL
     },
     {
      title: "Only Prejudice ",
      author: "Jane Austen",
      description: "a novel that follows the Bennet family",
      coverImage: prideAndPrejudiceCover, // Replace with actual image URL
     },
     {
      title: "Pride",
      author: "Jane Austen",
      description: "a novel that follows the Bennet family, a family of the gentry who have five daughters and no sons.",
      coverImage: prideAndPrejudiceCover, // Replace with actual image URL
     },
     {
      title: "React programming",
      author: "t.Maine ",
      description: "Learning react",
      coverImage: reactbook, // Replace with actual image URL
    },
    {
      title: "Python",
      author: "Eagle Harbor",
      description: "Python programming series books.",
      coverImage: python, // Replace with actual image URL
     },
    
  ];

  return (
    <>
       {/* Your Greeting component and dynamic greeting message */}
       <div className=" rounded-sm bg-gradient-to-r from-green-500 to-blue-500 italic font-serif bg-emerald-300 p-4 text-black rounded-lg mt-4">
        <Greeting name=" I'm Efrata, This is my Book library" />
        <p className="text-xl mt-4">{greetingMessage}</p>
      </div>

     {/* Add ProfileCard Component */}
     <div className="uppercase mt-6">
          <ProfileCard
            name="Efrata"
            bio="A passionate developer learning React and building beautiful apps."
            avatarUrl={ProfilePhoto} 
          />
      </div>
    
          {/* <div className="book-container">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div> */}

      

     
      
       {/* Add BookCard Component for each book */}
       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              description={book.description}
              coverImage={book.coverImage}
            />
       ))}
       </div>
    </>
      
  );
};


export default App;
