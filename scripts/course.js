const courses = [
    { name: "CSE 110", category: "CSE", completed: true },
    { name: "WDD 130", category: "WDD", completed: false },
    { name: "CSE 111", category: "CSE", completed: false },
    { name: "CSE 210", category: "CSE", completed: true },
    { name: "WDD 131", category: "WDD", completed: false },
    { name: "WDD 231", category: "WDD", completed: true }
];

function displayCourses(filter) {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = "";

    const filteredCourses = filter === "all" ? courses : courses.filter(course => course.category === filter);

    filteredCourses.forEach(course => {
        const div = document.createElement("div");
        div.textContent = course.name;
        div.className = course.completed ? "completed" : "not-completed";
        courseList.appendChild(div);
    });

    document.getElementById("total-credits").textContent = filteredCourses.length * 3;
}

function filterCourses(filter) {
    displayCourses(filter);
}

window.onload = () => displayCourses("all");
