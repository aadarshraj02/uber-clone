import { useState } from "react";
import axios from "axios";

interface LoginResponse {
  user: object;
  token: string;
}

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: { email: string; password: string }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post<LoginResponse>(
        `${import.meta.env.VITE_BASE_URL}/api/users/login`,
        credentials
      );

      setLoading(false);
      return response.data;
    } catch (err: any) {
      setLoading(false);
      setError(err.response?.data?.message || "Something went wrong");
      throw err;
    }
  };

  return { login, loading, error };
};

export default useLogin;
