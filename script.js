// Initial array of employees
let employees = [
  { id: 1, name: "John", age: "18", profession: "developer" },
  { id: 2, name: "Jack", age: "20", profession: "developer" },
  { id: 3, name: "Karen", age: "19", profession: "admin" }
];

// Task 1: Print Developers by Map
function PrintDeveloperbyMap() {
  employees.map(emp => {
    if (emp.profession === "developer") {
      console.log("Map:", emp);
    }
  });
}

// Task 2: Print Developers by ForEach
function PrintDeveloperbyForEach() {
  employees.forEach(emp => {
    if (emp.profession === "developer") {
      console.log("ForEach:", emp);
    }
  });
}

// Task 3: Add Data
function addData() {
  const newEmployee = { id: 4, name: "Susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  console.log("After Adding Data:", employees);
}

// Task 4: Remove Admin
function removeAdmin() {
  employees = employees.filter(emp => emp.profession !== "admin");
  console.log("After Removing Admins:", employees);
}

// Task 5: Concatenate Array
function concatenateArray() {
  const newEmployees = [
    { id: 5, name: "Alice", age: "22", profession: "designer" },
    { id: 6, name: "Bob", age: "25", profession: "developer" },
    { id: 7, name: "Eve", age: "28", profession: "manager" }
  ];
  const result = employees.concat(newEmployees);
  console.log("After Concatenation:", result);
}

// Calling functions to demonstrate output
PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray();
