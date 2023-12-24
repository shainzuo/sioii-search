// src/components/SearchResult.js
import React from 'react';
import './SearchResult.css';

const SearchResult = ({ data }) => {
  return (
    <div className="search-result-container">
      {data ? (
        // Display information here
        <p>{data.name}, {data.email}, ...</p>
      ) : (
        <p>No record found</p>
      )}
    </div>
  );
};

export default SearchResult;
