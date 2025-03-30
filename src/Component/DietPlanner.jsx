import { useEffect, useState } from "react"
import React from 'react'

const About = () => {
  const [details, setdetails] = useState("")
  const [goal, setGoal] = useState("Weight Gain")
  const [dietPlan, setdietPlan] = useState("")
  const [loading, setloading] = useState(false)

  const createInput = async () => {
    let input = details + " " + goal;

    try {
      setloading(true)
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer Your---Own--Api--Key",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "deepseek/deepseek-r1-zero:free",
          "messages": [
            {
              "role": "user",
              "content": `Provide a concise diet plan based on Height (cm), Weight (KG), Age, Gender, and Goal: ${input}. Include daily calorie needs, macronutrient breakdown, and simple meal suggestions in 5 lines.`
            },
          ],
        })
      });

      const data = await response.json();
      setdietPlan(data.choices?.[0]?.message?.content || "No diet plan available.");
    }
    catch(error){
      console.error("Error fetching diet plan:", error);
      setdietPlan("Failed to fetch diet plan. Please try again or later sometime.")
    }
    finally{
      setloading(false)
    }
    
  }

  const Reset=()=>{
    setTimeout(()=>{
      setdetails("");
      setGoal("Weight Gain");
      setdietPlan("");
    },1000)
  }


  return (
    <>
      <marquee className="m-0.5 mb-2 text-xl text-amber-600">Generate Your Own Diet Plan</marquee>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Input for user details */}
        <label className="block font-semibold text-gray-700">
          Enter Details (Space Separated)<br />
          <span className="text-red-300">Height (cm), Weight (KG), Age, Gender:</span>
          <input value={details} onChange={(e) => setdetails(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
            placeholder="For Ex: 174 58 21 male"
          />
        </label>

        {/* Dropdown for goal selection */}
        <label className="block mt-4 font-semibold text-gray-700 mb-4">
          Select Your Goal:
          <select value={goal} onChange={(e) => setGoal(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="Weight Gain">Weight Gain</option>
            <option value="Weight Loss">Weight Loss</option>
          </select>
        </label>
        <div className='flex justify-center'>
          <button onClick={createInput} className='bg-cyan-400 pl-3 pr-3 p-1.5 rounded-2xl hover:bg-cyan-500 active:bg-cyan-700'>
            Create A Diet Plan
          </button>
        </div>

      </div>

      {loading && (
        <>
          <div className="flex mt-20 justify-center align-middle">
            Genearting Diet Plan for You Please Wait....
          </div>
          <div className="flex justify-center mt-5">
            <div className="ml-1.5 h-8 w-8 border-t-cyan-300 border-t-3 rounded-4xl animate-spin"></div>
          </div>

        </>
      )}

      {dietPlan && (
        <div className="m-6 p-10 border border-gray-300 rounded-md  backdrop-blur-2xl text-gray-100">
          <h2 className="font-bold text-2xl mb-2 text-orange-500">Your Diet Plan:</h2>
          <pre className="whitespace-pre-line text-md font-sans">{dietPlan}</pre>
          <div className='flex justify-center'>
          <button onClick={Reset} className='bg-cyan-400 pl-3 pr-3 p-1.5 rounded-2xl hover:bg-cyan-500 active:bg-cyan-700'>
            Reset
          </button>
        </div>
        </div>
      )}
    </>
  )
}

export default About


