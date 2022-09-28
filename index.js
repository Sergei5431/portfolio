// console.log('Ожидаемая оценка за задание 70 баллов');
// const i18Obj = {
//   'en': {
//     'skills': 'Skills',
//     'portfolio': 'Portfolio',
//     'video': 'Video',
//     'price': 'Price',
//     'contacts': 'Contacts',
//     'hero-title': 'Alexa Rise',
//     'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
//     'hire': 'Hire me',
//     'skill-title-1': 'Digital photography',
//     'skill-text-1': 'High-quality photos in the studio and on the nature',
//     'skill-title-2': 'Video shooting',
//     'skill-text-2': 'Capture your moments so that they always stay with you',
//     'skill-title-3': 'Rotouch',
//     'skill-text-3': 'I strive to make photography surpass reality',
//     'skill-title-4': 'Audio',
//     'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
//     'winter': 'Winter',
//     'spring': 'Spring',
//     'summer': 'Summer',
//     'autumn': 'Autumn',
//     'price-description-1-span-1': 'One location',
//     'price-description-1-span-2': '120 photos in color',
//     'price-description-1-span-3': '12 photos in retouch',
//     'price-description-1-span-4': 'Readiness 2-3 weeks',
//     'price-description-1-span-5': 'Make up, visage',
//     'price-description-2-span-1': 'One or two locations',
//     'price-description-2-span-2': '200 photos in color',
//     'price-description-2-span-3': '20 photos in retouch',
//     'price-description-2-span-4': 'Readiness 1-2 weeks',
//     'price-description-2-span-5': 'Make up, visage',
//     'price-description-3-span-1': 'Three locations or more',
//     'price-description-3-span-2': '300 photos in color',
//     'price-description-3-span-3': '50 photos in retouch',
//     'price-description-3-span-4': 'Readiness 1 week',
//     'price-description-3-span-5': 'Make up, visage, hairstyle',
//     'order': 'Order shooting',
//     'contact-me': 'Contact me',
//     'send-message': 'Send message'
//   },
//   'ru': {
//     'skills': 'Навыки',
//     'portfolio': 'Портфолио',
//     'video': 'Видео',
//     'price': 'Цены',
//     'contacts': 'Контакты',
//     'hero-title': 'Алекса Райс',
//     'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
//     'hire': 'Пригласить',
//     'skill-title-1': 'Фотография',
//     'skill-text-1': 'Высококачественные фото в студии и на природе',
//     'skill-title-2': 'Видеосъемка',
//     'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
//     'skill-title-3': 'Ретушь',
//     'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
//     'skill-title-4': 'Звук',
//     'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
//     'winter': 'Зима',
//     'spring': 'Весна',
//     'summer': 'Лето',
//     'autumn': 'Осень',
//     'price-description-1-span-1': 'Одна локация',
//     'price-description-1-span-2': '120 цветных фото',
//     'price-description-1-span-3': '12 отретушированных фото',
//     'price-description-1-span-4': 'Готовность через 2-3 недели',
//     'price-description-1-span-5': 'Макияж, визаж',
//     'price-description-2-span-1': 'Одна-две локации',
//     'price-description-2-span-2': '200 цветных фото',
//     'price-description-2-span-3': '20 отретушированных фото',
//     'price-description-2-span-4': 'Готовность через 1-2 недели',
//     'price-description-2-span-5': 'Макияж, визаж',
//     'price-description-3-span-1': 'Три локации и больше',
//     'price-description-3-span-2': '300 цветных фото',
//     'price-description-3-span-3': '50 отретушированных фото',
//     'price-description-3-span-4': 'Готовность через 1 неделю',
//     'price-description-3-span-5': 'Макияж, визаж, прическа',
//     'order': 'Заказать съемку',
//     'contact-me': 'Свяжитесь со мной',
//     'send-message': 'Отправить'
//   }
// }

// burger

// (function (){
//     const burgerItem = document.querySelector('.burger');// обозначили (ввело название для поиска по файу)
//     const menu = document.querySelector('.header-nav');
//     const menuCloseItem = document.querySelector('.header-nav-close');

//     burgerItem.addEventListener('click', () => {// первае условие клик мышкой
//         menu.classList.add('header-nav-active');//add добавляем класс

//     });
//     menuCloseItem.addEventListener('click', () =>{
//         menu.classList.remove('header-nav-active');//remove удаляем класс
//     });
// }());


//добавяем картинки

const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioBtn = document.querySelector('.portfolio-btn');

  // portfolioBtns.onclick = function(){
    
    // console.log(`Вы нажали на кнопку`);
// у${dataset.season}
  // }

  // portfolioBtn.onclick = function(){
  //   // console.log("Вы нажали на кнопку portfolio-btn");
  // }

  // const dataSetData = document.querySelector('portfolio-btn');

  // dataSetData.onclick = function(){
  //   console.log("dataSetData", `${dataSetData.dataset.season}`);
  //   portfolioImages.forEach((img, index) => img.src = `./assets/img/${dataSetData.dataset.season}/${index + 1}.jpg`);
  // }

  const spring = document.querySelector('.spring');

  spring.onclick = function(){
    console.log("spring", `${spring.dataset.season}`);
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${spring.dataset.season}/${index + 1}.jpg`);

  }



  const summer = document.querySelector('.summer');

  summer.onclick = function(){
    console.log("summer", `${summer.dataset.season}`);
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${summer.dataset.season}/${index + 1}.jpg`);

  }



  const winter = document.querySelector('.winter');

  winter.onclick = function(){
    console.log("winter", `${winter.dataset.season}`);
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${winter.dataset.season}/${index + 1}.jpg`);

  }



  const autumn = document.querySelector('.autumn');
  // console.log(autumn)
  autumn.onclick = function(){
    console.log("autumn", `${autumn.dataset.season}`);
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${autumn.dataset.season}/${index + 1}.jpg`);

  }
// portfolioBtns.onclick = function(){
// 
// autumn
//   console.log(`Вы нажали на кнопку ${btn.dataset.season}`);
// }

// const season = document.querySelector('.portfolio-btn')

// const portfolioBtn  = document.querySelector(".portfolio-btn");

// portfolioBtn.onclick = function(){
//   console.log("Вы нажали на кнопку portfolio-btn");
// }

// data-season

const portfolioImages = document.querySelectorAll('.card');
// portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);

  // 
  // portfolioBtns.onclick = changeImage(event);


  // function changeImage(event) {
  //   if(event.target.classList.contains('.portfolio-btn')) {
  //    portfolioImages.forEach((img, index) => img.src = `./assets/img/ ${dataset.season}/${index + 1}.jpg`);
  //   }
  //   console.log('test')
  // }
  
// dataset.season = "winter";
//   dataset.season = "spring";
//   dataset.season = "summer";
//   dataset.season = "autumn";

// работаем с кнопками
// const portfolioBtns = document.querySelector('.portfolio-btns autumn');
// function changeImage(eventAutumn) {
//     if(eventAutumn.target.classList.contains('portfolio-btn autumn')) {
      // здесь код функции, меняющей src изображений
  //   }
  // }
  // const portfolioBtns = document.querySelector('.portfolio-btns autumn');
 
  // document.querySelector("#submit").onclick = function(){
  //        if(event.target.classList.contains('portfolio-btn autumn')) {
    // portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
      
  // }

  // document.querySelector('#autumnAutumn').onclick = function(){
  //   alert("Вы нажали на кнопку");


// // portfolioBtn.classList.add('active')
// const langEn = document.querySelector('.navigation-lang-en');
// const langRu = document.querySelector('.navigation-lang-ru');
// let dataI18 = document.querySelectorAll('[data-i18]');
// const getTranslateRu = () => {
//    dataI18.forEach((item) => item.textContent = i18Obj["ru"][item.dataset.i18]);
// }
// const getTranslateEn = () => {
//    dataI18.forEach((item) => item.textContent = i18Obj["en"][item.dataset.i18]);
// }

// langEn.addEventListener('click', () => {
//    langEn.classList.add('active');
//    langRu.classList.remove('active');
//    getTranslateEn();
// });
// langRu.addEventListener('click', () => {
//    langEn.classList.remove('active');
//    langRu.classList.add('active');
//    getTranslateRu();
// });

