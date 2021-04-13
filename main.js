const element = document.querySelector('#btn');
const inputAmount = document.querySelector('#inputText');
const inputDesc = document.querySelector('#inputDescription');
const expenseTable = document.querySelector('#expense-table');
let totalExpense = 0;

//get the h1 element
const headEl = document.querySelector('#headingElement');

headEl.textContent = totalExpense;

const allExpenses = []; //array to store all the expenses as objects

function addExpenseToTotal() {
	const expenseItem = {}; //object to store expenses when added
	//read the value from input
	const enteredAmount = inputAmount.value; //amount entered is stored in this variable
	const expense = parseInt(enteredAmount, 10); //converting the entered amount in text to integer using parseInt function

	const expenseDesc = inputDesc.value; //description entered for the expense entered is stored in this variable
	//add it to totalExpense
	totalExpense = totalExpense + expense;

	expenseItem.Description = expenseDesc; //adding entered description to the object
	expenseItem.Amount = expense; //adding entered expense to the object
	expenseItem.moment = new Date();

	allExpenses.push(expenseItem); //pushing all the entered expenses with description to the array

	const someText = `Total: ${totalExpense}`; //templating

	headEl.textContent = someText;

	renderList(allExpenses);
}

// seperating HTML from Javascript DESTRUCTURING
function createListItem({ Description, Amount, moment }) {
	return `
	<li class="list-group-item d-flex justify-content-between">
						<div class="d-flex flex-column">
						${Description}
							<small class="text-muted">${getDateString(moment)}</small>
						</div>
						<div>
							<span class="px-5">
							${Amount}
							</span>
							<button 
								type="button" 
								class="btn btn-outline-danger btn-sm"
								onclick="deleteItem(${moment.valueOf()})"
								>
								<i class="fas fa-trash-alt"></i>
							</button>
						</div>
					</li>
				`;
}

//get the button element
element.addEventListener('click', addExpenseToTotal, false);

//Controller functions

//1. Get date string
function getDateString(moment) {
	return moment.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

//2. Function to delete item

function deleteItem(dateValue) {
	// const newArray = []
	// for(let i=0; i<allExpenses.length; i++){
	// 	if(allExpenses[i].moment.valueOf() !== dateValue){
	// 		newArray.push(allExpenses[i]);
	// 	}
	// }

	// const newArray = allExpenses.filter(expense => {
	// 	if(expense.moment.valueOf() !== dateValue){
	// 		return expense;
	// 	}
	// })

	const newArray = allExpenses.filter((expense => expense.moment.valueOf() !== dateValue));
	renderList(newArray);
}

function renderList(arrOfList) {
	const allExpenseHTML = arrOfList.map((expense) => createListItem(expense));
	const joinAllExpenseHTML = allExpenseHTML.join('');
	expenseTable.innerHTML = joinAllExpenseHTML;
}
