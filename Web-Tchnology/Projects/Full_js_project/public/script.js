const text = document.getElementById("text");
const amount = document.getElementById("amount");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const balance = document.getElementById("balance");

const API = "/transactions";

async function loadTransactions() {
  try {
    const res = await fetch(API);
    const data = await res.json();
    updateUI(data);
  } catch (err) {
    console.error("Error loading transactions:", err);
  }
}

async function loadSummary() {
  try {
    const res = await fetch("/summary");
    const data = await res.json();
    balance.textContent = "Balance: ₹" + data.balance;
  } catch (err) {
    console.error("Error loading summary:", err);
  }
}
async function addTransaction() {
  const desc = text.value.trim();
  const amt = Number(amount.value);

  if (desc === "" || amount.value === "") {
    alert("Enter all fields");
    return;
  }

  if (amt === 0) {
    alert("Amount cannot be 0");
    return;
  }

  try {
    addBtn.disabled = true;
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: desc, amount: amt }),
    });

    text.value = "";
    amount.value = "";

    await loadTransactions();
    await loadSummary();
  } catch (err) {
    console.error("Error adding transaction:", err);
  } finally {
    addBtn.disabled = false;
  }
}

async function deleteTransaction(id) {
  try {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    await loadTransactions();
    await loadSummary();
  } catch (err) {
    console.error("Error deleting transaction:", err);
  }
}

function updateUI(transactions) {
  list.innerHTML = "";

  transactions
    .slice()
    .reverse()
    .forEach((t) => {
      let li = document.createElement("li");

      li.textContent = `${t.text} ₹${t.amount}`;
      li.style.color = t.amount > 0 ? "green" : "red";

      if (t.text === "Initial Balance") {
        li.style.fontWeight = "bold";
      }

      if (t.text !== "Initial Balance") {
        let btn = document.createElement("button");
        btn.textContent = "Delete";

        btn.addEventListener("click", () => deleteTransaction(t.id));

        li.appendChild(btn);
      }

      list.appendChild(li);
    });
}

addBtn.addEventListener("click", addTransaction);

amount.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTransaction();
  }
});

loadTransactions();
loadSummary();
