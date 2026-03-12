import React from "react";
import { useState } from "react";

function App() {

  const [ mission, setMission ] = useState("Press the button to embrace chaos");

const chaosMissions = [
  "Call a friend you haven't spoken to in 1 year",
  "Walk 1 km outside",
  "Learn 3 French words now",
  "Dance for 2 minutes in your room",
  "Text your crush something unexpected",
  "Do 10 push-ups",
  "Read a random Wikipedia article",
  "Compliment a stranger today",
  "Sing the chorus of a song loudly",
  "YOU MUST: Try something totally random now"
];

 const generateMission = () => {
    const randomIndex = Math.floor(Math.random() * chaosMissions.length);
    setMission(chaosMissions[randomIndex]);
  };



 return (
    <div className=" bg-amber-900 min-h-screen flex flex-col items-center gap-20  ">
      <div>
          <h1 className=" text-6xl pt-20 text-white font-extrabold text-center text--700 ">EMBRACE CHAOS</h1>
        <h1 className=" text-3xl pt-20 font-extrabold text-center ">LET CHAOS DECIDE</h1>
      <p className=" text-center mx-20 mt-4 text-gray-400"> 
        Every day starts with thousands of decisions. Don't know what to do next?
        Suffering from "Decision Fatigue"? Let us do the thinking for you!
        Press the button and we will surrender your fate to the digital gods of chaos.
      </p>
      </div>
       <button 
       onClick={generateMission}
       className=" cursor-pointer mx-auto bg-amber-600 p-4 rounded-2xl font-bold "> EMBRACE CHAOS </button>
    <div className=" flex flex-col gap-2">
          <h2 className=" bg-amber-300 p-3 w-180  text-center font-bold ">
          Your Mission
        </h2> 
        <p className=" p-4 text-white text-center"> {mission} </p> {/* displaying the chaos decision here*/}
  <button
  onClick={generateMission}
  className=" cursor-pointer font-bold mx-auto bg-green-600 p-4 rounded-2xl mb-10"> CLICK THIS LINK TO DO MATH CALCULATION </button>
    </div>

    </div>
  );}

export default App;
