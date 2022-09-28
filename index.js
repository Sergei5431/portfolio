console.log('Ожидаемая оценка за задание 100 баллов');

// burger

(function (){
    const burgerItem = document.querySelector('.burger');// обозначили (ввело название для поиска по файу)
    const menu = document.querySelector('.header-nav');
    const menuCloseItem = document.querySelector('.header-nav-close');

    burgerItem.addEventListener('click', () => {// первае условие клик мышкой
        menu.classList.add('header-nav-active');//add добавляем класс

    });
    menuCloseItem.addEventListener('click', () =>{
        menu.classList.remove('header-nav-active');//remove удаляем класс
    });
}());