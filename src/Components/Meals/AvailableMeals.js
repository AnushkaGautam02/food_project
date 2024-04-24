
import React from 'react'
import classess from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const Data = [
    {
        id: 'm1',
        name: "Sushi",
        description:"Finest Fish and Veggies",
        price: 22.99
    },
    {
        id:'m2',
        name:"schnitzel",
        description:"A German speciality",
        price: 16.5
    },
    {
        id:'m3',
        name:"Barbecue Burger",
        description: "American, raw, meaty",
        price:12.99
    },
    {
        id:'m4',
        name:"Green Bowl",
        description:"Healthy....and green....",
        price: 18.99
    }
]


function AvailableMeals() {
    const mealsList = Data.map(meal=><MealItem key = {meal.id} id={meal.id} name={meal.name} description= {meal.description} price= {meal.price}/>)
  return (
    <section className={classess.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
  )
}

export default AvailableMeals