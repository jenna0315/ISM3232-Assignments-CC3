//Implement calculateAverageSales function
let salesRecordsData = [11000,8000,4500,2500]
function calculateAverageSales(salesRecordsData)
{let totalSales = salesRecordsData.reduce((sum,sales)=> sum + sales,0)
let Average = totalSales/salesRecordsData.length
return Average}
let AverageSales = calculateAverageSales(salesRecordsData);
console.log('Average Sales:',AverageSales)

function determinePerformanceRating (AverageSales)
{if (AverageSales > 10000) {console.log('Excellent')}},
{if (7000 < AverageSales < 10000) {console.log('Good')}},
{if (4000 < AverageSales < 7000) {console.log('Satisfactory')}},
{if (AverageSales < 4000) {console.log('Needs Improvement')}},
}
let PerformanceRating = determinePerformanceRating(AverageSales)
console.log("Performance Rating",PerformanceRating)

function findTopandBottomPerformer(salesRecordsData)
{let topPerformer = array.prototype.reduce(AverageSales) => Math.max(salesRecordsData)
let bottomPerformer = array.prototype.reduce(salesRecordsData)=> Math.min(salesRecordsData)
return ("Top Performer",topPerformer),
("Bottom Performer",bottomPerformer)}

function generatePerformanceReport{console.log("Average Sales:",AverageSales)
    console.log("Performance Rating:",determinePerformanceRating)
    console.log("Top and Bottom Performer",findTopandBottomPerformer)
