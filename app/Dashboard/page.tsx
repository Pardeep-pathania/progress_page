
"use client";

import { useState } from 'react';

interface UpdateScoreFormProps {
  onSave: (rank: string, percentile: string, correctQuestions: string) => void;
  onClose: () => void;
}

export default function UpdateScoreForm({ onSave, onClose }: UpdateScoreFormProps) {
  const [rank, setRank] = useState('');
  const [percentile, setPercentile] = useState('');
  const [correctQuestions, setCorrectQuestions] = useState('');

  const handleSave = () => {
    onSave(rank, percentile, correctQuestions);
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center max-sm:block max-sm:justify-center max-sm:items-center ">
      <div className="bg-white p-6 rounded-2xl w-[45%] max-sm:w-full max-sm:mt-28">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Score</h2>
        <div className="space-y-4">
          <div className='flex justify-around max-sm:block'>
            <label className="block text-lg font-medium ">Update your rank</label>
            <input
              type="text"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              placeholder="Enter rank"
              className="w-[60%] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className='flex justify-evenly max-sm:block'>
            <label className="block text-lg font-medium mb-1">Update your percentile</label>
            <input
              type="text"
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
              placeholder="Enter percentile"
              className="w-[60%] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className='flex justify-around max-sm:block'>
            <label className="block text-lg font-medium mb-1">Update Correct Answer</label>
            <input
              type="text"
              value={correctQuestions}
              onChange={(e) => setCorrectQuestions(e.target.value)}
              placeholder="Enter correct questions"
              className="w-[60%] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-around mt-8 max-sm:block ">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-8 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-8 py-2 rounded-lg hover:bg-blue-600 transition duration-300 max-sm:mt-5 max-sm:ml-3"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}