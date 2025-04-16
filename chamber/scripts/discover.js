/* ---------- Generate the cards ---------- */
const gallery   = document.getElementById('gallery');
const learnURL  = 'https://invoyager.com/ecuador/lugares-turisticos-de-esmeraldas/';

fetch('data/places.json')
  .then(res => res.json())
  .then(places => places.forEach(p => gallery.appendChild(createCard(p))))
  .catch(err => console.error('Error loading JSON:', err));

function createCard({ name, address, description, image }) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <figure class="card-img">
      <img src="${image}" alt="${name}" loading="lazy">
      <figcaption>${name}</figcaption>
    </figure>
    <address>${address}</address>
    <p>${description}</p>

    <!-- Anchor styled as button -->
    <a href="${learnURL}" target="_blank" rel="noopener" class="card-btn">
      Learn&nbsp;More
    </a>
  `;
  return card;
}
