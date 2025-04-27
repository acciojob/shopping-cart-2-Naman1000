
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
        alert('Please enter a valid item name and a positive price.');
        return;
      }

      // Create new table row
      const newRow = document.createElement('tr');

      const nameCell = document.createElement('td');
      nameCell.setAttribute('data-ns-test', 'item-name');
      nameCell.innerText = name;

      const priceCell = document.createElement('td');
      priceCell.setAttribute('data-ns-test', 'item-price');
      priceCell.innerText = price.toFixed(2);

      newRow.appendChild(nameCell);
      newRow.appendChild(priceCell);

      cartBody.appendChild(newRow);

      // Update grand total
      grandTotal += price;
      grandTotalElement.innerText = grandTotal.toFixed(2);

      // Clear inputs
      nameInput.value = '';
      priceInput.value = '';
    });




