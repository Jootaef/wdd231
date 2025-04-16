document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
  
    let lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Update: " + lastModified;
  
    const visitMsgEl = document.getElementById("visit-msg");
    const lastVisit = localStorage.getItem("lastVisit");
  
    if (lastVisit) {
      visitMsgEl.textContent = `Welcome back! Your last visit was on ${lastVisit}.`;
    } else {
      visitMsgEl.textContent = "Welcome! This is your first visit.";
    }
  
    localStorage.setItem("lastVisit", new Date().toLocaleString());
  });
  