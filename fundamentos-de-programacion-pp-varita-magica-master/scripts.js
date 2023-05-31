
//1
document.addEventListener('click', (e) => {
    e.preventDefault();
})

//2.1 cambiar att src
let imgs = document.getElementsByTagName('img');
Array.from(imgs).forEach((img) => {
    img.addEventListener('click', () => {
        img.src = getRandom(gifs);
    });
});

//2.2 color p
let paragraphs = document.getElementsByTagName('p');
Array.from(paragraphs).forEach(paragraph => {
    paragraph.addEventListener('click', () => {
        paragraph.style.color = getRandom(colors);
    })
});

//2.3
let articles = document.getElementsByTagName('article');
let sections = document.getElementsByTagName('section');
const artiSecti = [].concat(Array.prototype.slice.call(articles), Array.prototype.slice.call(sections));
artiSecti.forEach( artSec => {
    artSec.addEventListener('click', () => {
        artSec.style.color = getRandom(colors);
    })
});

//3.1 imagen
let imgabracadabras = document.getElementsByTagName('img');
Array.from(imgabracadabras).forEach(imgabracadabra => {
    const originalSrc = imgabracadabra.src;
    imgabracadabra.addEventListener('mouseover', () => {
        imgabracadabra.src = './assets/abracadabra.gif';
    });

    imgabracadabra.addEventListener('mouseout', () => {
        imgabracadabra.src = originalSrc;
    });

});


//3.2
let paragraphsMouse = document.getElementsByTagName('p');
Array.from(paragraphsMouse).forEach(paragraphM => {
    paragraphM.addEventListener('mouseover', () => {
        paragraphM.style.color = getRandom(colors);
        paragraphM.style.backgroundColor = getRandom(colors);
    })

    paragraphM.addEventListener('mouseout', () => {
        paragraphM.style.color = 'inherit';
        paragraphM.style.background = 'inherit';
    });
});


//3.3
let articlesMouse = document.getElementsByTagName('article');
let sectionsMouse = document.getElementsByTagName('section');
const elements = [].concat(Array.prototype.slice.call(articlesMouse), Array.prototype.slice.call(sectionsMouse));
elements.forEach( element => {
    element.addEventListener('mouseover', (e) => {
        element.style.background = getRandom(colors2);
    })

    element.addEventListener('mouseout', () => {
        element.style.background = 'inherit';
    });
});
 

//4
const getRandom = array => {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

//5
const colors = ['#94d2bd', '#e9d8a6', '#ee9b00', '#ca6702', '#bb3e03', '#ae2012', '#9b2226'];
const colors2 = ['#001219', '#005f73', '#0a9396'];

//6
const gifs = ['./assets/magic-1.gif', './assets/magic-2.gif', './assets/magic-3.gif', './assets/magic-4.gif', './assets/magic-5.gif', './assets/magic-6.gif'];

