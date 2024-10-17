const locations = [
  { 
      name: 'Teatro Francisco Nunes', 
      type: 'teatro', 
      accessibility: 'Rampas, banheiros adaptados, sinalização em braille.',
      image: 'https://example.com/teatro.jpg', // URL da imagem
      mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-43.93795%2C-19.92195%2C-43.93575%2C-19.91945&layer=mapnik&marker=-19.92095%2C-43.93685' // URL do mapa de OpenStreetMap
  },
  { 
      name: 'Museu de Artes e Ofícios', 
      type: 'museu', 
      accessibility: 'Sinalização em braille, rampas, elevadores.',
      image: 'https://example.com/museu.jpg', // URL da imagem
      mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-43.9441%2C-19.9220%2C-43.9419%2C-19.9195&layer=mapnik&marker=-19.9205%2C-43.9430' // URL do mapa de OpenStreetMap
  },
  {
      name: 'Parque Municipal', 
      type: 'parque', 
      accessibility: 'Áreas acessíveis, banheiros adaptados, trilhas seguras.',
      image: 'https://example.com/parque.jpg', // URL da imagem
      mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-43.9352%2C-19.9256%2C-43.9329%2C-19.9232&layer=mapnik&marker=-19.9246%2C-43.9345' // URL do mapa de OpenStreetMap
  }
  // Outros locais
];

// Exibe a lista inicial de locais
function displayLocations(filteredLocations) {
  const locationList = document.getElementById('locations');
  locationList.innerHTML = ''; // Limpa a lista

  filteredLocations.forEach(location => {
      const li = document.createElement('li');
      li.textContent = location.name;
      li.addEventListener('click', () => showLocationInfo(location));
      locationList.appendChild(li);
  });
}

// Exibe os detalhes do local
function showLocationInfo(location) {
  document.getElementById('location-name').textContent = location.name;
  document.getElementById('location-description').textContent = location.accessibility;

  const img = document.getElementById('location-image');
  img.src = location.image;
  img.style.display = 'block'; // Exibe a imagem

  const map = document.getElementById('location-map');
  map.src = location.mapUrl;
  map.style.display = 'block'; // Exibe o mapa
}

// Filtro por tipo de local
function filterLocations(type) {
  if (type === 'todos') {
      displayLocations(locations);
  } else {
      const filteredLocations = locations.filter(location => location.type === type);
      displayLocations(filteredLocations);
  }
}

// Busca por locais
document.getElementById('search-input').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const filteredLocations = locations.filter(location => location.name.toLowerCase().includes(query));
  displayLocations(filteredLocations);
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  displayLocations(locations);
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Previne o envio automático do formulário

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const partner = document.querySelector('input[name="partner"]:checked').value;

  // Simula o envio do formulário
  document.getElementById("formMessage").textContent = `Obrigado, ${name}! Sua mensagem foi enviada. Você indicou que ${partner === 'yes' ? 'é' : 'não é'} parceiro.`;

  // Limpa os campos após envio (opcional)
  document.getElementById("contactForm").reset();
});

const professionals = [
  {
      name: "Ana Souza",
      profession: "Fisioterapeuta",
      img: "https://via.placeholder.com/100",
      description: "Especializada em reabilitação para PCDs, com foco em acessibilidade e conforto.",
  },
  {
      name: "Carlos Silva",
      profession: "Psicólogo",
      img: "https://via.placeholder.com/100",
      description: "Atendimento especializado para PCDs, focando em saúde mental e bem-estar.",
  },
  {
      name: "Maria Santos",
      profession: "Terapeuta Ocupacional",
      img: "https://via.placeholder.com/100",
      description: "Ajuda na adaptação e desenvolvimento de atividades cotidianas para PCDs.",
  },
];

function displayProfiles() {
  const container = document.getElementById('profiles-container');

  professionals.forEach(professional => {
      const profileCard = document.createElement('div');
      profileCard.classList.add('profile-card');

      profileCard.innerHTML = `
          <img src="${professional.img}" alt="${professional.name}">
          <h2>${professional.name}</h2>
          <p>${professional.profession}</p>
          <p>${professional.description}</p>
          <button>Contato</button>
      `;

      container.appendChild(profileCard);
  });
}

window.onload = displayProfiles;


