import { useState } from "react"
import React from 'react'

const Calculator = () => {

  const [inputh, setInputh] = useState("")
  const [inputw, setInputw] = useState("")

  const [result, setResult] = useState(false)
  const [category, setCategory] = useState("")

  const [details, setDetails] = useState(false)



  const detailedInfo = [{
    category: 'Underweight',
    currentCondition: 'Low body weight compared to height.May experience fatigue, weakened immune system, and nutrient deficiencies. Increased risk of osteoporosis or anemia.',
    diet: 'High-calorie, nutrient-dense foods: Nuts, seeds, avocados, whole grains. Protein-rich foods: Eggs, lean meats, legumes, dairy products. Healthy fats: Olive oil, nut butter, fatty fish (salmon, tuna). Frequent meals: Eat 5-6 smaller meals throughout the day.',
    overcome: 'Strength training: Focus on muscle-building exercises. Avoid excessive cardio: Prioritize weightlifting over long cardio sessions. Consult a dietitian: For a personalized meal plan.Monitor progress: Regularly track your weight and adjust your diet accordingly.'
  }, {
    category: 'Normal weight',
    currentCondition: 'Healthy weight for height. Lower risk of chronic diseases (like diabetes and heart disease). Generally good energy levels and overall health.',
    diet: 'Balanced diet: Include fruits, vegetables, lean proteins, whole grains, and healthy fats. Maintain portion control: Avoid overeating or excessive snacking. Stay hydrated: Drink plenty of water.',
    overcome: 'Regular exercise: Include a mix of cardio, strength training, and flexibility exercises. Healthy lifestyle: Maintain good sleep patterns and manage stress. Monitor weight periodically: To ensure you stay within the normal range.'
  },
  {
    category: 'Overweight',
    currentCondition: 'Excess body weight, higher fat accumulation. Increased risk of developing health issues such as high blood pressure, diabetes, and joint problems. May experience reduced energy levels or difficulty with physical activities.',
    diet: 'Low-calorie, nutrient-dense foods: Focus on fruits, vegetables, and lean proteins. Reduce processed foods: Avoid sugary drinks, fried foods, and refined carbs. Increase fiber intake: Helps with satiety and digestion (whole grains, beans, vegetables).',
    overcome: 'Regular exercise: At least 150 minutes of moderate aerobic activity per week. Strength training: Helps build muscle and boosts metabolism. Lifestyle changes: Reduce sedentary time, avoid late-night eating, and practice mindful eating.'
  },
  {
    category: 'Obesity',
    currentCondition: 'Significant excess body fat. High risk of serious health conditions, including heart disease, type 2 diabetes, and certain cancers. May experience fatigue, breathlessness, and mobility issues.',
    diet: 'Calorie-controlled diet: Prioritize vegetables, lean protein, and whole grains. Limit unhealthy fats and sugars: Avoid fast food, sugary drinks, and processed snacks. Meal planning: Structured meals to avoid overeating and impulsive eating.',
    overcome: 'Start with low-impact exercises: Walking, swimming, or cycling to reduce joint stress. Gradual progression: Slowly increase workout intensity. Seek professional guidance: Consult a healthcare provider or dietitian for personalized advice. Behavioral changes: Address emotional eating habits and set realistic goals.'
  }];

  const resetBmi = () => {
    setTimeout(()=>{
      setInputh(""),
      setInputw(""),
      setResult(false),
      setCategory(''),
      setDetails(false)
    },1000)
  }

  const calcBmi = () => {
    if (inputh && inputw) {

      let height = Number(inputh)
      let weight = Number(inputw)

      //Bmi Calculation
      const heightInMeter = height / 100;
      const BMI = weight / Math.pow(heightInMeter, 2);
      setResult(BMI.toFixed(2))

      //Clssifying The Weight Category
      let weightCategory =
        (BMI < 18.50) ? 'Underweight' :
          (BMI <= 24.90) ? 'Normal weight' :
            (BMI <= 29.90) ? 'Overweight' : 'Obesity';

      setCategory(weightCategory);
      setDetails(false)

      if(BMI<14.5 || BMI>42){
        alert("Your BMI is at a critical level. Please consult a doctor for proper medical advice.")
      }

    }
    else {
      alert("Enter Both Values")
    }
  }

  const getDetail = () => {
    let matchingInfo = '';
    detailedInfo.map((info) => {
      if (info.category === category) {
        matchingInfo = info
      }
    });
    setDetails(matchingInfo);
  }

  return (
    <>
      <p className="text-2xl text-center text-red-400 font-semibold mb-4">Let's Calculate Your BMI</p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center">
          <p className="mb-2">Enter Your Height:</p>
          <input value={inputh}
            placeholder="In Centimeter"
            className="bg-white border border-gray-300 rounded-xl px-3 py-2 text-red-600 text-center w-64"
            onChange={(e) => setInputh(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center mb-3">
          <p className="mb-2">Enter Your Weight:</p>
          <input value={inputw}
            placeholder="In KG's"
            className="bg-white border border-gray-300 rounded-xl px-3 py-2 text-red-600 text-center w-64"
            onChange={(e) => setInputw(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-center gap-3 mb-10">
          <button onClick={calcBmi} className="font-bold bg-red-600 w-30 h-8 rounded-3xl hover:bg-red-500 hover:cursor-pointer active:bg-red-700">Calculate</button>
          <button onClick={resetBmi} className="font-bold bg-red-600 w-30 rounded-3xl border-white hover:bg-red-500 hover:cursor-pointer active:bg-red-700">Reset</button>
        </div>
      </div>
      {result && (
        <div className="mt-0 m-10">
          Your BMI is
          <span className="text-cyan-400 text-xl m-2">{result}</span>,
          indicating that you fall into the
          <span className="text-cyan-400 text-xl m-2">{category}</span>
          category based on standard guidelines.
          <p>
            <button className="text-cyan-400 text-xl mr-2" onClick={getDetail}>Click Here</button>
            To Get Detailed Information About your Body....</p>
        </div>
      )}

      {details && (
        <div className="m-10">
          <h3 className="font-bold text-red-400 underline">Current Condition:</h3>
          <p className="mt-2 mb-2.5"> {details.currentCondition}</p>
          <h3 className="font-bold text-red-400 underline">Recommended Diet:</h3>
          <p className="mt-2 mb-2.5"> {details.diet}</p>
          <h3 className="font-bold text-red-400 underline">How to Overcome:</h3>
          <p className="mt-2 mb-2.5"> {details.overcome}</p>
        </div>
      )}


    </>

  )
}

export default Calculator

