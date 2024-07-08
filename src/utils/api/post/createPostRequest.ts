import axios from "axios";
import React from "react";
import {Response} from "@/types/response";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

const createPostRequest = async (title: string, content: string, category: string) => {
  const response =  await axios.post('http://localhost:8080/api/v1/community/post', {
        title: title,
        content: content,
        category: category,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem('jwt')}`,
        }
      }
  );
  return {
    status: response.status,
    location: response.headers.location,
  }
}

export default createPostRequest;