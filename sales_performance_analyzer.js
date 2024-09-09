//Implement calculateAverageSales function
let salesRecordsData = [111,222,333,444]
function calculateAverageSales(salesRecordsData)
{let totalSales = salesRecordsData.reduce((sum,sales)=> sum + sales,0)
let Average = totalSales/salesRecordsData.length
return Average}
let AverageSales = calculateAverageSales(salesRecordsData);
console.log('Average Sales:',AverageSales)
