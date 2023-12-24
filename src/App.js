// src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import fetchSheetData from './services/sheetBestService';
import './App.css';

function App() {
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async (searchTerm) => {
    const data = await fetchSheetData(searchTerm);
    setSearchResult(data);
  };

  return (
    <div className="app-container">
      <h1>Record Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResult data={searchResult} />
    </div>
  );
}

export default App;
