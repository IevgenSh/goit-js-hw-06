const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const img = images.map(option => {
//   const imgEl = document.createElement('img');
// imgEl.src = option.url;
// imgEl.alt = option.alt;

//   return imgEl;
// });

// const makeImg = options => {
//   return images.map(option => {
//     const imgEl = document.createElement('img');
//     imgEl.src = option.url;
//     imgEl.alt = option.alt;

//     return imgEl;
//   })
// }

// const img = makeImg(images)

const galleryEl = document.querySelector('.gallery');

const imgEl = images.map((image) => `<li><img scr='${image.url}' alt='${image.alt}'></li>`).join('');
// console.log(imgEl)
galleryEl.insertAdjacentHTML('beforeend', imgEl)
