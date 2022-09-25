function timeConversion(s) {
  let time = s.split(':');
  let hours = time[0];
  let minutes = time[1];
  let seconds = time[2].slice(0, 2);
  let periods = time[2].slice(2, 4);
  if (periods === 'PM' && hours !== '12') {
    hours = parseInt(hours) + 12;
  } else if (periods === 'AM' && hours === '12') {
    hours = '00';
  } else {
    hours = hours;
  }
  return `${hours}:${minutes}:${seconds}`;
}

const s = '5:01:00PM';
console.log(timeConversion(s));
