
const container = document.createElement('div');
container.classList.add('container');
container.id = "main"

const btnUp = document.createElement('button');
btnUp.innerHTML = "Up";
btnUp.classList.add('btn-up');
btnUp.style.marginRight = "10px";
btnUp.style.padding = "5px";

const blockBtn = document.createElement('div');
const btnDown = document.createElement('button');
btnDown.innerHTML = "Down";
btnDown.classList.add('btn-down');
btnDown.style.padding = "5px";

const btnWidth = document.createElement('button');
btnWidth.innerHTML = "Width";
btnWidth.style.padding = "5px";

btnWidth.addEventListener("click", () => {
    document.getElementById('img-0').style.width = "500px"
})

const btnHeight = document.createElement('button');
btnHeight.innerHTML = "Height";
btnHeight.style.padding = "5px";

btnHeight.addEventListener("click", () => {
    document.getElementById('img-0').style.height = "500px"
})

btnUp.addEventListener('click', () => {
    const arrImg = [
        'https://images.pexels.com/photos/9025296/pexels-photo-9025296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/9845169/pexels-photo-9845169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    ]


    if (document.getElementById('main')) {
        document.getElementById('main').remove()

        arrImg.sort((a, b) => 1)

        const container = document.createElement('div');
        container.classList.add('container');
        container.id = "main"

        arrImg.forEach((el, index) => {
            const imgBlock = document.createElement('div');
            const img = document.createElement('img');
            img.id = "img" + "-" + index
            img.style.width = "200px";
            img.style.height = "auto";
            img.src = el;
            img.alt = "photo";

            imgBlock.appendChild(img);

            container.appendChild(imgBlock)
        })

        document.body.appendChild(container)
    }
})

btnDown.addEventListener('click', () => {

    const arrImg = [
        'https://images.pexels.com/photos/9025296/pexels-photo-9025296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/9845169/pexels-photo-9845169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    ]

    if (document.getElementById('main')) {
        document.getElementById('main').remove()

        const images = arrImg.sort((a, b) => -1)

        const container = document.createElement('div');
        container.classList.add('container');
        container.id = "main"

        images.forEach((el, index) => {
            const imgBlock = document.createElement('div');
            const img = document.createElement('img');
            img.id = "img" + "-" + index
            img.style.width = "200px";
            img.style.height = "auto";
            img.src = el;
            img.alt = "photo";

            imgBlock.appendChild(img);

            container.appendChild(imgBlock)
        })

        document.body.appendChild(container)
    }
})

blockBtn.appendChild(btnUp);
blockBtn.appendChild(btnDown);
blockBtn.appendChild(btnWidth);
blockBtn.appendChild(btnHeight);
document.body.appendChild(blockBtn)

const arrImg = [
    'https://images.pexels.com/photos/9025296/pexels-photo-9025296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/9845169/pexels-photo-9845169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]

arrImg.forEach((el, index) => {
    const imgBlock = document.createElement('div');
    const img = document.createElement('img');
    img.id = "img" + "-" + index
    img.style.width = "200px";
    img.style.height = "auto";
    img.src = el;
    img.alt = "photo";

    imgBlock.appendChild(img);

    container.appendChild(imgBlock)
})

document.body.appendChild(container);