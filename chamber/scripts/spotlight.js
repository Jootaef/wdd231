document.addEventListener("DOMContentLoaded", async () => {
    const spotlightContainer = document.getElementById("spotlight-container");

    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Failed to fetch member data");

        const members = await response.json();

        const spotlightCandidates = members.filter(member =>
            member.membership === "Gold" || member.membership === "Silver"
        );

        const shuffled = spotlightCandidates.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2); // 2–3 empresas

        selected.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("spotlight-card", member.membership.toLowerCase()); // añade clase "gold" o "silver"

            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p><strong>Category:</strong> ${member.category}</p>
                <p><strong>Membership:</strong> ${member.membership}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            `;

            spotlightContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading spotlight members:", error);
    }
});
