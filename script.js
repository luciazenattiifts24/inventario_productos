document.addEventListener('DOMContentLoaded', () => {
    const addProductForm = document.getElementById('addProductForm');
    const inventoryTableBody = document.querySelector('#inventoryTable tbody');
    const addProductBtn = document.getElementById('addProductBtn');

    addProductBtn.addEventListener('click', () => {
        const nameInput = document.getElementById('name');
        const categorySelect = document.getElementById('category');
        const priceInput = document.getElementById('price');
        const stockInput = document.getElementById('stock');

        const name = nameInput.value.trim();
        const category = categorySelect.value;
        const price = parseFloat(priceInput.value);
        const stock = parseInt(stockInput.value);

        if (name && category && price > 0 && stock > 0) {
            const newRow = inventoryTableBody.insertRow();

            let nameCell = newRow.insertCell();
            nameCell.textContent = name;

            let categoryCell = newRow.insertCell();
            categoryCell.textContent = category;

            let priceCell = newRow.insertCell();
            priceCell.textContent = price.toFixed(2); // Mostrar precio con dos decimales

            let stockCell = newRow.insertCell();
            stockCell.textContent = stock;

            addProductForm.reset();
        } else {
            alert("Por favor, complete todos los campos correctamente con valores válidos.");
        }
    });
});
