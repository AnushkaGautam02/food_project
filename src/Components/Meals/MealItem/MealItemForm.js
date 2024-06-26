import React, { useRef, useState } from 'react'
import classess from './MealItemForm.module.css'
import Input from '../../UI/Input'
function MealItemForm(props) {

  const [amountIsValid, setAmountIsValid] = useState(true)

  const amountInputRef = useRef()

  const submitHandler = (event) =>{
    event.preventDefault()

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber)

  }

  return (
    <form className={classess.form} onSubmit={submitHandler}>
        <Input 
            ref= {amountInputRef}
            label = 'Amount'
            input = {{
                id: 'amount',
                type:'number',
                main:'1',
                max:'5',
                step:'1',
                defaultValues: '1'
            }}
        />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  )
}

export default MealItemForm