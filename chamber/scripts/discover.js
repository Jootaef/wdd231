// scripts/discover.js

async function loadCards() {
  try {
    const response = await fetch('data/beaches.json'); 
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    const gallery = document.getElementById('gallery');

    data.forEach(card => {
      const cardDiv = document.createElement('div');
      cardDiv.className = 'card';

      cardDiv.innerHTML = `
        <img src="${card.image}" alt="${card.name}" loading="lazy">
        <h3>${card.name}</h3>
        <p class="address">${card.address}</p>
        <p class="description">${card.description}</p>
        <button onclick="window.location.href='https://invoyager.com/ecuador/lugares-turisticos-de-esmeraldas/'">Learn More</button>
      `;
      
      gallery.appendChild(cardDiv);
    });
  } catch (error) {
    console.error('Error loading JSON data:', error);
  }
}

window.addEventListener('DOMContentLoaded', loadCards);
