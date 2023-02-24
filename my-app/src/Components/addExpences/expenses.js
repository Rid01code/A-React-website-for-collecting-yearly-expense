import React from 'react';




import ExpenseItem from './expenseItem';

let Expenses=(props)=>{
    return(
        <div>
    
        {
            props.item.map(
                expense=>(
                    <ExpenseItem 
                    key = {expense.id}
                    date = {new Date (expense.date)}
                    title = {expense.title}
                    amount = {expense.amount}/>
                )

                
            )
        }
        </div>
    )
}

export default Expenses;