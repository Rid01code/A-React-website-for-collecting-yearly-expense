
import  React , {useState}  from "react";


import './formContent.css';

import Button from "../button/button";



let FormContent=(props)=>{

const [enteredTitle , NewEnteredTitle] = useState('');
const [enteredAmount , NewEnteredAmount] = useState('');
const [enteredDate , NewEnteredDate] = useState('')

// const [ExpensePage , goToExpensePage] = useState(false);
// if(ExpensePage){
//     <Navigate to ='../addExpences/expenseItem.js'/>
// }

const dateChangeHandler=(event)=>{
    NewEnteredDate(event.target.value);
};

const titleChangeHandler=(event)=>{
    NewEnteredTitle(event.target.value);
};

let amountChangeHandler=(event)=>{
    NewEnteredAmount(event.target.value);
};

let submitHandler=(event)=>{
    event.preventDefault();

    const expenseData = {
        date : new Date (enteredDate),
        title : enteredTitle,
        amount : enteredAmount,
        id : Math.random().toString()
    }
    

    NewEnteredDate(' ');
    NewEnteredTitle(' ');
    NewEnteredAmount(' ');
    // goToExpensePage(true);
    props.newExpenseContent(expenseData);


  
 
    

}    



    return(
        <div>
            <form className="form"
            onSubmit={submitHandler }> 
                <div className="date_title">
                    <div className="date">
                        <label>Date</label>
                        <input type='Date' onChange={dateChangeHandler} value={ enteredDate}/>
                    </div>
                
                    <div className="title">
                        <label>Title</label>
                        <input type='text' onChange={titleChangeHandler} value={ enteredTitle}/>
                    </div>
                </div>    
                
                <div className="amount">
                    <label>Amount</label>
                    <input type='number' onChange={amountChangeHandler} value={ enteredAmount}/>
                    
                </div>

                <Button type='submit' />

            </form>

           
        </div>
    )
}

export default FormContent;