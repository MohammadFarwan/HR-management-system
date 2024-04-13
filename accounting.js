let emps = [] ;

window.onload = function() {
    // Retrieve data from localStorage
    emps = JSON.parse(localStorage.getItem("emps"));

    // Log the retrieved data
    console.log(emps);

    // Call the function to populate the table
    populateTable();
};

    // Function to populate the table with data
    function populateTable() {
        const tableBody = document.getElementById("tbody");
        tableBody.innerHTML = "";

        let departments = {};

        // Process the retrieved data to get department-wise statistics
        emps.forEach(employee => {
            const department = employee.department;
            if (!departments[department]) {
                departments[department] = {
                    employees: 1,
                    totalSalary: employee.salary,
                    averageSalary: employee.salary
                };
            } else {
                departments[department].employees++;
                departments[department].totalSalary += employee.salary;
                departments[department].averageSalary = departments[department].totalSalary / departments[department].employees;
            }
        });

        // console.log(departments);

        let totalEmployees = 0;
        let totalSalary = 0;
        let totalAverageSalary = 0;

        // Populate the table with department-wise statistics
        Object.keys(departments).forEach(department => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${department}</td>
                <td>${departments[department].employees}</td>
                <td>$${departments[department].totalSalary}</td>
                <td>$${departments[department].averageSalary.toFixed(0)}</td>
            `;
            tableBody.appendChild(row);

            totalEmployees += departments[department].employees;
            totalSalary += departments[department].totalSalary;
            totalAverageSalary += departments[department].averageSalary;
        });

        // Update the footer with total statistics
        document.getElementById("totalEmployees").textContent = totalEmployees;
        document.getElementById("totalSalary").textContent = `$${totalSalary}`;
        document.getElementById("averageSalary").textContent = `$${(totalAverageSalary / Object.keys(departments).length).toFixed(2)}`;
    }

