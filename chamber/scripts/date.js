document.addEventListener("DOMContentLoaded", () => {
    // Set the current year
    document.getElementById("year").textContent = new Date().getFullYear();
  
    // Display the document's last modified date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Update: " + lastModified;
  
    // Retrieve the last visit date from localStorage
    const visitMsgEl = document.getElementById("visit-msg");
    const lastVisit = localStorage.getItem("lastVisit");
  
    // Show a custom message based on whether a previous visit was recorded
    if (lastVisit) {
      visitMsgEl.textContent = `Welcome back! Your last visit was on ${lastVisit}.`;
    } else {
      visitMsgEl.textContent = "Welcome! This is your first visit.";
    }
  
    // Record the current visit date/time in localStorage
    const now = new Date().toLocaleString();
    localStorage.setItem("lastVisit", now);
  });
  