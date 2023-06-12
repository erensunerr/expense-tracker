import React from "react";
import ExpenseRow from "./ExpenseRow";


const tableCell = "w-1/3 inline border-x py-2 px-2";
const tableRow = "w-full flex first:border-y border-b odd:bg-gray-100";

function ExpenseTable({ expenses, setExpenses }) {
    console.log()
    return (
        <section className={""}>
            <div className={tableRow + " font-bold"}>
                <div className={tableCell}>Name</div>
                <div className={tableCell}>Cost</div>
                <div className={tableCell}>Category</div>
            </div>
            {
                expenses.map(
                    (e, i) => (
                        <ExpenseRow expenses={expenses} setExpenses={setExpenses} i={i} />
                    )
                )
            }
            <button
                className={
                    "block mx-auto py-2 px-4 my-4 rounded bg-blue-600 text-blue-50 hover:underline"
                }
                onClick={
                () => setExpenses(p => ([
                    ...p, {
                    name: "",
                    cost: "",
                    category: ""
                }]))
            }
            >Add Expense
            </button>
        </section>
    )
}

export default ExpenseTable;