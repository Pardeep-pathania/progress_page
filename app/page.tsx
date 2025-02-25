


"use client";
import { useState } from 'react';
import { Line } from 'react-chartjs-2';

import { LuFileBadge } from "react-icons/lu";
import { FiBarChart2 } from "react-icons/fi";
import { IoMdDocument } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaTrophy, FaSquareCheck } from "react-icons/fa6";
import { SlNotebook } from "react-icons/sl";
// import { Progress } from "@material-tailwind/react";



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
  const [rank, setRank] = useState('YOUR RANK');
  const [percentile, setPercentile] = useState('PERCENTILE');
  const [correctQuestions, setCorrectQuestions] = useState(10);

  const handleUpdate = () => {
    const newRank = prompt('Enter your new rank:');
    const newPercentile = prompt('Enter your new percentile:');
    const newCorrectQuestions = prompt('Enter the number of correct questions:');

    if (newRank) setRank(`YOUR RANK: ${newRank}`);
    if (newPercentile) setPercentile(`PERCENTILE: ${newPercentile}`);
    if (newCorrectQuestions) setCorrectQuestions(parseInt(newCorrectQuestions));
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


 


  // type ProgressProps = {
  //   value: number;
  //   color: "blue" | "green" | "red" | "yellow" | "purple" | "indigo" | "pink" | "gray"; // Add other supported colors if needed
  // };


  return (
    <div className="p-4 flex h-full justify-between gap-3">
      <div className=' block border rounded-md min-w-[13%] p-3'>
     <div className='mt-7 flex gap-1 mb-5 p-2 rounded-2xl hover:bg-sky-100 pointer'>
       <FiBarChart2 size={25}/><h1 className="text-xl font-bold">Dashboard</h1></div>
        <div className="mt-4 flex gap-1 mb-5 p-2 rounded-2xl pointer hover:bg-sky-100 ">
        <LuFileBadge size={18}/> <h2 className="text-xl font-semibold">Skill Test</h2></div>
          <div className="mt-2 flex gap-1 mb-5 p-2 rounded-2xl hover:bg-sky-100 pointer">
           <IoMdDocument size={19}/> <h3 className="text-lg font-medium">Internship</h3>
          </div>
      </div>

      <div className='block min-w-[45%]'>
        <div className=" border rounded-md p-3 flex">
          <div className='ml-8 mr-6'>
            <span>
              <p className='ml-2'>HTML</p> 
            <FaHtml5 size={60} color='#EB5B00'/>
          </span>
          </div>

          <div>
          <h4 className="text-md font-medium mt-5">HTML Hyper Text Markup Language</h4>
          <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
          </div>

          <button onClick={handleUpdate} className=" ml-8 mt-5 mb-5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
            Update
          </button>
        </div>

        <div className="mt-6 border rounded-md p-3">
          <h2 className="text-xl font-semibold">Quick Statistics</h2>
          <div className="mt-2 flex">
           <div className='w-[27%]'> <p className='flex gap-2'><FaTrophy size={20} color='FFB200'/><span>{rank}</span></p></div>

            <div className='w-[27%]'><p  className='flex gap-2 mt-2'><SlNotebook size={20}/>{percentile}</p></div>

            <div className='w-[27%]'><p  className='flex gap-2 mt-2'><FaSquareCheck size={20} color='#38E54D'/>Correct Answer: {correctQuestions}/15</p></div>
          </div>
        </div>

        <div className="mt-6 border rounded-md p-3">
          <h2 className="text-xl font-semibold">Comparison Graph</h2>
          <div className="mt-2">
            <p>You scored {percentile} percentile which is lower than the average percentile 72% of all the engineers who took this assessment</p>
            <div className="mt-4">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      <div className='block min-w-[30%]'>
        <div className=" border rounded-md p-3">
          <h2 className="text-xl font-semibold">Syllabus Wise Analysis</h2>
          <div className="mt-2 w-[70%]">
            <p>HTML Tools, Forms, History: 80%</p>


<div className="w-full bg-gray-200 rounded-full h-2.5">
  {/* Progress Bar Fill */}
  <div
    className="bg-blue-500 h-2.5 rounded-full"
    style={{ width: `${80}%` }}
  ></div>
  </div>

          
            <p>Tags & References in HTML: 60%</p>

            <div className="w-full bg-gray-200 rounded-full h-2.5">
  {/* Progress Bar Fill */}
  <div
    className="bg-[#EB5B00] h-2.5 rounded-full"
    style={{ width: `${60}%` }}
  ></div>
  </div>

            <p>Tables & References in HTML: 24%</p>

            <div className="w-full bg-gray-200 rounded-full h-2.5">
  {/* Progress Bar Fill */}
  <div
    className="bg-[#E53888] h-2.5 rounded-full"
    style={{ width: `${24}%` }}
  ></div>
  </div>

            <p>Tables & CSS Basics: </p>

            <div className="w-full bg-gray-200 rounded-full h-2.5">
  {/* Progress Bar Fill */}
  <div
    className="bg-[#199027] h-2.5 rounded-full"
    style={{ width: `${96}%` }}
  >96%</div>
  </div>.

          </div>
        </div>

        <div className="mt-6 border rounded-md p-3">
          <h2 className="text-xl font-semibold">Question Analysis</h2>
          <div className="mt-2">
            <p>You scored {correctQuestions} questions correct out of {15}. However, it still needs some improvements.</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
  {/* Progress Bar Fill */}
  <div
    className="bg-blue-500 h-2.5 rounded-full"
    style={{ width: `${(correctQuestions / 15) * 100}%` }}
  ></div>
  </div>
        </div>
      </div>
    </div>
  );
}




















// // pages/index.tsx


// "use client";
// import { useState } from 'react';
// import { Line } from 'react-chartjs-2';

// export default function Home() {
//   const [rank, setRank] = useState('YOUR RANK');
//   const [percentile, setPercentile] = useState('PERCENTILE');
//   const [correctQuestions, setCorrectQuestions] = useState(10);
//   // const [totalQuestions, setTotalQuestions] = useState(15);

//   const handleUpdate = () => {
//     const newRank = prompt('Enter your new rank:');
//     const newPercentile = prompt('Enter your new percentile:');
//     const newCorrectQuestions = prompt('Enter the number of correct questions:');
//     // const newTotalQuestions = prompt('Enter the total number of questions:');
//     // const totalQuestions =15;

//     if (newRank) setRank(newRank);
//     if (newPercentile) setPercentile(newPercentile);
//     if (newCorrectQuestions) setCorrectQuestions(parseInt(newCorrectQuestions));
//     // if (newTotalQuestions) setTotalQuestions(parseInt(newTotalQuestions));
//   };

//   return (
//     <div className="p-4 flex h-full justify-between gap-3">

// <div className='border rounded-md min-w-[10%] p-3'>

//       <h1 className="text-2xl font-bold">Dashboard</h1>
//       <div className="mt-4">
//         <h2 className="text-xl font-semibold">Skill Test</h2>
//         <div className="mt-2">
//           <h3 className="text-lg font-medium">Internship</h3>
          
//         </div>
//       </div>

//       </div>

//     <div className='block min-w-[45%]'>

//     <div className=" border rounded-md p-3">
//             <h4 className="text-md font-medium">HTML Hyper Text Markup Language</h4>
//             <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>

//             <button onClick={handleUpdate} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
//         Update
//       </button>
//           </div>

//       <div className="mt-6 border rounded-md p-3">
    
//         <h2 className="text-xl font-semibold">Quick Statistics</h2>
//         <div className="mt-2">
//           <p>{rank}</p>
//           <p>{percentile}</p>
//         </div>
//       </div>

//       <div className="mt-6 border rounded-md p-3">
//         <h2 className="text-xl font-semibold">Comparison Graph</h2>
//         <div className="mt-2">
//           <p>You scored {percentile} percentile which is lower than the average percentile 72% of all the engineers who took this assessment</p>
//           <div className="mt-4">
//             <p>90</p>
//             <p>numberOfStudent : 4</p>
//           </div>
//         </div>
        
//       </div>

//       </div>

//       <div className='block min-w-[30%]'>

//       <div className=" border rounded-md p-3">
//         <h2 className="text-xl font-semibold">Syllabus Wise Analysis</h2>
//         <div className="mt-2">
//           <p>HTML Tools, Forms, History: 80%</p>
//           <p>Tags & References in HTML: 60%</p>
//           <p>Tables & References in HTML: 24%</p>
//           <p>Tables & CSS Basics: 96%</p>
//         </div>
//       </div>

//       <div className="mt-6 border rounded-md p-3">
//         <h2 className="text-xl font-semibold">Question Analysis</h2>
//         <div className="mt-2">
//           <p>You scored {correctQuestions} questions correct out of {15}. However, it still needs some improvements.</p>
//         </div>
//       </div>
//       </div>
      
//     </div>
//   );
// }











// export const studentData = {
//   numberOfStudent: 4,
//   perceptile: [0, 25, 50, 75, 100]
// };

// // index.js or any other component file
// import { studentData } from './data';

// export default function Home() {
//   return (
//     <div>
//       <h1>Student Data</h1>
//       <p>Number of Students: {studentData.numberOfStudent}</p>
//       <p>Perceptile Values: {studentData.perceptile.join(', ')}</p>
//     </div>
//   );
// }





// // // pages/index.tsx
// // import { useState } from 'react';

// // interface Props {
// //   initialRank: string;
// //   initialPercentile: string;
// //   initialCorrectQuestions: number;
// //   initialTotalQuestions: number;
// // }

// // export default function Home({
// //   initialRank,
// //   initialPercentile,
// //   initialCorrectQuestions,
// //   initialTotalQuestions,
// // }: Props) {
// //   const [rank, setRank] = useState(initialRank);
// //   const [percentile, setPercentile] = useState(initialPercentile);
// //   const [correctQuestions, setCorrectQuestions] = useState(initialCorrectQuestions);
// //   const [totalQuestions, setTotalQuestions] = useState(initialTotalQuestions);

// //   const handleUpdate = () => {
// //     const newRank = prompt('Enter your new rank:');
// //     const newPercentile = prompt('Enter your new percentile:');
// //     const newCorrectQuestions = prompt('Enter the number of correct questions:');
// //     const newTotalQuestions = prompt('Enter the total number of questions:');

// //     if (newRank) setRank(newRank);
// //     if (newPercentile) setPercentile(newPercentile);
// //     if (newCorrectQuestions) setCorrectQuestions(parseInt(newCorrectQuestions));
// //     if (newTotalQuestions) setTotalQuestions(parseInt(newTotalQuestions));
// //   };

// //   return (
// //     <div className="p-4">
// //       <h1 className="text-2xl font-bold">Dashboard</h1>
// //       <div className="mt-4">
// //         <h2 className="text-xl font-semibold">Skill Test</h2>
// //         <div className="mt-2">
// //           <h3 className="text-lg font-medium">Internship</h3>
// //           <div className="mt-2">
// //             <h4 className="text-md font-medium">HTML Hyper Text Markup Language</h4>
// //             <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="mt-6">
// //         <h2 className="text-xl font-semibold">Quick Statistics</h2>
// //         <div className="mt-2">
// //           <p>{rank}</p>
// //           <p>{percentile}</p>
// //         </div>
// //       </div>

// //       <div className="mt-6">
// //         <h2 className="text-xl font-semibold">Comparison Graph</h2>
// //         <div className="mt-2">
// //           <p>You scored {percentile} percentile which is lower than the average percentile 72% of all the engineers who took this assessment</p>
// //           <div className="mt-4">
// //             <p>90</p>
// //             <p>numberOfStudent : 4</p>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="mt-6">
// //         <h2 className="text-xl font-semibold">Syllabus Wise Analysis</h2>
// //         <div className="mt-2">
// //           <p>HTML Tools, Forms, History: 80%</p>
// //           <p>Tags & References in HTML: 60%</p>
// //           <p>Tables & References in HTML: 24%</p>
// //           <p>Tables & CSS Basics: 96%</p>
// //         </div>
// //       </div>

// //       <div className="mt-6">
// //         <h2 className="text-xl font-semibold">Question Analysis</h2>
// //         <div className="mt-2">
// //           <p>You scored {correctQuestions} questions correct out of {totalQuestions}. However, it still needs some improvements.</p>
// //         </div>
// //       </div>

// //       <button onClick={handleUpdate} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
// //         Update
// //       </button>
// //     </div>
// //   );
// // }

// // // This function runs on the server side and fetches data before rendering the page
// // export async function getServerSideProps() {
// //   // Here you can fetch data from an API or database
// //   // For demonstration, we will use static values
// //   const initialRank = 'Rank A';
// //   const initialPercentile = '85%';
// //   const initialCorrectQuestions = 10;
// //   const initialTotalQuestions = 15;

// //   return {
// //     props: {
// //       initialRank,
// //       initialPercentile,
// //       initialCorrectQuestions,
// //       initialTotalQuestions,
// //     },
// //   };
// // }