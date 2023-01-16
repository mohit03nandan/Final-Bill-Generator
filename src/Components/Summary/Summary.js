import React from 'react'
import styles from "./Summary.module.css"

const Summary = (props) => {
    var Name = props.pushData1.name;
    var Email = props.pushData1.email;
    var Phone = props.pushData1.phone;
  
    var Type = props.pushData2.Type;
    var Total = props.pushData2.Total;


  return (
    <div  className={styles.main} >
      <h1 class="summary-h1" style={{marginLeft: "3rem",marginTop:"1rem"}}>Summary</h1>
          <div class="main-card" style={{marginTop: "1rem"}}>
            <div class="card">
              <div class="card-body" className={styles.cardBody} >Name : {Name}</div>
            </div>
            <div class="card">
              <div class="card-body"  className={styles.cardBody}>Email: {Email}</div>
            </div>
            <div class="card">
              <div class="card-body"  className={styles.cardBody}>Phone: +91 {Phone} </div>
            </div>
            <div class="card">
              <div class="card-body" className={styles.cardBody}>Plan: {Type} </div>
            </div>
            <div class="card">
              <div class="card-body" className={styles.cardBody} >Total: {Total}</div>
            </div>
            <hr  className={styles.hr} />
            <div class="card">
              <div class="card-body"  className={styles.cardBody} >GrandTotal: {Total} </div>
            </div>
          </div>
    </div>
  )
}

export default Summary