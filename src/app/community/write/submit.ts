import axios from "axios";
import React from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

const handleSubmit = (router:AppRouterInstance,title: string, content: string, category: string) => (event: React.MouseEvent) => {
  axios.post('http://localhost:8080/api/v1/community/post', {
    title: title,
    content: content,
    category: category,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt'),
    }
  }).then(r => {
    console.log(r);
    console.log(r.headers);
    if (r.status === 201) router.push(r.headers['location']);
    else throw new Error('글쓰기 실패');
  }).catch(e => {
    alert(e.message);
  })
}

export default handleSubmit;