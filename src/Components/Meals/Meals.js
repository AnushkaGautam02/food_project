import { Fragment } from "react";
import MealsSummery from "./MealsSummery";
import AvailableMeals from "./AvailableMeals";

import React from 'react'

function Meals() {
  return (
    <Fragment>
        <MealsSummery/>
        <AvailableMeals/>
    </Fragment>
  )
}

export default Meals