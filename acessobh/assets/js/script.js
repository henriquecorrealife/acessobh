const locations = [
  {
    name: 'Palácio das Artes',
    type: 'teatro',
    accessibility: 'Rampa para portadores de necessidades especiais na entrada principal da av. Afonso Pena, banheiros adaptados, sinalização em braille, Rampa interna para acesso ao Grande Teatro, Cadeira de rodas disponível.O Grande Teatro possui duas instalações sanitárias para portadores de necessidades especiais.12 espaços para cadeirantes, referentes às seguintes poltronas:.',
    image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/262000/262504-Minas-Gerais-State.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18442.270204604894!2d-43.94999649218753!3d-19.92566010000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699c273363c07%3A0x4c7d3d103d04be63!2sPal%C3%A1cio%20das%20Artes!5e1!3m2!1spt-BR!2sbr!4v1729457165443!5m2!1spt-BR!2sbr' // URL do mapa de OpenStreetMap
  },
  {
    name: 'Museu de Artes e Ofícios',
    type: 'museu',
    accessibility: 'Rampa, Elevador, Banheiro, Assento, Plataforma elevatória, Corrimão, Comunicação em Braille.',
    image: 'https://www.cidadeecultura.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/10/Belo-Horizonte-Museu-de-Artes-e-Oficios-foto-Andreia-Bueno-X-web-1024x683.jpg.webp', // URL da imagem
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4610.822645187098!2d-43.93606862397146!3d-19.91691328146857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699fa1c5556d9%3A0xc45fcdd8f482f3c5!2sMuseu%20de%20Artes%20e%20Of%C3%ADcios!5e1!3m2!1spt-BR!2sbr!4v1729457073334!5m2!1spt-BR!2sbr' // URL do mapa de OpenStreetMap
  },

  {
    name: 'Parque Municipal',
    type: 'parque',
    accessibility: 'O Parque Municipal de Belo Horizonte é um dos locais mais tradicionais da cidade, oferecendo um amplo espaço verde para lazer e contato com a natureza. Com boa parte do parque acessível para cadeiras de rodas e diversas opções de lazer, como um parque de diversões e a Feira Hippie aos domingos, o local atrai moradores e turistas. No entanto, a acessibilidade ainda apresenta desafios, principalmente no parque de diversões e em relação à quantidade de banheiros adaptados. Apesar disso, o parque continua sendo um ponto de encontro importante para a cidade, necessitando apenas de algumas melhorias para garantir a inclusão de todos os visitantes..',
    image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res40/262000/262932-Americo-Renne-Giannetti-Municipal-Park.jpg', // URL da imagem
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36885.151820107494!2d-43.96374747775401!3d-19.923039933222594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69986503ba1a5%3A0x3f3993c2ca81c4d7!2sParque%20Municipal%20de%20Belo%20Horizonte!5e1!3m2!1spt-BR!2sbr!4v1729456816936!5m2!1spt-BR!2sbr' // URL do mapa de OpenStreetMap
  },

  {
    name: 'O Mercado Central',
    type: 'bares',
    accessibility: ' Iniciativas nesse sentido vieram antes da obrigatoriedade, por iniciativa própria, e outras, depois. E não são apenas adaptações físicas, como rampas e elevadores e vagas de estacionamento exclusivas para PCDs e idosos. Toda nossa equipe de colaboradores é preparada para abordar, ajudar e incluir todos que querem ter acesso ao espaço”.',
    image: 'https://www.dicasbh.com.br/wp-content/uploads/2017/06/mercado-central-belo-horizonte.jpg', // URL da imagem
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4615.528099089972!2d-43.94572282388517!3d-19.923041138093634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e2031e3d03%3A0x8e6ca6c58d640160!2sMercado%20Central%20de%20Belo%20Horizonte!5e1!3m2!1spt-BR!2sbr!4v1729456337366!5m2!1spt-BR!2sbr' // URL do mapa de OpenStreetMap
  },

  {
    name: 'Rua Sapucaí',
    type: 'bares',
    accessibility: ' Iniciativas nesse sentido vieram antes da obrigatoriedade, por iniciativa própria, e outras, depois. E não são apenas adaptações físicas, como rampas e elevadores e vagas de estacionamento exclusivas para PCDs e idosos. Toda nossa equipe de colaboradores é preparada para abordar, ajudar e incluir todos que querem ter acesso ao espaço”.',
    image: 'https://offloadmedia.feverup.com/belohorizontesecreto.com/wp-content/uploads/2023/03/07102437/mirante-cura-1.jpeg', // URL da imagem
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4610.84011353213!2d-43.934892623971464!3d-19.91631418146903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699f72365842d%3A0xfcf5df3ca60c7148!2sR.%20Sapuca%C3%AD%20-%20Belo%20Horizonte%2C%20MG%2C%2030110-009!5e1!3m2!1spt-BR!2sbr!4v1729457409626!5m2!1spt-BR!2sbr' // URL do mapa de OpenStreetMap
  },

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
document.getElementById('search-input').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const filteredLocations = locations.filter(location => location.name.toLowerCase().includes(query));
  displayLocations(filteredLocations);
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  displayLocations(locations);
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
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


