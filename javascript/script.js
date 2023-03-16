const speakersObj = [
  {
    name: 'Vitalik Buterin',
    title: 'Blockchain Developer and Co-Founder, Ethereum',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, optio. Quis voluptatum quaerat mollitia quae iste libero voluptates adipisci exercitationem?',
    image: 'images/speakers/vitalik_buterin.jpg',
  },
  {
    name: 'Susana Croft',
    title: 'Blockchain Developer, Chainlink',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, optio. Quis voluptatum quaerat mollitia quae iste libero voluptates adipisci exercitationem?',
    image: 'images/speakers/lady.jpg',
  },
  {
    name: 'Vitalik Buterin',
    title: 'Blockchain Developer and Co-Founder, Ethereum',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, optio. Quis voluptatum quaerat mollitia quae iste libero voluptates adipisci exercitationem?',
    image: 'images/speakers/vitalik_buterin.jpg',
  },
  {
    name: 'Vitalik Buterin',
    title: 'Blockchain Developer and Co-Founder, Ethereum',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, optio. Quis voluptatum quaerat mollitia quae iste libero voluptates adipisci exercitationem?',
    image: 'images/speakers/vitalik_buterin.jpg',
  },
];
const featuredSpeakersContainer = document.querySelector('#featured-speakers');
const moreSpeakersButton = document.querySelector('#more-featured-speakers');
let speakerCards;

function displaySpeaker({
  name, title, description, image,
}) {
  const speakerCard = `
  <li class="speaker-card">
    <div class="images">
      <img src=${image} class="speaker-image" alt="Image of ${name}">
      <div class="image-decor"></div>
    </div>
    <div class="information">
      <h3 class="speaker-name">${name}</h3>
      <p class="work-title">
        ${title}
      </p>
      <hr class="speaker-card-divider">
      <p class="speaker-description">
        ${description}
      </p>
    </div>
  </li>
  
  `;
  featuredSpeakersContainer.innerHTML += speakerCard;
  speakerCards = document.querySelectorAll('.speaker-card');
}

function showMoreSpeakers() {
  const moreLessText = document.querySelector('#moreLess');
  const arrow = moreSpeakersButton.querySelector('i');
  const cardArray = Array.from(speakerCards);
  cardArray.forEach((card) => {
    card.classList.toggle('speaker-card-flex');
  });

  if (moreLessText.textContent === 'MORE') {
    moreLessText.textContent = 'LESS';
    arrow.style.rotate = '180deg';
  } else {
    moreLessText.textContent = 'MORE';
    arrow.style.rotate = '0deg';
  }
}

speakersObj.forEach(displaySpeaker);
moreSpeakersButton.addEventListener('click', showMoreSpeakers);