import { useState, useCallback } from 'react';

const useFetchDogData = () => {
  const [dogData, setDogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDogData = useCallback(async searchParams => {
    setIsLoading(true);
    setError(null);
    const breeds = searchParams.get('breeds');
    const zipCodes = searchParams.get('zipCodes');
    const ageMin = searchParams.get('ageMin');
    const ageMax = searchParams.get('ageMax');
    const size = searchParams.get('size');
    const sort = searchParams.get('sort');
    const from = searchParams.get('from');
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/dogs/search?${breeds && `breeds=${breeds}`}&${zipCodes && `zipCodes=${zipCodes}`}&${ageMin && `ageMin=${ageMin}`}&${
          ageMax && `ageMax=${ageMax}`
        }&${size && `size=${size}`}&${sort && `sort=${sort}`}&${from && `from=${from}`}`,
        {
          method: 'GET',
          headers: {
            'fetch-api-key': process.env.REACT_APP_API_KEY,
          },
          credentials: 'include',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to execute search fetch!');
      }
      console.log(response);
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
