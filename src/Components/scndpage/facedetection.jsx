import React, { useState } from "react";
import axios from "axios";
import './FaceDetection.css';

const FaceDetection = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleScanFace = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://127.0.0.1:5000/run-model');
      setResults(response.data);
    } catch (err) {
      console.error('Error:', err); // Log the error for debugging
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Face Detection</h2>
      <button onClick={handleScanFace}>Scan Face</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {results.length > 0 && (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              Label: {result.label}, Confidence: {result.confidence}, Box: {result.box.join(', ')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FaceDetection;
