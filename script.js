//your code here

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Shopping Cart 2</title>
  <style>
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
      padding: 8px;
    }
    input {
      margin: 5px;
    }
  </style>
</head>
<body>

  <h1>Shopping Cart</h1>

  <input type="text" id="item-name-input" placeholder="Item Name">
  <input type="number" id="item-price-input" placeholder="Item Price" min="0" step="0.01">
  <button id="add-btn">Add</button>

  <br><br>

  <table id="cart-table">
    <thead>
      <tr>
        <th>Item Name</th>
        <th>Item Price</th>
      </tr>
    </thead>
    <tbody id="cart-body">
      <!-- Items will be added here -->
    </tbody>
    <tfoot>
      <tr>
        <td>Grand Total</td>
        <td data-ns-test="grandTotal">0</td>
      </tr>
    </tfoot>
  </table>

  <script>
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
  </script>

</body>
</html>


