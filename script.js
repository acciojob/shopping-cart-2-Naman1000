  const addButton = document.getElementById('add-btn');
    const nameInput = document.getElementById('item-name-input');
    const priceInput = document.getElementById('item-price-input');
    const cartBody = document.getElementById('cart-body');
    const grandTotalElement = document.querySelector('[data-ns-test="grandTotal"]');

    let grandTotal = 0;

    addButton.addEventListener('click', () => {
      const name = nameInput.value.trim();
      const price = parseFloat(priceInput.value);

      // Validate inputs
      if (name === '' || isNaN(price) || price <= 0) {
        alert('Please enter valid name and price!');
        return;
      }

      // Create table row
      const newRow = document.createElement('tr');

      const nameTd = document.createElement('td');
      nameTd.setAttribute('data-ns-test', 'item-name');
      nameTd.innerText = name;

      const priceTd = document.createElement('td');
      priceTd.setAttribute('data-ns-test', 'item-price');
      priceTd.innerText = price;

      newRow.appendChild(nameTd);
      newRow.appendChild(priceTd);

      cartBody.appendChild(newRow);

      // Update grand total
      grandTotal += price;
      grandTotalElement.innerText = grandTotal;

      // Clear inputs
      nameInput.value = '';
      priceInput.value = '';
    });