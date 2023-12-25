import React, { useState, useEffect } from 'react';
import { gql, request } from 'graphql-request'; // Import GraphQL library (e.g., graphql-request)

const EducationComponent = () => {
  const [data, setData] = useState(null);

  // Define GraphQL query
  const query = gql`
    query {
      educationData {
        title
        description
        // Add more fields as needed
      }
    }
  `;

  useEffect(() => {
    // GraphQL endpoint URL
    const endpoint = 'https://your-graphql-endpoint-url.com';

    // Fetch data using GraphQL request
    request(endpoint, query)
      .then((response) => {
        setData(response.educationData); // Set fetched data to state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [query]);

  return (
    <div>
      <h2>Education Data</h2>
      {data ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {/* Render other data fields */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EducationComponent;
