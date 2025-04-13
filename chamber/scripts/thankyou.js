document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const output = document.getElementById("submission-summary");
  
    const fields = ["firstName", "lastName", "email", "phone", "organization", "timestamp"];
    fields.forEach(field => {
      const value = params.get(field);
      if (value) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${field.replace(/([A-Z])/g, ' $1')}:</strong> ${value}`;
        output.appendChild(p);
      }
    });
  });
  