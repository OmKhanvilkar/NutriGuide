import React from 'react'
import BmiImg from '../assets/Bmi_img1.webp';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-cyan-400 text-center mb-5">
        Things You Should Know About Your Body
      </h1>
      <p className='text-xl text-red-500 text-center font-bold'> What is BMI 🤔?</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-7 m-10">
        <div className="h-40 sm:h-35 bg-purple-500 flex flex-col justify-center items-center text-center p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-yellow-300 mb-2">BODY</h2>
          <p className="text-white">Refers to the human body, including weight and height.</p>
        </div>
        <div className="h-40 sm:h-35 bg-purple-500 flex flex-col justify-center items-center text-center p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-yellow-300 mb-2">MASS</h2>
          <p className="text-white">Represents the weight of a person in kilograms (kg).</p>
        </div>
        <div className="sm:h-35 bg-purple-500 flex flex-col justify-center items-center text-center p-4 rounded-lg shadow-lg col-span-2 sm:col-span-1">
          <h2 className="text-lg font-bold text-yellow-300 mb-2">INDEX</h2>
          <p className="text-white">A numerical value categorizing weight status based on height.</p>
        </div>
      </div>

      <div className="flex justify-center">
        <img src={BmiImg} alt="BMI Chart" className="w-full max-w-lg rounded-lg shadow-lg" />
      </div>

    {/* BMI Categories Section */}
    <div className="text-white max-w-6xl mx-auto p-6 space-y-6">
      <div className="bg-cyan-600 p-4 rounded-lg">
        <h2 className="text-xl font-bold">Underweight (Less Than 18.5) - Cyan</h2>
        <p>
          A BMI below 18.5 indicates insufficient body weight for height. It may be due to nutritional deficiencies, health issues, or a high metabolism. Maintaining a balanced diet and seeking medical advice is recommended.
        </p>
      </div>

      <div className="bg-lime-500 p-4 rounded-lg">
        <h2 className="text-xl font-bold">Normal Weight (18.5 - 24.9) - Light Green</h2>
        <p>
          A BMI within this range is healthy and indicates a balanced weight. People in this category generally have a lower risk of health issues. Regular exercise and a nutritious diet help maintain this weight.
        </p>
      </div>

      <div className="bg-yellow-500 p-4 rounded-lg">
        <h2 className="text-xl font-bold">Overweight (25 - 29.9) - Yellow</h2>
        <p>
          This BMI range suggests more weight than recommended for height, increasing the risk of heart disease, diabetes, and hypertension. A healthy diet and increased physical activity are advised.
        </p>
      </div>

      <div className="bg-orange-500 p-4 rounded-lg">
        <h2 className="text-xl font-bold">Obese (30 - 34.9) - Orange</h2>
        <p>
          A BMI over 30 indicates obesity and excess body fat accumulation. This significantly raises the risk of conditions like diabetes and heart disease. Lifestyle changes and medical guidance are necessary.
        </p>
      </div>

      <div className="bg-red-500 p-4 rounded-lg">
        <h2 className="text-xl font-bold">Extremely Obese (Over 35) - Red</h2>
        <p>
        A BMI above 35 indicates severe obesity, which is linked to major health risks.Conditions like stroke, heart disease, joint problems, and respiratory issues become more common. Medical intervention, weight loss programs, or surgery may be required for better health.
        </p>
      </div>
    </div>

    </div>
  )
}

export default Home
