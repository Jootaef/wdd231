document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear();

    let lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Update: " + lastModified;
});
