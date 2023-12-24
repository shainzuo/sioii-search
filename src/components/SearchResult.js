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
        // Display message based on presence of search term
        <p>{data !== null ? 'No record found' : 'Enter a search term'}</p>
      )}
    </div>
  );
};

export default SearchResult;
