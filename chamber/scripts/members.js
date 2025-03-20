document.addEventListener("DOMContentLoaded", async () => {
    const membersContainer = document.getElementById("members-container");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");

    let members = [];

    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json"); // Ruta ajustada
            if (!response.ok) {
                throw new Error("Failed to fetch members data");
            }
            members = await response.json();
            displayMembers("grid"); 
        } catch (error) {
            console.error("Error loading members:", error);
        }
    }

    function displayMembers(viewType) {
        membersContainer.innerHTML = "";
        membersContainer.className = viewType;

        members.forEach(member => {
            const memberDiv = document.createElement("div");
            memberDiv.classList.add("member-card");

            if (member.membership === 3) {
                memberDiv.classList.add("gold");
            } else if (member.membership === 2) {
                memberDiv.classList.add("silver");
            } else {
                memberDiv.classList.add("member");
            }

            memberDiv.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p><strong>Category:</strong> ${member.category}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            `;

            membersContainer.appendChild(memberDiv);
        });
    }

    gridViewBtn.addEventListener("click", () => displayMembers("grid"));
    listViewBtn.addEventListener("click", () => displayMembers("list"));

    await fetchMembers();
});
