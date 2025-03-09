// Update Year and Last Modified Date in the Footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Business Directory Data (Modify this array to add more businesses)
const businesses = [
    { 
        name: "Hotel Mar Azul", 
        category: "Tourism & Hospitality", 
        email: "info@marazul.com", 
        phone: "(593) 555-1234", 
        website: "https://www.marazul.com", 
        image: "images/business1.jpg" 
    },
    { 
        name: "Supermarket Costamar", 
        category: "Retail & Commerce", 
        email: "info@costamar.com", 
        phone: "(593) 555-5678", 
        website: "https://www.costamar.com", 
        image: "images/business2.jpg" 
    },
    { 
        name: "Tech Solutions Esmeraldas", 
        category: "IT & Services", 
        email: "info@techsolutions.com", 
        phone: "(593) 555-9101", 
        website: "https://www.techsolutions.com", 
        image: "images/business3.jpg" 
    }
];

// Function to Load Business List Dynamically
function loadBusinessList() {
    const businessContainer = document.getElementById("businessList");
    businessContainer.innerHTML = ""; // Clear previous content

    businesses.forEach((business, index) => {
        let listItem = document.createElement("div");
        listItem.classList.add("business-card");
        listItem.innerHTML = `
            <img src="${business.image}" alt="${business.name}" class="business-img">
            <h3>${business.name}</h3>
            <p>📍 ${business.category}</p>
            <p>Email: <a href="mailto:${business.email}">${business.email}</a></p>
            <p>Phone: ${business.phone}</p>
            <p>Website: <a href="${business.website}" target="_blank">${business.website}</a></p>
            <label>
                <input type="checkbox" class="visited-checkbox" id="visited-${index}">
                Mark as Visited
            </label>
        `;
        businessContainer.appendChild(listItem);
    });

    // Update total business count
    document.getElementById("businessCount").textContent = `Total Businesses Listed: ${businesses.length}`;
}

// Function to Search Businesses
function searchBusinesses() {
    let filter = document.getElementById('search').value.toLowerCase();
    let items = document.querySelectorAll(".business-card h3");

    items.forEach(item => {
        let card = item.parentElement;
        card.style.display = item.textContent.toLowerCase().includes(filter) ? "block" : "none";
    });
}

// Load Businesses on Page Load
document.addEventListener("DOMContentLoaded", () => {
    loadBusinessList();
    
    // Attach event listener to the search bar
    document.getElementById('search').addEventListener('keyup', searchBusinesses);
});
