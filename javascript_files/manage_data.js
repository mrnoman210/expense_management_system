var budget = 0;
var remaining = 0;
var expense_amount = 0;
function addBudget() {
  budget = document.getElementById("addBudget").value;
  remaining = budget;
  document.getElementById("display_budget").innerText = "$" + budget;
  document.getElementById("remaining_balance").innerText = remaining
}
function addExpense() {
  //
  const user_Expense = {
    category: document.getElementById("category").value,
    details: document.getElementById("details").value,
    amount: document.getElementById("amount").value,
    date: document.getElementById("date").value,
  };

//   restrictions
  if (budget == 0) {
    document.getElementById("error_message").innerText = "Please enter budget";
    document.getElementById("error_ID").classList.add("error_display");
    console.log("none");
    setTimeout(() => {
      document.getElementById("error_ID").classList.remove("error_display");
      document.getElementById("error_ID").classList.add("error_none");
    }, 2000);
  } 
  else if (document.getElementById("details").value == "") {
    document.getElementById("error_message").innerText = "Please enter details";
    document.getElementById("error_ID").classList.add("error_display");
    console.log("none");
    setTimeout(() => {
      document.getElementById("error_ID").classList.remove("error_display");
      document.getElementById("error_ID").classList.add("error_none");
    }, 2000);
  } 
  else if (document.getElementById("amount").value == "") {
    document.getElementById("error_message").innerText = "Please enter amount";
    document.getElementById("error_ID").classList.add("error_display");
    console.log("none");
    setTimeout(() => {
      document.getElementById("error_ID").classList.remove("error_display");
      document.getElementById("error_ID").classList.add("error_none");
    }, 2000);
  } 
  else if (document.getElementById("date").value == "") {
    document.getElementById("error_message").innerText = "Please enter date";
    document.getElementById("error_ID").classList.add("error_display");
    console.log("none");
    setTimeout(() => {
      document.getElementById("error_ID").classList.remove("error_display");
      document.getElementById("error_ID").classList.add("error_none");
    }, 2000);
  } 
  else {
    // expense_amount = expense_amount + user_Expense.amount; 
document.getElementById("remaining_balance").innerText = remaining - user_Expense.amount
expense_amount = expense_amount + (+user_Expense.amount);
document.getElementById("expense_balance").innerText = expense_amount
    document.getElementById("data_id").innerHTML += `
        <div class="data" id="sub_data_id">
        <p>${user_Expense.category}</p>
        <p>${user_Expense.details}</p>
        <p>${user_Expense.amount}</p>
        <p>${user_Expense.date}</p>
        <p class="close_expense" onclick="delete_expense()">X</p>
    </div>`;
  }
  document.getElementById("display_budget").innerText =
    "$" + (budget - document.getElementById("amount").value);
}
function delete_expense() {
    document.getElementById("sub_data_id").style.display = "none";
}