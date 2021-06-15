import React, { Component } from 'react';
import classes from './expense-calculator.module.css'
import ExpenseForm  from '../../components/form/form';
class ExpenxeTracker extends Component {
    state = { 
        income:0,
        expense:0,
        balance:0,
        totalIncome:0,
        totalExpense:0,
        addIncome:"Add Income",
        addExpense:"Add Expense"
     }

    //  addIncome=(value)=>{
       
    //      this.setState({income:value});
    // }
    myChangeHandler = (event) => {
        this.setState({income: event.target.value});
      }
   updateExpense=(value)=>{
    let totalBalance=this.state.balance-parseInt(value);
    let totalExpense=this.state.totalExpense+parseInt(value);
       this.setState({
           expense:value,
           balance:totalBalance,
           totalExpense:totalExpense     
       })
   }
   updateIncome=(value)=>{
    let totalBalance=parseInt(value)+this.state.balance;
    let totalIncome=parseInt(value)+this.state.totalIncome;
    this.setState({
        income:value,
        balance:totalBalance,
        totalIncome:totalIncome

    })
  
}
   updatebalance=()=>{
        var totalBalance=this.state.balance;
        console.log("ssss",totalBalance);
        totalBalance=this.state.income-this.state.expense;
        this.setState({balance:totalBalance});
   }
    render() { 
        return ( 
            <div className={classes}>
            <h1>Balance:{this.state.balance}</h1>
            <h2>Total Income:{this.state.totalIncome}</h2>
            <h2>Total Expence:{this.state.totalExpense}</h2>
            <button onClick={this.updatebalance}>Check Balance</button>
            <h2>Income:{this.state.income}</h2>
            <h2>Expense:{this.state.expense}</h2>
            <ExpenseForm addIncome={this.state.addIncome} clicked={this.updateIncome}  ></ExpenseForm>
            <ExpenseForm addIncome={this.state.addExpense} clicked={this.updateExpense}  ></ExpenseForm>
            
            </div>
         );
    }
}
 
export default ExpenxeTracker;