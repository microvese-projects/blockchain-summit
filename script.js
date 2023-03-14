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
}

speakersObj.forEach(displaySpeaker);