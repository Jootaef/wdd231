document.addEventListener("DOMContentLoaded", function() {
    fetch("../data/members.json")
        .then(response => response.json())
        .then(data => {
            const spotlights = document.getElementById("spotlight-container");
            const eligibleMembers = data.members.filter(member => member.membership >= 2); // Gold y Silver
            const selected = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, 3); // Selección aleatoria

            selected.forEach(member => {
                let card = document.createElement("div");
                card.classList.add("member-card");
                card.innerHTML = `
                    <h3>${member.name}</h3>
                    <img src="../images/${member.image}" alt="${member.name}">
                    <p>📍 ${member.address}</p>
                    <p>📞 ${member.phone}</p>
                    <p>🌐 <a href="${member.website}" target="_blank">${member.website}</a></p>
                `;
                spotlights.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading members:", error));
});
