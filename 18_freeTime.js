// Have the function ArrayChallenge(strArr) read the strArr parameter being 
// passed which will represent a full day and will be filled with events 
// that span from time X to time Y in the day. The format of each event 
// will be hh:mmAM/PM-hh:mmAM/PM. For example, strArr may be 
// ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]. 
// Your program will have to output the longest amount of free time 
// available between the start of your first event and the end of your last 
// event in the format: hh:mm. The start event should be the earliest event 
// in the day and the latest event should be the latest event in the day. 
// The output for the previous input would 
// therefore be 01:30 
// (with the earliest event in the day starting at 09:10AM and the latest event ending at 02:45PM).
//  The input will contain at least 3 events and the events may be out of order.
// Examples
// Input: ["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"]
// Output: 00:30'



// Input: ["12:15PM-02:00PM", "09:00AM-12:11PM", "02:02PM-04:00PM"]
// Output: 00:04



// function turn_minutes(time) {

//   for (let i in time) {
//     let result = time[i].split(":")
//     for (let min in result) {
//       let separate = result[min]
// console.log(separate)

//     }


//   }
// }

function turn_minutes(time) {
  let result;
  result = time.slice(0, -2).split(":");
  // let cut = time.slice(-2)

  result = time.slice(-2) === "AM" ? [Number.parseInt(result[0]), Number.parseInt(result[1])] : [Number.parseInt(result[0]) + 12, Number.parseInt(result[1])];
  result[0] = result[0] !== 12 && result[0] !== 24 ? result[0] : result[0] - 12;
  return result[0] * 60 + result[1];
}

// console.log(turn_minutes("12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"));

function mostFreeTime(strArr) {
  let timeList = []
     strArr.split(",").forEach(t => {
       dt = t.slice(1, t.length-1).split("-")
       console.log("DT", dt)
      t =turn_minutes(dt[0]);
      console.log("T", t)
      a = turn_minutes(dt[1]);
      console.log("AAAAA", a)
      // timeList.push(t,a)
     })
//     time = time.split("-")
//     console.log("TIME", time[0])
//     for (let i of time[0]) {
// console.log(turn_minutes(i))
//       // console.log(time[i].split(":"))

return timeList
//       //   time = time.split("-")
//       // timeList += time;
    }
  

 









console.log(mostFreeTime('"12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"'))