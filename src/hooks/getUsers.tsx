import { useEffect, useState } from "react";
import axios, { AxiosError } from 'axios'
import IUsers from "../models";

export function useUsers() {

  const [users, setUsers] = useState<IUsers[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<IUsers[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getApiData = async () => {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IUsers[]>('https://gorest.co.in/public/v2/users');

      setUsers(response.data);
      setOnlineUsers(response.data.filter((i: any) => i.status === "active"));

      setLoading(false)
    }
    catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false)
      setError(error.message)
    }
  };

  useEffect(() => {
    getApiData()
  }, [])

  return { users, onlineUsers, error, loading }
}