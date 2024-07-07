"use client"
import React, {useState} from 'react';

const MentalHealth = () => {
  const [mentalHealthState, setMentalHealthState] = useState({
        state5: false,
        state4: false,
        state3: false,
        state2: false,
        state1: false
    });
  const [mentalDisorderHistory, setMentalDisorderHistory] = useState('');
  const [currentMedication, setCurrentMedication] = useState('');
  const [currentTherapy, setCurrentTherapy] = useState('');

  const mentalHealthStateOptions = [1, 2, 3, 4, 5];

  const checkMentalHealthState = (e:any) => {
    const { name, checked } = e.target;
        setMentalHealthState(prevState => ({
            state5: name === 'state5' ? checked : false,
            state4: name === 'state4' ? checked : false,
            state3: name === 'state3' ? checked : false,
            state2: name === 'state2' ? checked : false,
            state1: name === 'state1' ? checked : false
        }));
  }
  const handleChange = (e:any) => {
    const {name, value} = e.target;
    switch (name) {
      case 'mentalHealthState':
        setMentalHealthState(value);
        break;
      case 'mentalDisorderHistory':
        setMentalDisorderHistory(value);
        break;
      case 'currentMedication':
        setCurrentMedication(value);
        break;
      case 'currentTherapy':
        setCurrentTherapy(value);
        break;
      default:
        break;
    }
  };

  return (
      <div className="flex justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">정신 건강</h1>
          <form className="space-y-4">
            <div className="자가 정신건강 평가">
              <div className="mb-3">
                내가 생각하기에 내 정신 건강은?
              </div>
              <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    name="state5"
                    checked={mentalHealthState.state5}
                    onChange={handleChange}
                    className="mr-2"
                />
                <label className="text-sm">5: 매우 좋음</label>
              </div>
              <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    name="state4"
                    checked={mentalHealthState.state4}
                    onChange={handleChange}
                    className="mr-2"
                />
                <label className="text-sm">4: 좋음</label>
              </div>
              <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    name="state3"
                    checked={mentalHealthState.state3}
                    onChange={handleChange}
                    className="mr-2"
                />
                <label className="text-sm">3: 보통</label>
              </div>
              <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    name="state2"
                    checked={mentalHealthState.state2}
                    onChange={handleChange}
                    className="mr-2"
                />
                <label className="text-sm">2: 나쁨</label>
              </div>
              <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    name="state1"
                    checked={mentalHealthState.state1}
                    onChange={handleChange}
                    className="mr-2"
                />
                <label className="text-sm">1: 매우 나쁨</label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">정신 질환 유무 및 이력</label>
              <textarea
                  name="mentalDisorderHistory"
                  value={mentalDisorderHistory}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">복용 중인 약물</label>
              <input
                  type="text"
                  name="currentMedication"
                  value={currentMedication}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">진행 중인 치료</label>
              <input
                  type="text"
                  name="currentTherapy"
                  value={currentTherapy}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex justify-center mt-6">
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
};

export default MentalHealth;
