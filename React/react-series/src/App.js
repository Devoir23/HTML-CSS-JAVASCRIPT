// fetching data using useEffect
import React, { useState, useEffect }  from "react";

function DataFetching(){
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetching data from API
    const fetchData = async () => {
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result.slice(0,5)); // display only the first 5 posts
      }
      catch (err){
        setError(err.message);
      }
    };

    fetchData();

  }, []); // empty dependency array ensures it runs once on mount 
  if (error) return <p>Error: {error}</p>;

  return(
    <div>
    <h1>Fetched Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;