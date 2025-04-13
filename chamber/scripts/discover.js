// Visit message logic
const messageBox = document.getElementById("visitMessage");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  messageBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysDiff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (daysDiff < 1) {
    messageBox.textContent = "Back so soon! Awesome!";
  } else {
    messageBox.textContent = `You last visited ${daysDiff} day${daysDiff === 1 ? "" : "s"} ago.`;
  }
}
localStorage.setItem("lastVisit", now);

// Load gallery cards
fetch("data/discover.json")
  .then(response => response.json())
  .then(data => {
    const gallery = document.getElementById("gallery");
    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="${item.image}" alt="${item.name}">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn more</button>
      `;
      gallery.appendChild(card);
    });
  });
