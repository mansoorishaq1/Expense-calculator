import React,{useRef} from 'react';
import classes from './form.module.css'

const ExpenseForm=(props)=>{
    const textValue = useRef(null);
    return(

        <div className={classes.form}>
        <label id="add" >{props.addIncome} </label>
        <input type='text'  id="add" ref={textValue} placeholder={props.addIncome} onChange={props.changeHandler}></input>
        <button onClick={()=>props.clicked(textValue.current.value)}>Add</button>
        </div>
    );
}

export default ExpenseForm;