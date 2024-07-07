"use client";
import React, {useState} from 'react';
import axios from 'axios';

const LifeStyle = () => {
  const [lifestyle, setLifestyle] = useState({
    exerciseFrequency: '',
    dietaryHabits: '',
    sleepDuration: 0,
    smokingStatus: false,
    alcoholConsumption: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value, type} = e.target;

    setLifestyle(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/lifestyles', lifestyle);
      console.log('Saved lifestyle:', response.data);
      // Optional: Show success message or redirect
    } catch (error) {
      console.error('Error saving lifestyle:', error);
      // Optional: Show error message to user
    }
  };

  return (
      <div className="flex justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">생활 습관</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">운동 빈도</label>
              <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">식습관</label>
              <textarea
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                  rows={4}
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">수면 시간</label>
              <input
                  type="number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center">
              <input
                  id="smokingStatus"
                  name="smokingStatus"
                  type="checkbox"
                  className="focus:ring-2 focus:ring-brand-500 h-4 w-4 text-brand-500 border-gray-300 rounded"
              />
              <label htmlFor="smokingStatus" className="ml-2 block text-sm text-gray-900">
                흡연 여부
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">음주 빈도</label>
              <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
              />
            </div>
            <div className="flex justify-center">
              <button
                  type="submit"
                  className="px-4 py-2 bg-brand-primary-500 text-white rounded-md shadow-md hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
              >
                저장
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default LifeStyle;
