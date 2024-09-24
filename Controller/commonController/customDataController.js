
const sequelize = require('../../model/index').sequelize;
const { QueryTypes } = require('sequelize');


const PLACEHOLDER_PATTERN = /\$\{(\w+)\}/g;

// Utility function to replace placeholders in SQL
function replacePlaceholders(sql, params) {
  return sql.replace(PLACEHOLDER_PATTERN, (_, placeholder) => {
    return params[placeholder] || '';
  });
}

// Service method
const getDataFromDataCode = async (dataCodeDetails) => {
  const { dataCode, placeholderKeyValueMap } = dataCodeDetails;

  // Fetch the query from the database using the dataCode
  const queryResult = await sequelize.query(
    'SELECT * FROM application_queries WHERE query_name = :dataCode',
    { 
      replacements: { dataCode },
      type: QueryTypes.SELECT 
    }
  );

  if (!queryResult.length) {
    return  { error: 'No query found for the given data code' } ;
  }

  // Get the SQL query from the result
  let sql = queryResult[0].query_content;

  // Replace placeholders with actual values
  if (placeholderKeyValueMap) {
    sql = replacePlaceholders(sql, placeholderKeyValueMap);
  }

  // Execute the final query
  const data = await sequelize.query(sql, { type: QueryTypes.SELECT });

  if (!data.length) {
    return   { message: 'No data found' } ;
  }

  return { result: data };
};

// Route to handle the request
const customDataGetData=async (req, res) => {
  try {
    const result = await getDataFromDataCode(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({  error: error.message });
  }
};

module.exports = {
  customDataGetData
};