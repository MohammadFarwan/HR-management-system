function Employee(employeeID, fullName, department, level, imageURL, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = salary;
}




Employee.prototype.calcSalaray = function () {
    if (this.level == "Junior") {
        this.salary = Math.floor(Math.random() * 500) + 500;
    } else if (this.level == "Mid-Senior") {
        this.salary = Math.floor(Math.random() * 500) + 1000;
    } else if (this.level == "Senior") {
        this.salary = Math.floor(Math.random() * 500) + 1500;
    }
    return this.salary;
}

Employee.prototype.calcNetSalaray = function() {
    this.salary -= this.salary * 7.5/100;
    return Math.floor(this.salary) ;
}

Employee.prototype.render = function () {

    let container = document.getElementById("main");
        let divE1 = document.createElement("div");
            let infoEmp = document.createElement("div");
            let image = document.createElement("img");
            image.src = this.imageURL;
            image.alt = "Employee Image";
    
    infoEmp.innerHTML = `Full Name: ${this.fullName}<br>` +
    `Employee ID: ${this.employeeID}<br>` +
    `Department: ${this.department}<br>` +
    `Level: ${this.level}<br>`+
        `Salary: ${this.calcSalaray()}<br>` +
        `Net Salary: ${this.calcNetSalaray()}<br><br><hr>`;

        divE1.appendChild(image);   
        divE1.appendChild(infoEmp);
        container.appendChild(divE1);
    document.body.appendChild(container);
}




    let p1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU" )
    let p2 = new Employee(1001, "Lana Ali", "Finance", "Senior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU" )
    let p3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU" )
    let p4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU" )
    let p5 = new Employee(1004, "Omar Zaid", "Development", "Senior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU" )
    let p6 = new Employee(1005, "Rana Saleh", "Development", "Junior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU" )
    let p7 = new Employee(1006, "Hadi Ahmad", "	Finance", "Mid-Senior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e-9L-OuQW5Dqfbaqlpl84ptS0VWZbY1K_A&usqp=CAU" )


    p1.render();
    p2.render();
    p3.render();
    p4.render();
    p5.render();
    p6.render();
    p7.render();


    