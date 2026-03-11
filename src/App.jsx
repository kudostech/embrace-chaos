import React from "react";

function App() {
  return (
    <div className=" bg-amber-900 min-h-screen flex flex-col items-center gap-20  ">
      <div>
          <h1 className=" text-6xl pt-20 font-extrabold text-center text--700 ">EMBRACE CHAOS</h1>
        <h1 className=" text-3xl pt-20 font-extrabold text-center ">LET CHAOS DECIDE</h1>
      <p className=" text-center mx-20 mt-4"> 
        Every day starts with thousands of decisions. Don't know what to do next?
        Suffering from "Decision Fatigue"? Let us do the thinking for you!
        Press the button and we will surrender your fate to the digital gods of chaos.
      </p>
      </div>
       <button className=" mx-auto bg-amber-600 p-4 rounded-2xl font-bold "> EMBRACE CHAOS </button>
    <div className=" flex flex-col gap-2">
          <h2 className=" cursor-pointer bg-amber-300 p-3 w-100  text-center font-bold ">
          Your Mission
        </h2> 
        <p> {} </p> {/* displaying the chaos decision here*/}
  <button className=" font-bold mx-auto bg-green-600 p-4 rounded-2xl mb-10">  DO IT AGAIN </button>
    </div>

    </div>
  );}

export default App;
