"use client";
import axios from "axios";
import {useState} from "react";

const Nickname = () => {
  const [nickname, setNickname] = useState('');
  const fetchNickName = () => {
    axios.put('http://localhost:8080/api/v1/user/nickname',{
      nickname: nickname
    },{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('jwt')}`,
    }})
        .then(r => {
          if(r.status === 204) alert('변경 성공');
          else throw new Error("변경 실패");
        })
        .catch(e => {
          alert(e.message);
        })
  }
  return (
      <div className={"m-3"}>
          <h1 className="text-2xl font-bold mb-4">별명</h1>
          <input
              type="text"
              placeholder={nickname}
              className="border border-gray-300 rounded px-4 py-2 w-full mb-4 focus:outline-none focus:border-blue-500"
              onChange={e => setNickname(e.target.value)}/>
          <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={fetchNickName}>
            변경
          </button>
      </div>
  )
}


export default Nickname;