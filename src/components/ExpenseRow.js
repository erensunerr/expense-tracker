import React from "react";

const tableCell = "w-1/3 inline border-x py-2 px-2";
const tableRow = "w-full flex first:border-y border-b odd:bg-gray-100";

function ExpenseRow({ setExpenses, expenses, i }) {
    const onChangeHandler = (propertyName, newValue) => {
        setExpenses(
            p => [
                ...p.slice(0, i),
                {
                    ...p[i],
                    [propertyName]: newValue,
                },
                ...p.slice(i + 1),
            ]
        )
    }

    return (
        <div className={tableRow}>
            <input
                className={tableCell}
                value={expenses[i].name}
                onChange={(e) => onChangeHandler("name", e.target.value)}
            />
            <input
                className={tableCell}
                value={`${expenses[i].cost}`}
                onChange={(e) => onChangeHandler("cost", e.target.value)}
            />
            <input
                className={tableCell}
                value={expenses[i].category}
                onChange={(e) => onChangeHandler("category", e.target.value)}
            />
        </div>
    )
}

export default ExpenseRow;