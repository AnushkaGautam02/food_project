import React from 'react'
import classess from './MealsSummery.module.css'
function MealsSummery() {
  return (
    <section className={classess.summary}>
        <h2>Delicius Food, Delivered To You</h2>
        <p>
            Choose you favorite meal from our broad selection of meal
            and enjoy  adelicios lunch or dinner at home.
        </p>
        <p>
            All our meals are cooked with high-quality ingredient, just-in-time and
            of course by experienced chefs!
        </p>
    </section>
  )
}

export default MealsSummery