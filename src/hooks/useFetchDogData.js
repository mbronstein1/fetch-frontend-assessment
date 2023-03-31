import { useState, useCallback } from 'react';

const useFetchDogData = () => {
  const [dogData, setDogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDogData = useCallback(async searchParams => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(searchParams ? `${process.env.REACT_APP_BASE_URL}/dogs/search?${searchParams}` : `${process.env.REACT_APP_BASE_URL}/dogs/search`, {
        method: 'GET',
        headers: {
          'fetch-api-key': process.env.REACT_APP_API_KEY,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to execute search fetch!');
      }

      const data = await response.json();
      console.log(data);

      const dogResponse = await fetch(`${process.env.REACT_APP_BASE_URL}/dogs`, {
        method: 'POST',
        headers: {
          'fetch-api-key': process.env.REACT_APP_API_KEY,
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data.resultIds),
      });

      if (!dogResponse.ok) {
        throw new Error('Failed to fetch dogs!');
      }

      const dogData = await dogResponse.json();
      console.log(dogData);
      setDogData(dogData);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    dogData,
    fetchDogData,
  };
};

export default useFetchDogData;
