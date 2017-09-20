const addButton = document.querySelectorAll('li button');
const cartTotal = document.getElementById('cart-item-count');
const cartButton = document.getElementById('cart-button');
const modal = document.getElementsByClassName('modal')[0];
const modalCloseButton = document.getElementsByClassName('close')[0];
const modalItemContent = document.getElementsByClassName('modal-item-content')[0];
const itemsTotal = document.getElementById('total');
const clearButton = document.getElementById('clear-btn');

let cartCount = 0;
let total = 0;

for (let i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener('click', addToModal);
}

cartButton.addEventListener('click', openModal);

clearButton.addEventListener('click', clearCart);

modalCloseButton.addEventListener('click', closeModal);

window.addEventListener('click', () => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
})

function addToModal(item) {
  cartCount++;
  cartTotal.textContent = `(${cartCount})`;

  const button = item.target;
  const itemName = button.previousElementSibling.previousElementSibling;
  const itemPrice = button.previousElementSibling;

  const cartItemName = document.createElement('span');
  const cartItemPrice = document.createElement('span');

  const itemsDiv = document.createElement('div');
  itemsDiv.className = 'modal-items-row';

  modalItemContent.appendChild(itemsDiv);

  itemsDiv.appendChild(cartItemName).textContent = itemName.textContent
  itemsDiv.appendChild(cartItemPrice).textContent = itemPrice.textContent

  let addedPrice = itemPrice.textContent.substring(1);

  total = Number(total) + Number(addedPrice);
  total = total.toFixed(2);

  itemsTotal.textContent = `Total: $${total}`;

  modalItemContent.appendChild(document.createElement('br'));
}

function openModal() {
  modal.style.display = 'block';
}

function clearCart() {
  while (modalItemContent.firstChild) {
    modalItemContent.firstChild.remove();
  }

  itemsTotal.textContent = `Total: 0.00`;

  cartCount = 0;
  total = 0;
  cartTotal.textContent = `(${cartCount})`;
}

function closeModal() {
  modal.style.display = 'none';
}