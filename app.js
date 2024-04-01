
function Employee(employeeID, fullName, department, level, imageURL, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = salary;
}

let p1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU" )
let p2 = new Employee(1001, "Lana Ali", "Finance", "Senior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU" )
let p3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU" )
let p4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU" )
let p5 = new Employee(1004, "Omar Zaid", "Development", "Senior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU" )
let p6 = new Employee(1005, "Rana Saleh", "Development", "Junior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU" )
let p7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU" )

let departmentsArr =  ["Administration", "Finance", "Marketing", "Development" ]
let employees = [p1, p2, p3, p4, p5, p6, p7];



Employee.prototype.calcSalary = function () {
    if (this.level == "Junior") {
        this.salary = Math.floor(Math.random() * 500) + 500;
    } else if (this.level == "Mid-Senior") {
        this.salary = Math.floor(Math.random() * 500) + 1000;
    } else if (this.level == "Senior") {
        this.salary = Math.floor(Math.random() * 500) + 1500;
    }
    return this.salary;
}

Employee.prototype.calcNetSalary = function() {
    this.salary -= this.salary * 7.5/100;
    return Math.floor(this.salary) ;
}




let contSec = document.getElementById("containersec");

Employee.prototype.render = function () {
    // Create elements
    let infoEmp = document.createElement("div");
    let cardDiv = document.createElement("div");
    cardDiv.classList.add('card');
    let img = document.createElement("img");
    let infoDiv = document.createElement("div");

    // Set attributes
    img.setAttribute("height", "100");
    img.setAttribute("width", "100");
    if (
        this.employeeID === 1000 || 
        this.employeeID === 1001 || 
        this.employeeID === 1002 || 
        this.employeeID === 1003 || 
        this.employeeID === 1004 || 
        this.employeeID === 1005 || 
        this.employeeID === 1006
        ) {

            img.setAttribute("src", `./../assets/${this.fullName.split(' ')[0]}.jpg`);
    } else {
        img.setAttribute("src", `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU`);
    }
    img.setAttribute("alt", "Employee Image");

    // Set text content
    let fullNameText = document.createTextNode(`Full Name: ${this.fullName}`);
    let employeeIDText = document.createTextNode(`Employee ID: ${this.employeeID}`);
    let departmentText = document.createTextNode(`Department: ${this.department}`);
    let levelText = document.createTextNode(`Level: ${this.level}`);
    let salaryText = document.createTextNode(`Salary: ${this.calcSalary()}`);
    let netSalaryText = document.createTextNode(`Net Salary: ${this.calcNetSalary()}`);

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
    document.body.appendChild(contSec);


}





    function renderSection(employees, departmentsArr) {
        departmentsArr.forEach(dep => {
            contSec.innerHTML += `<div class="main-heading"><h2 class= "seperate">${dep}</h2></div>`;
            // console.log(dep);
            employees.forEach(p => {
                if (dep === p.department) {
                    p.render();
                    // console.log(p);
                }
            });
            // console.log("=========================================================================");
        });
    }
    
    
    renderSection(employees, departmentsArr);
    


    // p1.render();
    // p2.render();
    // p3.render();
    // p4.render();
    // p5.render();
    // p6.render();
    // p7.render();

   
   

  
    
    // start lab 08


    // To generate ID number  
    let employeeCounter = 1000; // Start the counter at 1000
    function generateId() {
        if (employeeCounter >= 10000) {
            return -1;
        }
        
        // Increment the counter and convert it to a string
        let id = employeeCounter++;
        return id.toString();
    }

    // To add an event listener
    const departmentsSelect = document.getElementById('departments');



//Events
let EmployeeForm = document.getElementById("employeeForm");
EmployeeForm.addEventListener('submit', addNewEmployeeHandler);

function addNewEmployeeHandler(event) {
    event.preventDefault();
    console.log(event);
    let empName = event.target.fullName.value;
    let empDepartment = event.target.departments.value;
    let empLevel = event.target.level.value;
    let imgPath = event.target.image.value;

    let newEmployee = new Employee(generateId(),empName, empDepartment,empLevel, imgPath || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU");
    // console.log(newEmployee);
    employees.push(newEmployee);
    contSec.innerHTML = "";
    renderSection(employees, departmentsArr);
}













    // end lab 08

