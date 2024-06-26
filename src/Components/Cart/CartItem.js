import classess from './Cart.module.css'

const CartItem = (props) =>{

    const price = `$${props.price.toFixed(2)}`;

    return(
        <>
            <li className={classess['cart-otem']}>
                <div>
                    <h2>
                        {props.name}
                    </h2>
                    <div className={classess.summary}>
                        <span className={classess.price}>
                            {price}
                        </span>
                        <span className={classess.amount}>
                            x {props.amount}
                        </span>
                    </div>
                </div>
                <div className={classess.action}>
                    <button onClick={props.onRemove}>-</button>
                    <button onClick={props.onAdd}>+</button>
                </div>

            </li>
        </>
    )
}

export default CartItem