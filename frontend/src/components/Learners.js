import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../Learners.css' 
import { Link, useLocation, useNavigate } from "react-router-dom";
import myImage from '../../src/Assets/exam.png';
import myImage2 from '../../src/Assets/exam-removebg-preview (2).png';
import StripeCheckout from "react-stripe-checkout";



const Learners = () => {
  const navigate = useNavigate();
  const [product , setProduct] = useState({
    name :'Post Your Add',
    price : 100000,
    productBy : 'DirectHire'
  })
  const jwttoken = localStorage.getItem("token")
  const [ispaid , setIsPaid] = useState(false);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/users/get-one-user`, {
          method: 'GET',
          headers: {
            'Authorization': `${jwttoken}`
          }
        });

        if (!response.ok) {
          // Handle non-successful response (e.g., log error, show a message)
          console.error(`HTTP error! Status: ${response.status}`);
          return;
        }

        const user = await response.json();
        setIsPaid(user.ispaid || false); 
      } catch (error) {
        // Handle fetch errors
        console.error('Fetch error:', error);
      }
    };

    fetchUserData();
  }, [jwttoken]); 
  const makePayment = (token) => {
    const body = {
      token,
      product
    }
  
    return fetch(`${process.env.REACT_APP_BACKEND}/api/users/payment`,{
      method:'POST',
      body :JSON.stringify(body),
      headers: {
        'Authorization': `${jwttoken}`,
        'Content-Type':"application/json"
      },
    
    }).then((response) => {
      setIsPaid(true)
      try{
        return fetch(`${process.env.REACT_APP_BACKEND}/api/users/sentmail`,{
      method:'POST',
      body :JSON.stringify(body),
      headers: {
        'Content-Type':"application/json"
      },
     
      })}
      catch(err){
        console.log(err)
      }
      
      
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    ispaid ? (
      <div>
      <Navbar/>
      <div className="search-container">
       
    
      </div>
      
       
        <div className="image-wrapper">

        <Link to="/learners/notes">
          <div className="media">
            <div className="overlay"></div>
            <img
        src={myImage}
        alt="Description of the image"
        style={{ width: '100%', height: '100%' }}
      />

            <div className="image-details">
              <p> Notes</p>
            </div>
          </div>
       </Link>
          
          <Link to ='/learners/QuizQuestionList'>
          <div className="media">
            <div className="overlay"></div>
            <img
        src={myImage2}
        alt="Description of the image"
        style={{ width: '100%', height: 'auto' }}
      />
            <div className="image-details">
              <p>Exam </p>
            </div>
          </div>
          </Link>
         
          
        </div>
      <Footer/>
    </div>
    ):(
    <div>
      <p>You Are Not Paid</p>
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
    </div>)
  );
};

export default Learners;
