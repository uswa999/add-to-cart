function addCart(productName) {
    var cartList = document.getElementById("cartItems");
    var listItem = document.createElement("li");
    listItem.textContent = productName;
    cartList.appendChild(listItem);
    count++;
  document.getElementById('cartCount').innerText = count;
  }
  let count = 0;
  
  function toggleSidebar() {
     var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }