// src/services/sheetBestService.js

const fetchSheetData = async (searchTerm) => {
  try {
    // Replace 'YOUR_CONNECTION_URL' with the actual connection URL from Sheet.best
    const response = await fetch(`https://sheet.best/api/sheets/e3917dd4-da7e-4ad1-8c27-a38e5ee0eb8a?q=${searchTerm}`);
    const data = await response.json();

    console.log('Fetched data:', data); // Add this line for debugging
    
    // Assuming the data is returned in a specific format, adjust this part accordingly
    const record = data[0]; // Adjust this based on the actual structure of the data
    
    return record || null;
  } catch (error) {
    console.error('Error fetching data from Sheet.best:', error);
    return null;
  }
};

export default fetchSheetData;
