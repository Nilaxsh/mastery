
// import React, { useState } from "react";
// import StripeCheckout from "react-stripe-checkout";
// const App = () => {
//   const [product , setProduct] = useState({
//     name :'Post Your Add',
//     price : '30000*100',
//     productBy : 'DirectHire'
//   })
//   const makePayment = (token) => {
//     const body = {
//       token,
//       product
//     }
//     const headers ={
//       'Content-Type':"application/json"
//     }
//     return fetch('http://localhost:5007/api/users/payment',{
//       method:'POST',
//       headers,
//       body :JSON.stringify(body)
//     }).then((response) => {
//       console.log(response)
//     }).catch((err) => {
//       console.log(err)
//     })
//   }
//   return(
//     <div>
//      <StripeCheckout
//        name="Payment"
//        amount={product.price}
//        currency="INR"
//        token={makePayment}
//        stripeKey="pk_test_51OmC71JJhMGJrvn8vY9KJu3YPBqUBmTpfU9er3ECydcK4lysdODm1PoEechm6dHKF9XZRIDITRHf0CvuHc70xNLW00xEMZSAoj"
//      >
//       <button>Payment</button>
//      </StripeCheckout>
//     </div>
//   )
// }
// export default App




import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [product , setProduct] = useState({
    name :'Post Your Add',
    price : '100000*100',
    productBy : 'DirectHire'
  })
  const makePayment = (token,product,user) => {
    const body = {
      token,
      product
    }
    const headers ={
      'Content-Type':"application/json"
    }
    return fetch('http://localhost:5007/api/users/payment',{
      method:'POST',
      headers,
      body :JSON.stringify(body)
    }).then((response) => {
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })
  }
  return(
    <div>
     <StripeCheckout
       name="Payment"
       amount={product.price}
       currency="LKR"
       token={makePayment}
       stripeKey="pk_test_51OmC71JJhMGJrvn8vY9KJu3YPBqUBmTpfU9er3ECydcK4lysdODm1PoEechm6dHKF9XZRIDITRHf0CvuHc70xNLW00xEMZSAoj"
     >
      {/* <button  className="Pay" onClick={() => navigate("/learners")}>Payment</button> */}
     </StripeCheckout>
    </div>
  )
}
export default Payment


