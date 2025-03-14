document.addEventListener("DOMContentLoaded", async () => {
    const membersContainer = document.getElementById("members-container");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");

    let members = [];

    async function fetchMembers() {
        try {
            const response = await fetch("../chamber/data/members.json");
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
                <img src="../images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            membersContainer.appendChild(memberDiv);
        });
    }

    gridViewBtn.addEventListener("click", () => displayMembers("grid"));
    listViewBtn.addEventListener("click", () => displayMembers("list"));

    await fetchMembers();
});
