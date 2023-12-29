let resume = {
    Name: "Parthiban",
    Mail: "gandhiramparthi@gmail.com",
    Mobile: "82483537**",
    Education: {
        College: "University College Of Engineering - Panruti",
        Degree: "BE.Computer Science",
        CGPA: 8.89,
        Diploma: "Vivekananda Polytechnic College - Neyveli",
        Dip: "Dip.Computer Technology",
        Percentage: 89.43,
        School: "Arul Matriculation Higher Secondary School - Nattarmangalam",
        Percent: 90,
    },
    Company: {
        Company: "Infoexcel Technologies - Pondy",
        Designation: "Software Engineer",
        Experience: "3.3 Years Experience In Sql/Plsql",
        Projects: {
            FirstProject: "Purchase Order Management",
            SecondProject: "Production Order Management"
        }
    },
    Skills: "C,C++,Javascript,HTML,CSS,Python,SQL/Plsql",
    OperatingSystem: "Windows",
    DatabaseTools: "Oracle 10g,11g,12c,18c,PL/SQL Developer",
    Hobbies: "Solving Rubiks cube,Drawing(Human Potraits),Playing Cricket,Playing Chess,Playing Carrom"
};

// For the Given Iterate using For Of

for (const [key, value] of Object.entries(resume)) {
    if (typeof value === "object") {
        for (const [keyofkey, subValue] of Object.entries(value)) {

            if (typeof subkey === "object") {
                for (const [keyofkeyofkey, subSubValue] of Object.entries(subValue)) {
                    console.log(keyofkeyofkey, subSubValue);
                }
            } else {
                console.log(keyofkey, subValue);
            }
        }
    } else {
        console.log(key, value);
    }
}
