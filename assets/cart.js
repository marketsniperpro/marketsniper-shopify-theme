// Cart page functionality
document.addEventListener('DOMContentLoaded', function() {
  const toast = document.getElementById('cart-toast');

  // Show toast notification
  function showToast(message, type = 'success') {
    if (!toast) {
      const newToast = document.createElement('div');
      newToast.id = 'cart-toast';
      newToast.className = 'cart-toast';
      document.body.appendChild(newToast);
    }
    
    const toastElement = document.getElementById('cart-toast');
    toastElement.textContent = message;
    toastElement.className = `cart-toast ${type} show`;
    
    setTimeout(() => {
      toastElement.classList.remove('show');
    }, 3000);
  }

  // Make showToast available globally
  window.showToast = showToast;

  // Remove item from cart
  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const line = this.dataset.line;
      
      fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ line: line, quantity: 0 })
      })
      .then(response => response.json())
      .then(data => {
        showToast('Item removed from cart');
        setTimeout(() => location.reload(), 500);
      })
      .catch(error => {
        console.error('Error:', error);
        showToast('Error removing item', 'error');
      });
    });
  });
});

// Validate and proceed to checkout (global function for inline onclick)
function validateAndCheckout() {
  const checkbox1 = document.getElementById('acknowledge-1');
  const checkbox2 = document.getElementById('acknowledge-2');
  const tvUsername = document.getElementById('tradingview-username')?.value.trim();
  
  // Check if both checkboxes are checked
  if (checkbox1 && checkbox2 && (!checkbox1.checked || !checkbox2.checked)) {
    showToast('Please check all acknowledgment boxes before proceeding', 'error');
    
    // Highlight unchecked boxes
    if (!checkbox1.checked) {
      checkbox1.parentElement.style.color = '#ff6b6b';
      setTimeout(() => {
        checkbox1.parentElement.style.color = '#b8b8b8';
      }, 2000);
    }
    if (!checkbox2.checked) {
      checkbox2.parentElement.style.color = '#ff6b6b';
      setTimeout(() => {
        checkbox2.parentElement.style.color = '#b8b8b8';
      }, 2000);
    }
    
    return false;
  }
  
  // Validate TradingView username
  if (!tvUsername || tvUsername.length < 3) {
    showToast('Please enter your TradingView username', 'error');
    document.getElementById('tradingview-username')?.focus();
    return false;
  }
  
  // Save to cart attributes
  fetch('/cart/update.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      attributes: {
        'TradingView Username': tvUsername
      }
    })
  })
  .then(response => response.json())
  .then(data => {
    showToast('Information saved! Proceeding to checkout...');
    setTimeout(() => {
      window.location.href = '/checkout';
    }, 800);
  })
  .catch(error => {
    console.error('Error:', error);
    showToast('Error saving information. Please try again.', 'error');
  });
  
  return false;
}