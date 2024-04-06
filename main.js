const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const asideCarrito = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);

burgerMenu.addEventListener('click', toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive')
    if (!isAsideCarritoClosed) {
        asideCarrito.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive')
    if (!isAsideCarritoClosed) {
        asideCarrito.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    
    // si buergermenu o menu del correo esta abierto
    //los cierro y abro el carritoAside
    //sino solamente abro el carritoAside
    if (!isMobileMenuClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    } 
    asideCarrito.classList.toggle('inactive')
    
}

const productList = [];
productList.push ({
    name: 'Bike',
    price: 120,
    image: 'http://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push ({
    name: 'Pantalla',
    price: 220,
    image: 'https://cdn.thewirecutter.com/wp-content/uploads/2018/05/smarttv-lowres-032.jpg',
})
productList.push ({
    name: 'Computadora',
    price: 620,
    image: 'http://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productFigure = document.createElement('figure');
    const productIcon = document.createElement('img');
    productIcon.setAttribute('src', './icons/bt_add_to_cart.svg')

    productFigure.appendChild(productIcon);
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoDiv, productFigure);
    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
}