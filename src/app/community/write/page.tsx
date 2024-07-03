"use client";
import React, { useState } from 'react';

const WritePage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // 여기서 폼 데이터를 처리하거나 API 호출 등의 작업을 수행할 수 있습니다.
        console.log('제목:', title);
        console.log('내용:', content);
        // 예시로 console에 출력하는 것으로 대체합니다.
    }

    return (
        <div className="max-w-2xl mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">글쓰기</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">제목</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">내용</label>
                    <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={5} className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                </div>
                <div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">글쓰기</button>
                </div>
            </form>
        </div>
    );
}

export default WritePage;