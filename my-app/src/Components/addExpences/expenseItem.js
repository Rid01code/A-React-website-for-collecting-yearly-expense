
import React from "react";

import './expenseItem.css';


let ExpenseItem=(props)=>{

    const month = props.date.toLocaleString('en-us' , {month:'long'});
    const year = props.date.getFullYear();
    const day =  props.date.toLocaleString('en-us' , {day: '2-digit'});

    return(
        <div className="expense_chart">

            <div className="expense_date">
                <div className="month"> {month} </div>
                <div className="year"> {year} </div>
                <div className="day"> {day} </div>
            </div>

            <div className="expense_title">{props.title}</div>

            <div className="expense_amount"> $ {props.amount}</div>

        </div>
    )
}

export default ExpenseItem; 