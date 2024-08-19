import axios from 'axios';

export const SignInRequest = async (username: string, password: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  try {
    const response = await axios.post(`${baseUrl}/login`, {
      username: username,
      password: password,
    }, {
      headers: { 'Content-Type': 'application/json' },
    });
    const jwt = response.headers["authorization"];
    return { jwt, status: response.status };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { error: error.response.status };
    } else {
      throw new Error("Unexpected error occurred");
    }
  }
};