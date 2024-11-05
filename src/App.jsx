
import React, {useState} from "react"
import "./index.css"
import Img1 from "../src/assets/ing2.png"
import Img2 from "../src/assets/download.png"
import Img3 from "../src/assets/img.png"



function App() {
   const [weight, setWeight] = useState(0);
   const [height, setHeight] = useState(0);
   const [bmi, setBmi] = useState('');
   const [message, setMessage] = useState('There is no message');

   let calcBmi = (event) => {
       event.preventDefault();

       if (weight === 0 || height === 0) {
           alert('Please enter a valid weight and height');
       } else {
           let bmi = (parseFloat(weight) / (parseFloat(height) * parseFloat(height)) * 703);
           setBmi(bmi.toFixed(1));

           if (bmi < 25) {
               setMessage('You are underweight');
           } else if (bmi >= 25 && bmi < 30) {
               setMessage('You are healthy');
           } else {
               setMessage('You are overweight');
           }
       }
   };

   
   let imgSrc;
   if (bmi < 1){
       imgSrc = null     
   } else {
     if (bmi < 25) {
       imgSrc = Img1
     } else if(bmi >= 25 && bmi < 30) {
       imgSrc = Img2
     } else {
       imgSrc = Img3
     } 
   }
   let reload = () => {
       window.location.reload();
   };

   return (
       <div className="app">
           <div className="container">
               <h2 className="center">BMI Calculator</h2>
               <form onSubmit={calcBmi}> 
                   <div>
                       <label>Weight (lbs)</label>
                       <input value={weight} onChange={(e) => setWeight(e.target.value)} />
                   </div>
                   <div>
                       <label>Height (in)</label>
                       <input value={height} onChange={(e) => setHeight(e.target.value)} />
                   </div>
                   <div>
                       <button className="btn" type="submit">Submit</button>
                       <button className="btn btn-outline" onClick={reload} type="button">Reload</button>
                   </div>
               </form>
               <div className="center">
                   <h3>Your BMI is: {bmi}</h3>
                   <p>{message}</p>
               </div>
               <div className="img-container">
                   {imgSrc && <img src={imgSrc} alt="BMI result" />}
               </div>
           </div>
       </div>
   );
}

export default App;
