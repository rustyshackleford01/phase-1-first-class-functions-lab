const returnFirstTwoDrivers = function () {
    const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
    return drivers.slice(0, 2);
  };
  
  returnFirstTwoDrivers();
  
  const returnLastTwoDrivers = function () {
    const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
    return drivers.slice(2, 4);
  };
  
  returnLastTwoDrivers();

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];






  function createFareMultiplier(multiplier) {
    // Return a function that multiplies the fare by the multiplier
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Example usage
  const fareDoubler = createFareMultiplier(2);
  console.log(fareDoubler(10)); // Should output 20
  
  const fareTripler = createFareMultiplier(3);
  console.log(fareTripler(10)); // Should output 30


  function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers();
  };

  selectDifferentDrivers();