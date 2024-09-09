//Implement calculateAverageSales function
let salesRecordsData = [11000,8000,4500,2500]
function calculateAverageSales(salesRecordsData)
{let totalSales = salesRecordsData.reduce((sum,sales)=> sum + sales,0)
let Average = totalSales/salesRecordsData.length
return Average}
let AverageSales = calculateAverageSales(salesRecordsData);
console.log('Average Sales:',AverageSales);


//Create determinePerformanceRating function
function determinePerformanceRating (AverageSales)
{if (AverageSales > 10000) {console.log('Excellent')};
if (7000 < AverageSales < 10000) {console.log('Good')};
if (4000 < AverageSales < 7000){console.log('Satisfactory')};
if (AverageSales < 4000) {console.log('Needs Improvement')}};
let PerformanceRating = determinePerformanceRating(AverageSales)
console.log("Performance Rating",PerformanceRating)

//Develop findTopAndBottomPerformers function
function findTopandBottomPerformer(salesRecordsData)
{let topPerformer = array.prototype.reduce(AverageSales) return Math.max(salesRecordsData)
let bottomPerformer = array.prototype.reduce(salesRecordsData) return Math.min(salesRecordsData)
console.log("Top Performer",topPerformer),
console.log("Bottom Performer",bottomPerformer)}

//Combine Functions to Generate a Performance Report
function generatePerformanceReport{console.log("Average Sales:",AverageSales)
    console.log("Performance Rating:",determinePerformanceRating)
    console.log("Top and Bottom Performer",findTopandBottomPerformer)}

//Test Your Functions with Sample Data
const salesData = [{ name: 'Alice', sales: [12000, 15000, 13000] },
                   { name: 'Bob', sales: [7000, 6000, 7500] },
                   { name: 'Charlie', sales: [3000, 4000, 3500] },
                   { name: 'Diana', sales: [9000, 8500, 9200] },]
console.log(calculateAverageSales(salesData))

