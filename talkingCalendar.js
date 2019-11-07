let talkingCalendar = function(date) {
  // Your code here
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] // Each index represents the month
  const st = [1, 21, 31]; // ends in st if these numbers
  const nd = [2, 22]; //end in nd if these numbers
  const rd = [3, 23]; //end in rd if these numbers
  
  // Break up the day, months, and years
  date = date.split('/');
  const year = date[0];
  let month = months[parseInt(date[1]) - 1];
  let day = parseInt(date[2]);
  
  // Add the day endings 
  if (st.includes(day)) {
    day += 'st';
  } else if (nd.includes(day)) {
    day += 'nd';
  } else if (rd.includes(day)) {
    day += 'rd';
  } else { // every other days ends in th
    day += 'th';
  }

  return month + ' ' + day + ', ' + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));