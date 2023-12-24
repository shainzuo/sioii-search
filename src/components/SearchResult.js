// src/components/SearchResult.js
import React from 'react';
import './SearchResult.css';

const SearchResult = ({ records }) => {
  return (
    <div className="search-result-container">
      {records.length > 0 ? (
        records.map((record, index) => (
          <div key={index} className="record-item">
            <p>
              Name: {record.NAME || 'N/A'}, Email: {record.email || 'N/A'}, ...
            </p>
          </div>
        ))
      ) : (
        <p>No records found</p>
      )}
    </div>
  );
};

export default SearchResult;
