const hobbyLog = [ // creates object array tracking mood & time on hobbies
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

function totalTime(log) { // this function adds all minutes values of each object inside log to a new array
  return log.reduce((sum, session) => sum + session.minutes, 0); // Returns 155 after adding all minutes
}


function uniqueHobbies(log) { // this function creates a new array based on the log parameter
  const names = log.map(entry => entry.hobby); // loops through hobby values in log parameter and pushes values to new array
  return [...new Set(names)]; // returns a new array that removes duplicate hobbies inside names
}

function longSessions(log, minMinutes) { // this function creates an array based on minMinutes
  return log.filter(entry => entry.minutes > minMinutes); // if entry.minutes is greater than minMinutes parameter, it pushes to the returned array
} // I would suggest adding .length to the return, as it makes more sense for me

function countMood(log, moodType) { // this function takes two parameters
  return log.filter(entry => entry.mood === moodType).length; // the function now pushes all log moods equal to moodType parameter to a new array
}

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));
//new test
console.log("Sessions longer than 15 mins:", longSessions(hobbyLog, 15));
