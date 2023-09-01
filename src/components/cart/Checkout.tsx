import { useState } from "react"

function formatCurrency(amount:number) {
    return new Intl.NumberFormat('en-us',{
        style: 'currency',
        currency: 'USD',
        // minimumFractionDigits: 2
    }).format(amount);
}

const CheckNotice = () =>{
    return <p className="notice">Coming Soon!....</p>
}
  

const Checkout = ({total} : {total: number}) => {
  const [showNotice, setShowNotice] = useState(false);
  return (
    <>
        <div className="">
            <p className="total">
                <span className="label">Total: {formatCurrency(total)}</span>
            </p>
            <p className="shipping">
                <span className="label">Shipping:</span>
                <del>$10.00</del>
                <ins>Free</ins>
            </p>
            <p className="total">
                <span className="label">Total: {formatCurrency(total)}</span>
            </p>
            <p className="checkout">
                <button 
                    className="button-link"
                    onClick={() => setShowNotice(true)}
                >
                    Checkout
                </button>
            </p>
            { showNotice && <CheckNotice /> }
        </div>   
    </>
  )
}

export default Checkout