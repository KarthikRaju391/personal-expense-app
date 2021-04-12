const element = document.querySelector('#btn');
const inputAmount = document.querySelector('#inputText');
const inputDesc = document.querySelector('#inputDescription');
const expenseTable = document.querySelector("#expense-table");
let totalExpense = 0;

//get the h1 element
const headEl = document.querySelector('#headingElement');

headEl.textContent = totalExpense;

const allExpenses = [];

function addExpenseToTotal() {
	const expenseItem = {};
	//read the value from input
	const enteredAmount = inputAmount.value;
	const expense = parseInt(enteredAmount, 10);

	const expenseDesc = inputDesc.value;
	//add it to totalExpense
	totalExpense = totalExpense + expense;

	expenseItem.Description = expenseDesc;
	expenseItem.Amount = expense;

	allExpenses.push(expenseItem);

    const someText = `Total: ${totalExpense}`

	headEl.textContent = someText;

    //show the table here
    const data1 = allExpenses[0];
    const data2 = allExpenses[1];

    const data1Text = `Expense: ${data1.Amount} :: Description: ${data1.Description}`;
    const data2Text = `Expense: ${data2.Amount} :: Description: ${data2.Description}`;   

    const tableText = `
    <div>${data1Text}</div>
    <div>${data2Text}</div>
    `

    expenseTable.innerHTML = tableText;
}

//get the button element
element.addEventListener('click', addExpenseToTotal, false);
