// src/services/sheetBestService.js

const fetchSheetData = async (searchTerm) => {
  try {
    const connectionUrl = 'https://sheet.best/api/sheets/e3917dd4-da7e-4ad1-8c27-a38e5ee0eb8a';
    const response = await fetch(`${connectionUrl}?q=${searchTerm}`);
    const data = await response.json();

    console.log('Fetched data:', data);

    // Assuming the data is returned in a specific format, adjust this part accordingly
    const records = data.map(record => ({
      SN: record.SN,
      NAME: record.NAME,
      'GMS NO.': record['GMS NO.'],
      'SVC NO.': record['SVC NO.'],
      DOE: record.DOE,
      'NOS OF': record['NOS OF'],
      email: record.email,
    }));

    console.log('Records:', records);

    return records || [];
  } catch (error) {
    console.error('Error fetching data from Sheet.best:', error);
    return [];
  }
};

export default fetchSheetData;
