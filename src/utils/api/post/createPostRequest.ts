import axios from "axios";

const createPostRequest = async (title: string, content: string, category: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await axios.post(`${baseUrl}/api/v1/community/post`, {
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