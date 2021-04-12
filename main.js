const element = document.querySelector('#btn');
const inputAmount = document.querySelector('#inputText');
const inputDesc = document.querySelector("#inputDescription");
let totalExpense = 0;

//get the h1 element
const headEl = document.querySelector('#headingElement');

headEl.textContent = totalExpense;

function addExpenseToTotal() {
	//read the value from input
	const enteredAmount = inputAmount.value;
	const expense = parseInt(enteredAmount, 10);

	console.log({ expense });
    const expenseDesc = inputDesc.value;
    console.log({expenseDesc});
	//add it to totalExpense
	totalExpense = totalExpense + expense;

	console.log({ totalExpense });

	headEl.textContent = totalExpense;
}

//get the button element
element.addEventListener('click', addExpenseToTotal, false);
