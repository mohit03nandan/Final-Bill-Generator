import React, { useState } from "react";
import styles from "./Bill.module.css"

import Info from '../Info/Info'
import Plan from '../Plan/Plan'
import Summary from '../Summary/Summary'



const Bill = () => {
   

const [DataInfo, setDataInfo] = useState({
    name:"",
    email: "",
    password: ""

});
console.log(DataInfo)



const [DataPlan, setDataPlan] = useState("");

    const [view, setView] = useState(1);
    console.log(view)
  
    function previous(){
          if(view<=1){
            // alert("stop")
            setView((currentView) => currentView +1 );
          }
        setView((currentView) => currentView - 1);
    }

    function next(){
        if(view>=3){
            // alert("stop")
            setView((currentView) => currentView - 1);
          }
          setView((currentView) => currentView + 1);
        
    }
    console.log(view)

    const Pagination = () => {
        if (view === 1) {
            
          return <Info   DataInfo={DataInfo}  setDataInfo={setDataInfo} />;
        } 
        else if (view === 2) {
          return <Plan  pullData={setDataPlan} />;
        } 
        else {
          return <Summary pushData1={DataInfo} pushData2={DataPlan}  />;
        }
      };

      

  return (
    <div>

         <div class="container">
           <div class="row">
             <div class="col-4" className={styles.sidebar}>
              <div class="row" className={styles.mains}>
              <div className={styles.first}>
                 <div class="col-6" >
                 <button
                  type="button"
                  class="btn btn-outline-info   "
                  id="btn1"
                  className={styles.btn}
                  style={view === 1 ? { backgroundColor: " rgb(0, 255, 255)"  } : { backgroundColor:'white' }}
                >
                  1
                </button>
                 </div>
                 <div class="col-6">
                 <h6 class="sidebar-h6" className={styles.h6} >STEP 1</h6>
                <h5 class="step" className={styles.h5} > YOUR INFO</h5>
                    </div>
            </div>
            <div className={styles.first}>
                    <div class="col-6">
                    <button
                  type="button"
                  class="btn btn-outline-info   "
                  className={styles.btn}
                  style={view === 2 ? { backgroundColor: " rgb(0, 255, 255)" } : { backgroundColor:'white' }}
                >
                  2
                </button>
                 </div>
                 <div class="col-6">
                 <h6 class="sidebar-h6" className={styles.h6} >STEP 2</h6>
                <h5 class="step" className={styles.h5} > SELECT YOUR PLAN</h5>
                </div>
                    </div>
                    <div className={styles.first}>
                    <div class="col-6">
                    <button
                  type="button"
                  class="btn btn-outline-info   "
                  className={styles.btn}
                  style={view === 3 ? { backgroundColor: " rgb(0, 255, 255)"  } : { backgroundColor:'white' }}
                >
                  3
                </button>
                 </div>
                 <div class="col-6">
                 <h6 class="sidebar-h6" className={styles.h6} >STEP 3</h6>
                <h5 class="step" className={styles.h5} > SUMMARY</h5>
                </div>
                    </div>
              </div>

             </div>
             <div class="col-8">
             {Pagination()}

               <div class="container"> 
                  <div class="row">
                  <div class="col-6" >
                    <button class="btn btn-outline-dark" onClick={previous}  style={{marginLeft:"110px"}}>previous</button> 
             
                         

                  </div>
                  <div class="col-6">
                      <button class="btn btn-outline-info btn-lg" onClick={next} style={{marginLeft:"200px"}}> next </button>

                  </div>


                  </div>
                  </div>
                  
             </div>
            
           </div>
         </div>
    </div>
  )
}

export default Bill