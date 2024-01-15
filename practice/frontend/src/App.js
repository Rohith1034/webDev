import React, { useEffect, useState } from 'react';
import Card from "./Card"
function App() {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const requests = [];

      for (let i = 0; i < 5; i++) {
        requests.push(
          fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
        );
      }

      try {
        const responses = await Promise.all(requests);
        const data = responses.map(response => response.meals[0]);
        setDataArray(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  console.log(dataArray[0]);
  

  return (
    <div className="App">
      <Card img = {dataArray[0].strMealThumb} heading={dataArray[0].strMeal} content={dataArray[0].strInstructions}/>
    </div>
  );
}

export default App;
