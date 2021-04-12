//getting element
const element = document.querySelector('#btn');
const inputAmount = document.querySelector('#inputText');
let totalExpense = 0;

function addExpenseToTotal() {
	//read the value from input
	const enteredAmount = inputAmount.value;
    const expense = parseInt(enteredAmount, 10);

    console.log({expense});
	//add it to totalExpense
    totalExpense = totalExpense + expense;

    console.log({totalExpense});
}

element.addEventListener('click', addExpenseToTotal, false);
