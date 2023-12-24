// src/services/sheetBestService.js

const CONNECTION_URL = 'https://sheet.best/api/sheets/e3917dd4-da7e-4ad1-8c27-a38e5ee0eb8a'; // Replace with the actual connection URL from Sheet.best

const fetchSheetData = async (searchTerm) => {
  try {
    const response = await fetch(`${CONNECTION_URL}?q=${searchTerm}`);
    const data = await response.json();
    
    // Assuming the data is returned in a specific format, adjust this part accordingly
    const record = data[0]; // Adjust this based on the actual structure of the data
    
    return record || null;
  } catch (error) {
    console.error('Error fetching data from Sheet.best:', error);
    return null;
  }
};

export default fetchSheetData;
