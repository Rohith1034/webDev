import React, { useEffect, useState } from "react";
import Card from "./Card";

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data", {
          method: "GET",
        });
        const data = await response.json();
        console.log(data);
        setData(data); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [])

  return (
    <div className="App">
      <div className="card-container">
        {data && data.length > 0 ? (
          <Card img={data[0].img} heading= {data[0].heading} content ={data[0].content} />
        ) : (
          <p>Loading...</p>)}
      </div>
    </div>
  );
}

export default App;
