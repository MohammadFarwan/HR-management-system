'use strict';

let employees = [];
let EmployeeForm;
let departmentsArr =  ["Administration", "Finance", "Marketing", "Development" ]
let contSec = document.getElementById("containersec");
let largcontainer = document.getElementById("largcontainer");




Employee.prototype.calcSalary = function () {
    if (this.level == "Junior") {
        this.salary = Math.floor(Math.random() * 500) + 500;
    } else if (this.level == "Mid-Senior") {
        this.salary = Math.floor(Math.random() * 500) + 1000;
    } else if (this.level == "Senior") {
        this.salary = Math.floor(Math.random() * 500) + 1500;
    }
}

Employee.prototype.calcNetSalary = function() {
    this.netSalary =  Math.floor(this.salary - this.salary * 7.5/100);
}


// Hardcoded employees
// let hardcodedEmployees = [
let p1  =  new Employee(1000, "Ghazi Samer", "Administration", "Senior", "https://raw.githubusercontent.com/LTUC/amman-prep-d16/main/Class-08/lab/assets/Ghazi.jpg" );
let p2  =  new Employee(1001, "Lana Ali", "Finance", "Senior", "https://raw.githubusercontent.com/LTUC/amman-prep-d16/main/Class-08/lab/assets/Lana.jpg" );
let p3  =  new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://raw.githubusercontent.com/LTUC/amman-prep-d16/main/Class-08/lab/assets/Tamara.jpg" );
let p4  =  new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "https://raw.githubusercontent.com/LTUC/amman-prep-d16/main/Class-08/lab/assets/Safi.jpg" );
let p5  =  new Employee(1004, "Omar Zaid", "Development", "Senior", "https://raw.githubusercontent.com/LTUC/amman-prep-d16/main/Class-08/lab/assets/Omar.jpg" );
let p6  =  new Employee(1005, "Rana Saleh", "Development", "Junior", "https://raw.githubusercontent.com/LTUC/amman-prep-d16/main/Class-08/lab/assets/Rana.jpg" );
let p7  =  new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "https://raw.githubusercontent.com/LTUC/amman-prep-d16/main/Class-08/lab/assets/Hadi.jpg" );

p1.calcSalary();
p1.calcNetSalary();
p2.calcSalary();
p2.calcNetSalary();
p3.calcSalary();
p3.calcNetSalary();
p4.calcSalary();
p4.calcNetSalary();
p5.calcSalary();
p5.calcNetSalary();
p6.calcSalary();
p6.calcNetSalary();
p7.calcSalary();
p7.calcNetSalary();


let hardcodedEmployees = [p1, p2, p3, p4, p5, p6, p7]

render();

document.addEventListener("DOMContentLoaded", function() {
    EmployeeForm = document.getElementById("employeeForm");

    EmployeeForm.addEventListener('submit', addNewEmployeeHandler);
    // getEmps();
    render();
});

function Employee(employeeID, fullName, department, level, imageURL, salary, netSalary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = 0;
    this.netSalary = 0;
    employees.push(this);
}


let employeeCounter = 1007; 
function generateId() {
    if (employeeCounter >= 10000) {
        return -1;
    }
    let id = employeeCounter++;
    return id.toString();
}

// Add hardcoded employees to employees array
// employees = employees.concat(hardcodedEmployees);

// ================================================================================== events ==============================================================================
function addNewEmployeeHandler(event) {
    event.preventDefault();
    let empName = event.target.fullName.value;
    let empDepartment = event.target.departments.value;
    let empLevel = event.target.level.value;
    let imgPath = event.target.image.value;
    let newEmployee = new Employee(generateId(), empName, empDepartment, empLevel, imgPath );

    // Calculate salary and net salary
    newEmployee.calcSalary();
    newEmployee.calcNetSalary();
    
    // Add the new employee to the employees array
    // employees.push(newEmployee);

    // Save the updated employees data to localStorage
    saveData(employees);
    
    // Render the updated data
    render();
}


function saveData(data) {
    localStorage.setItem("emps", JSON.stringify(data));
}

function getEmps() {
    let localStorageData = JSON.parse(localStorage.getItem("emps"));
    if (localStorageData === null) {
        // console.log(localStorageData);
        employees = hardcodedEmployees.slice(); // Copy the hardcoded employees array
    } else {
        // console.log(localStorageData);
        employees = localStorageData;
    }
}


// =========================================================================== render ======================================================================================
 function render () {
    console.log(" I am a render");
    // console.log(emps);

    contSec.innerHTML = "";
    getEmps();

    departmentsArr.forEach(dep => {
        contSec.innerHTML += `<div class="main-heading"><h2 class= "seperate">${dep}</h2></div>`;
        console.log(dep);
        employees.forEach(p => {
            if (dep === p.department) {
                // render(p);
                console.log(p);
                let infoEmp = document.createElement("div");
                let cardDiv = document.createElement("div");
                cardDiv.classList.add('card');
                let img = document.createElement("img");
                let infoDiv = document.createElement("div");
            
                // Set attributes
                img.setAttribute("height", "100");
                img.setAttribute("width", "100");
                if (p.imageURL === "") {
                    img.setAttribute("src", `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU`);
                } else {
                    img.setAttribute("src", `${p.imageURL}`);
                }
                img.setAttribute("alt", "Employee Image");
                
                // Set text content
                let fullNameText = document.createTextNode(`Full Name: ${p.fullName}`);
                let employeeIDText = document.createTextNode(`Employee ID: ${p.employeeID}`);
                let departmentText = document.createTextNode(`Department: ${p.department}`);
                let levelText = document.createTextNode(`Level: ${p.level}`);
                // let salary = p.calcSalary(); // Calculate salary
                // let netSalary = p.calcNetSalary(); // Calculate net salary
                let salaryText = document.createTextNode(`Salary: ${p.salary}`);
                let netSalaryText = document.createTextNode(`Net Salary: ${p.netSalary}`);
                
                // Append text nodes to infoDiv
                infoDiv.appendChild(fullNameText);
                infoDiv.appendChild(document.createElement("br"));
                infoDiv.appendChild(employeeIDText);
                infoDiv.appendChild(document.createElement("br"));
                infoDiv.appendChild(departmentText);
                infoDiv.appendChild(document.createElement("br"));
                infoDiv.appendChild(levelText);
                infoDiv.appendChild(document.createElement("br"));
                infoDiv.appendChild(salaryText);
                infoDiv.appendChild(document.createElement("br"));
                infoDiv.appendChild(netSalaryText);
                infoDiv.appendChild(document.createElement("br"));
                infoDiv.appendChild(document.createElement("br"));
                
                // Append elements to their parents
                cardDiv.appendChild(img);
                cardDiv.appendChild(infoDiv);
                infoEmp.appendChild(cardDiv);
                contSec.appendChild(infoEmp);  
            }
        });
        console.log("=========================================================================");
    });    
}
