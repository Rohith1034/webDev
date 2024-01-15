import React, { useEffect, useState } from "react";
import Card from "./Card";

function createcard(c) {
  return <Card img={c.img} heading={c.heading} content={c.content} />;
}

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/data", {
          method: "GET",
        });
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="card-container">
        {data.length > 0 ? (
          data.map(createcard)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
