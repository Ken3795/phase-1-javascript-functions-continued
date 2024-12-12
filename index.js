// Saturday Fun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Monday Work function
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Wrap Adjective function
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example Calls:
  console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("hike")); // "This Saturday, I want to hike!"
  console.log(mondayWork()); // "This Monday, I will go to the office."
  console.log(mondayWork("work from home")); // "This Monday, I will work from home."
  console.log(wrapAdjective("!!!")("a dedicated programmer")); // "You are !!!a dedicated programmer!!!"
  console.log(wrapAdjective("%")("a dedicated programmer")); // "You are %a dedicated programmer%!"
  
    