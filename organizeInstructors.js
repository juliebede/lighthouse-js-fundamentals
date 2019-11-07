const organizeInstructors = function(instructors) {
  // Put your solution here
  let newObject = {};
  for (let i = 0; i < instructors.length; i++) {
    let course = instructors[i].course;
    let existingCourses = Object.keys(newObject);
    if (existingCourses.includes(course)){
      newObject[course].push(instructors[i].name);
    } else {
      newObject[course] = [instructors[i].name];
    }
  }
  return newObject;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));