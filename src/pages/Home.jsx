import { useState, useEffect } from 'react';

let breedList;

const Home = () => {
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/dogs/breeds`, {
          method: 'GET',
          headers: {
            'fetch-api-key': process.env.REACT_APP_API_KEY,
          },
          credentials: 'include',
        });

        const data = await response.json();
        console.log(data);
        breedList = data;
      } catch (err) {
        console.error(err);
      }
    };

    fetchDogData();
  });

  return <div>Home</div>;
};

export default Home;
