// local reviews data
const reviews = [
  {
    id: 1,
    name: "DarishkaAMS",
    job: "the boss",
    img:
      "https://cdn.dribbble.com/users/1787323/screenshots/11349138/cat_activites_dribbble-01_4x.png",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "KarishkaAMS",
    job: "web designer",
    img:
      "https://img.freepik.com/free-vector/cute-cat-with-doughnut-flat-cartoon-style_138676-2624.jpg?size=338&ext=jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "MarishkaAMS",
    job: "intern",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8ZL7cOcbd3mcqaCXv01i_UBj0NaXcyTZ6NOkSVHPpTJPC-7VGtCEcoOgJy_VoyKk70w&usqp=CAU",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "BarishkaAMS",
    job: "web developer",
    img:
      "https://static.vecteezy.com/system/resources/previews/001/436/006/original/cute-cartoon-cat-eating-fish-free-vector.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 1;

window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem);
});

const showPerson = () => {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

nextBtn.addEventListener('click', () => {
  currentItem++;
  if (currentItem > reviews.length - 1){
    currentItem = 0;
  };
  showPerson();
});

prevBtn.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0){
      currentItem = reviews.length - 1;
    };
  showPerson();
});

randomBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
