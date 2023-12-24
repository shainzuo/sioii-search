// src/App.js
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import fetchSheetData from './services/sheetBestService';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    const records = await fetchSheetData(searchTerm);
    setSearchResults(records);
  };

  return (
    <div className="app-container">
      <h1>Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResult records={searchResults} />
    </div>
  );
}

export default App;
