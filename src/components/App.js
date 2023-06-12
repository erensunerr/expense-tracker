import React, {useState} from 'react';
import ExpenseTable from "./ExpenseTable";
import SearchBar from "./SearchBar";

const EXPENSES = [

    {
        name: "Ladder",
        cost: 500,
        category: "House Repairs",
    },
    {
        name: "Kitchen Utensils",
        cost: 100,
        category: "House Repairs",
    },
    {
        name: "Groceries",
        cost: 200,
        category: "Food",
    },
    {
        name: "Paintbrushes",
        cost: 50,
        category: "House Repairs",
    },
    {
        name: "Restaurant Dinner",
        cost: 100,
        category: "Food",
    }
]

const App = () => {
    let [expenses, setExpenses] = useState(EXPENSES);
    // Expense Object Example
    // {
    //  name: "Ladder",
    //  cost: 500,
    //  category: "House Repairs"
    // }
    const [searchString, setSearchString] = useState("");

    console.log(expenses);

    if (searchString !== "") {
        expenses = expenses.filter(
            // Filter expenses by search string (name and category)
            // case insensitive search
            (expense) =>
                (
                    expense.name.toLowerCase().includes(searchString.toLowerCase())
                ) || (
                    expense.category.toLowerCase().includes((searchString.toLowerCase()))
                )
        )
    }

    return (
    <div className={"w-full mx-4 md:w-1/2 sm:mx-auto"}>
        <h1 className={"text-2xl text-center font-semibold my-12"}>Expense Tracker</h1>
        <div className={"shadow-xl px-6 py-12 rounded-xl bg-gray-50"}>
            <SearchBar setSearchString={setSearchString} />
            <ExpenseTable expenses={expenses} setExpenses={setExpenses} />
        </div>

        {/*<ExpenseAdder setExpenses={setExpenses} />*/}
        <div className={"text-center mt-12"}>Built with ☕️ by Eren.</div>
    </div>
    )
} 

export default App;