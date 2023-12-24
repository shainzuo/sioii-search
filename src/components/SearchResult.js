// src/components/SearchResult.js
import React from 'react';
import './SearchResult.css';

const SearchResult = ({ records }) => {
  return (
    <div className="search-result-container">
      {records.length > 0 && (
        records.map((record, index) => (
          <div key={index} className="record-item">
            {Object.entries(record).map(([key, value]) => (
              <p key={key}>
                {key}: {value || 'N/A'}
              </p>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResult;
