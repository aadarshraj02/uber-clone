import { useState } from "react";
import axios from "axios";

interface SignupResponse {
  user: object;
  token: string;
}

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signup = async (newUser: object) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post<SignupResponse>(
        `
        http://localhost:5000/api/users/register`,
        newUser
      );

      setLoading(false);
      return response.data;
    } catch (err: any) {
      setLoading(false);
      setError(err.response?.data?.message || "Something went wrong");
      throw err;
    }
  };

  return { signup, loading, error };
};

export default useSignup;
