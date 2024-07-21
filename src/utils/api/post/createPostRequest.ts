import axios from "axios";

const createPostRequest = async (title: string, content: string, category: string) => {
  const response = await axios.post('http://localhost:8080/api/v1/community/post', {
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

  if (response.data !== undefined && response.data.split('/').pop() === "html>") {
    console.log(response.data.split('/').pop())
  }
  return {
    status: response.status,
    location: response.headers.location,
  }
}

export default createPostRequest;