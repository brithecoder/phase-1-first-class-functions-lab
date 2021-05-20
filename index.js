// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(){
    const drivers2= [...drivers]
    return drivers2.slice(0,2)
}

function returnLastTwoDrivers(){
    const drivers3=[...drivers]
     return drivers3.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(integer){
return totalFarePrice => totalFarePrice* integer
 }
 
 function fareDoubler(fare){
     return fare * 2;
 }
 function fareTripler(fare2){
     return fare2*3;
 }
 function selectDifferentDrivers(driversArray,driversFunctions){
     return driversFunctions(driversArray)
 }
 selectDifferentDrivers(drivers,returnLastTwoDcrivers)