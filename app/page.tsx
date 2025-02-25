
"use client";
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { LuFileBadge } from "react-icons/lu";
import { FiBarChart2 } from "react-icons/fi";
import { IoMdDocument } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaTrophy, FaSquareCheck } from "react-icons/fa6";
import { SlNotebook } from "react-icons/sl";
import { GiOnTarget } from "react-icons/gi";
import { Circle } from 'rc-progress';
import UpdateScoreForm from './Dashboard/page'; 





import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [rank, setRank] = useState('');
  const [percentile, setPercentile] = useState('');
  const [correctQuestions, setCorrectQuestions] = useState(10);
  const [isFormOpen, setIsFormOpen] = useState(false); 

  const handleUpdate = () => {
    setIsFormOpen(true); 
  };

  const handleSave = (newRank: string, newPercentile: string, newCorrectQuestions: string) => {
    if (newRank) setRank(newRank);
    if (newPercentile) setPercentile(newPercentile);
    if (newCorrectQuestions) setCorrectQuestions(parseInt(newCorrectQuestions));
    setIsFormOpen(false); 
  };

  const chartData = {
    labels: ['0', '25', '50', '75', '100'],
    datasets: [
      {
        label: 'Percentile',
        data: [0, 25, 50, 75, 100],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Percentile Comparison',
      },
    },
  };

  return (
    <div className="p-4 flex h-full justify-between gap-3 lg:flex md:block sm:block max-sm:block">
      
      <div className='block border rounded-md min-w-[13%] p-3 lg:block md:flex sm:flex max-sm:flex md:justify-around sm:justify-around max-sm:justify-around'>
        <div className='mt-7 flex gap-1 mb-5 p-2 rounded-2xl hover:bg-sky-100 pointer md:mt-7 sm:mt-7 max-sm:mt-7'>
          <FiBarChart2 size={25} className='mt-1' /><h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <div className="mt-4 flex gap-1 mb-5 p-2 rounded-2xl pointer hover:bg-sky-100 md:mt-7 sm:mt-7 max-sm:mt-7 ">
          <LuFileBadge size={18} className='mt-1'/> <h2 className="text-xl font-semibold">Skill Test</h2>
        </div>
        <div className="mt-2 flex gap-1 mb-5 p-2 rounded-2xl hover:bg-sky-100 pointer md:mt-7 sm:mt-7 max-sm:mt-7">
          <IoMdDocument size={19} className='mt-1' /> <h3 className="text-lg font-medium">Internship</h3>
        </div>
      </div>


      {/* Middle Section */}
   
      <div className='block min-w-[45%] gap-2'>
   
        <div className="border rounded-md p-3 flex max-sm:block ">
          <div className='ml-8 mr-6 '>
            
              <p className='ml-2'>HTML</p>
              <FaHtml5 size={60} color='#EB5B00' />
            </div>
          
          <div className='max-sm:text-center'>
          <div>
            <h4 className="text-md font-medium mt-5">HTML Hyper Text Markup Language</h4>
            <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
          </div>
          <button onClick={handleUpdate} className="ml-8 mt-5 mb-5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
            Update
          </button>
          </div>
        </div>

        {/* Quick Statistics */}

        <div className="mt-6 border rounded-md p-3">
          <h2 className="text-xl font-semibold max-sm:mb-5">Quick Statistics</h2>
          <div className="mt-2 flex lg:justify-around max-sm:justify-between">
            <div className='w-[27%]'>
            <span className='text-2xl font-semibold ml-5'>{rank}</span>
              <p className='flex gap-2 text-gray-700'><FaTrophy size={20} color='FFB200' />YOUR RANK</p>
            </div>
            <div className='w-[27%]'>
              <span className='text-2xl font-semibold ml-7'>{percentile}</span>
              <p className='flex gap-2 mt-2 max-sm:mt-1 text-gray-700'><SlNotebook size={20} /> PERCENTILE</p>
            </div>
            <div className='w-[27%]'>
              <span className='text-2xl font-semibold ml-6'>{correctQuestions}/15</span>
              <p className='flex gap-2 mt-2 max-sm:mt-1 text-gray-700'><FaSquareCheck size={20} color='#38E54D' />Correct Answer</p>
            </div>
          </div>
        </div>

        {/* Comparison Graph */}

        <div className="mt-6 border rounded-md p-3 h-auto ">
          <h2 className="text-xl font-semibold">Comparison Graph</h2>
          <div className="mt-2">
            <p>You scored {percentile} percentile which is lower than the average percentile 72% of all the engineers who took this assessment</p>
            <div className="mt-4 max-sm:w-[85%]">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}

      <div className='block min-w-[30%]'>
        
        <div className="border rounded-md p-3 pl-5">
          <h2 className="text-xl font-semibold">Syllabus Wise Analysis</h2>
          <div className="mt-2 w-[70%]">
            <p>HTML Tools, Forms, History:</p>
            <div className=" flex justify-between w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${80}%` }}></div> <span>80%</span>
            </div>
            <p className='my-4'>Tags & References in HTML:</p>
            <div className=" flex justify-between w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-[#EB5B00] h-2.5 rounded-full" style={{ width: `${60}%` }}></div><span>60%</span>
            </div>
            <p className='my-4'>Tables & References in HTML: </p>
            <div className="flex justify-between w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-[#E53888] h-2.5 rounded-full" style={{ width: `${24}%` }}></div><span>24%</span>
            </div>
            <p className='my-4'>Tables & CSS Basics:</p>
            <div className="flex justify-between w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-[#199027] h-2.5 rounded-full" style={{ width: `${96}%` }}></div><span className='mt-15'>96%</span>
            </div>
          </div>
        </div>

        {/* Question Analysis */}

        <div className="mt-6 border rounded-md p-3 h-[60%] w-full">
          <div className='flex justify-between px-4'>
          <h2 className="text-xl font-semibold mb-4">Question Analysis</h2>
          <span className='text-2xl font-semibold ml-6'>{correctQuestions}/15</span>
          </div>
          <div className="mt-2 mb-5">
            <p>You scored {correctQuestions} questions correct out of {15}. However, it still needs some improvements.</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full roundprogress mt-8 ml-[35%] ">
            <Circle
              percent={(correctQuestions / 15) * 100}
              strokeWidth={18}
              trailWidth={16}
              strokeColor="#3492eb"
            />
           
            <h1 className='text-xl w-full font-semibold  text-center mt-7'> {Math.floor((correctQuestions / 15) * 100)}% <br />Your Progress:</h1>
             
          </div>
        </div>
      </div>

      {/* Popup Form */}

      {isFormOpen && (
        <UpdateScoreForm
          onSave={handleSave}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
}