
import "./addExpences.css";
import React ,{useState , useEffect} from "react";

import FormForExpences from '../FormComponents/formForExpences'

import Expenses from "./expenses";



let AddExpences =()=>{

     const dummyExpense = []

   
    const[updateExpense , setUpdateExpense] = useState( dummyExpense )

    useEffect(()=>{
    fetch('  http://localhost:3000/comments') .then(
        response=>{
            return response.json().then(
                data=>{
                    // console.log(data);
                    setUpdateExpense(data);
                }
            )
        }
    )},[]);

    function importNewExpense(receivedNewExpense){
        
       fetch('  http://localhost:3000/comments' , {
       method: 'POST',
       body: JSON.stringify(receivedNewExpense),
       headers:{
        "content-Type" : "application/json"
       }}
       ).then( response=>{
        fetch('  http://localhost:3000/comments') .then(
            response=>{
                return response.json().then(
                    data=>{
                        // console.log(data);
                        setUpdateExpense(data);
                    }
                )
            }
        )
    })}


    
    return(
        <div className="add_expenses">
            <FormForExpences
            newExpense = {importNewExpense}/>
            <Expenses className = "expense"
            item={updateExpense}/>
            
        </div>
    )
};

export default AddExpences ;