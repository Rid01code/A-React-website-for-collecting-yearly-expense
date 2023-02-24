import React from 'react';

import './formForExpences.css'

import FormContent from './formContent';

let FormForExpences=(props)=>{

    let importExpenseContent=(receivedExpenseData)=>{
        const expenseData ={
        ...receivedExpenseData
        }
        props.newExpense(expenseData);

        console.log(expenseData);

        
    };


    

    return(
        <div>
            <FormContent
            newExpenseContent={importExpenseContent}/>
        </div>
    )
}
 
export default FormForExpences;
