const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

function getInitialTransaction() {
  return {
    id: Date.now(),
    text: "Initial Balance",
    amount: 10000,
    createdAt: new Date(),
  };
}

let transactions = [];

function ensureInitialBalance() {
  if (transactions.length === 0) {
    transactions.push({
      id: Date.now(),
      text: "Initial Balance",
      amount: 10000,
      createdAt: new Date(),
    });
  }
}

app.get("/transactions", (req, res) => {
  ensureInitialBalance(); 
  res.json(transactions);
});

app.post("/transactions", (req, res) => {
  const { text, amount } = req.body;

  if (!text || typeof amount !== "number") {
    return res.status(400).json({ error: "Invalid data" });
  }

  const transaction = {
    id: Date.now(),
    text,
    amount,
    createdAt: new Date(),
  };

  transactions.push(transaction);
  res.status(201).json(transaction);
});

app.delete("/transactions/:id", (req, res) => {
  const id = Number(req.params.id);

  transactions = transactions.filter((t) => t.id !== id);

  ensureInitialBalance(); 

  res.json({ message: "Deleted" });
});

app.get("/summary", (req, res) => {
  ensureInitialBalance();

  const total = transactions.reduce((sum, t) => sum + t.amount, 0);

  res.json({ balance: total });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
