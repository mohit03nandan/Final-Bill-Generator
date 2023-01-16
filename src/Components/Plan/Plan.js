import React,{useState} from 'react'
import styles from "./Plan.module.css"

const Plan = (props) => {

    const [type1, setType1] = useState("Arcade");
    const [total1, setTotal1] = useState("$9");
  
    const [type2, setType2] = useState("Advanced");
    const [total2, setTotal2] = useState("$12");

  
    const [type3, setType3] = useState("Pro");
    const [total3, setTotal3] = useState("$15");
    
    const [month, setMonth] = useState("month");



    function Planning1(e) {
        e.preventDefault();
        setType1("Arcade");
        setTotal1("$9");
    
        console.log(type1);
        console.log(total1);
       
        props.pullData({
            Type: type1,
            Total: total1,
          });
       
      }
    
      function Planning2(e) {
        e.preventDefault();
        setType2("Advanced");
        setTotal2("$12");
    
       
        console.log(type2);
        console.log(total2);

        props.pullData({
            Type: type2,
            Total: total2,
          });
       
      }
      function Planning3(e) {
        e.preventDefault();
        setType3("Advanced");
        setTotal3("$15");
    
       
        console.log(type3);
        console.log(total3);

        props.pullData({
            Type: type3,
            Total: total3,
          });
      }
      function radioClcik2(){
         setMonth("year")
      }
      function radioClick1(){
        setMonth("month")
     }



    
  return (
    <div>
       
          <div class="container" className={styles.container}>
            <h1 className={styles.h1}>Select Your Plan</h1>
            <h5 className={styles.h5}>You have the option of monthly and yearly billing</h5>
            <div class="main" className={styles.main}>         
             <div class="row" className={styles.row}>
             <div class="col-4" className={styles.col4}  onClick={Planning1} >
                 <button
                  type="button"
                  class="btn btn-dark price-button "
                style={{ background: "pink" , marginTop:"2rem" }}
                >
                  <i class="fa fa-credit-card-alt" style={{fontSize: "30px",color: "white" }}></i>
                </button>
                <h4 className={styles.h4} >Basic</h4>
                <h6 className={styles.h6} >$9/{month}</h6>
             </div>
             <div class="col-4" className={styles.col4}  onClick={Planning2} >
                 <div class="col-4 price" >
                <button
                  type="button"
                  class="btn btn-dark price-button"
                  style={{ background: "#1F1D7F" , marginTop:"2rem" }}
                >
                  <i class="fa fa-database" style={{fontSize: "30px",color: "white"}}></i>
                </button>
                <h4 className={styles.h4}>Advanced</h4>
                <h6   className={styles.h6}>$12/{month}</h6>
              </div>
             </div>
             <div class="col-4"  className={styles.col4}  onClick={Planning3} >
                 <div class="col-4 price">
                <button
                  type="button"
                  class="btn btn-dark price-button "
                  style={{ background: "#8D3C41" , marginTop:"2rem" }}
                >
                  <i class="fa fa-car" style={{fontSize: "30px",color: "white"}}></i>
                </button>
                <h4 className={styles.h4}>Pro</h4>
                <h6  className={styles.h6}>$15/{month}</h6>
                </div>
               </div>
            </div>
            </div> 
             
            <div class=" toogle" className={styles.toggle}>
              <div class="row">
                <div class="col-6">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked
                      onClick={radioClick1}
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      <h2>monthly</h2>
                    </label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      
                      onClick={radioClcik2}
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      <h2 class="yearly" style={{ color: "#676767"}}>yearly</h2>
                    </label>
                  </div>
                </div>
              </div>
            </div>

          </div>
    </div>
  )
}

export default Plan