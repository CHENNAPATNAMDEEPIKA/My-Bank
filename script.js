let currentBalance = 0;

function updateBalance() {
  document.getElementById("balance").textContent = currentBalance.toFixed(2);
}

function showMessage(message, color) {
  const msgDiv = document.getElementById("message");
  msgDiv.textContent = message;
  msgDiv.style.color = color;

  // Clear the message after 3 seconds
  setTimeout(() => {
    msgDiv.textContent = "";
  }, 3000);
}

function deposit() {
  const amountInput = document.getElementById("amount");
  const amount = parseFloat(amountInput.value);

  if (!isNaN(amount) && amount > 0) {
    currentBalance += amount;
    updateBalance();
    showMessage("Amount added successfully!", "green");
    amountInput.value = "";
  } else {
    showMessage("Please enter a valid amount!", "orange");
  }
}

function withdraw() {
  const amountInput = document.getElementById("amount");
  const amount = parseFloat(amountInput.value);

  if (!isNaN(amount) && amount > 0) {
    if (amount <= currentBalance) {
      currentBalance -= amount;
      updateBalance();
      showMessage("Amount withdrawn successfully!", "green");
    } else {
      showMessage("Insufficient balance!", "red");
    }
    amountInput.value = "";
  } else {
    showMessage("Please enter a valid amount!", "orange");
  }
}
