
const mainEl = document.querySelector("main")
const topMenuEl = document.getElementById("top-menu")

function setStyles() {
    mainEl.style.backgroundColor = 'var(--main-bg)'   
    mainEl.classList.add('flex-ctr');

    topMenuEl.style.height = '100%'
    topMenuEl.style.backgroundColor = 'var(--top-menu-bg'
    topMenuEl.classList.add('flex-around');
}

function setContent() {
    mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
}

function setupMenu() {
    // Menu data structure
    const menuLinks = [
        { text: 'about', href: '/about' },
        { text: 'catalog', href: '/catalog' },
        { text: 'orders', href: '/orders' },
        { text: 'account', href: '/account' },
    ];
    
    // menuLinks.forEach((i) => {

    // });

    for (let i of menuLinks) {
        let a = document.createElement('a');
        a.href = i.href;
        a.text = i.text;
        topMenuEl.appendChild(a);

    }

}

setStyles();
setContent();
setupMenu();