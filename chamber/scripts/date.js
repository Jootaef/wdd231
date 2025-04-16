document.addEventListener("DOMContentLoaded", () => {
    // Update the footer with the current year.
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  
    // Display the last modified date in the footer.
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
      lastModifiedElement.textContent = "Last Update: " + document.lastModified;
    }
  
    // Update the visit message based on the last visit stored in localStorage.
    const visitMsgElement = document.getElementById("visit-msg");
    if (visitMsgElement) {
      const lastVisit = localStorage.getItem("lastVisit");
  
      if (lastVisit) {
        // If there is a last visit stored, welcome the user back.
        visitMsgElement.textContent = `Welcome back! Your last visit was on ${lastVisit}.`;
      } else {
        // If not, this is the user's first visit.
        visitMsgElement.textContent = "Welcome! This is your first visit.";
      }
  
      // Save or update the current date and time as the last visit.
      localStorage.setItem("lastVisit", new Date().toLocaleString());
    }
  });
  