const addToCartBtnElement = document.querySelector('#product-details button');
const cartBardgeElements = document.querySelectorAll('.nav-items .badge');

async function addToCart() {
    const productId = addToCartBtnElement.dataset.productid;
    const csrfToken = addToCartBtnElement.dataset.csrf;
    let response;
    try {
        response = await fetch('/cart/items', {
            method: 'POST',
            body: JSON.stringify({
                productId: productId,
                _csrf: csrfToken
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        alert('Something went wrong!');
        return;
    }


    if(!response.ok) {
        alert('Something went wrong!');
        return;
    }
    const responseData = await response.json();
    const newTotalQuantity = responseData.newTotalItems;
    for(const cartBadgeElement of cartBardgeElements) {
        cartBardgeElements.textContent = newTotalQuantity;
    }
}

addToCartBtnElement.addEventListener('click', addToCart);