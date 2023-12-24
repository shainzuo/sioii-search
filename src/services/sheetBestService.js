// src/services/sheetBestService.js

const fetchSheetData = async (searchTerm) => {
  try {
    // Replace 'YOUR_CONNECTION_URL' with the actual connection URL from Sheet.best
    const response = await fetch(`https://sheet.best/api/sheets/e3917dd4-da7e-4ad1-8c27-a38e5ee0eb8a?q=${searchTerm}`);
    const data = await response.json();
    
    // Assuming the data is returned in a specific format, adjust this part accordingly
    const records = data; // Adjust this based on the actual structure of the data
    
    // Filter records based on the search term (case-insensitive)
    const filteredRecords = records.filter(record =>
      record['SVC NO.'].toLowerCase() === searchTerm.toLowerCase() || // Assuming 'SVC NO.' is the service number property
      record.email.toLowerCase() === searchTerm.toLowerCase()         // Assuming email is the email property
    );
    
    return filteredRecords || [];
  } catch (error) {
    console.error('Error fetching data from Sheet.best:', error);
    return [];
  }
};

export default fetchSheetData;
