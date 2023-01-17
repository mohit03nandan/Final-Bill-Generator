import React,{} from 'react'
import styles from "./info.module.css"


const Info = ({DataInfo,setDataInfo}) => {

 function nameChange(e) {
        e.preventDefault();;
        setDataInfo({ ...DataInfo, name: e.target.value }) 
      }
    
      function emailChange(e) {
        setDataInfo({ ...DataInfo, email: e.target.value })
      }
    
      function phoneChange(e) {
        setDataInfo({ ...DataInfo, phone: e.target.value })
      }


    
    

  return (
    <div class="container" className={styles.container}  >
         <form  class="form" >
           <h1 class="h1" className={styles.h1}>Your Information</h1>
           <div  class="main"  >
         <div class="form-group" className={styles.formgroup}>
           <label for="exampleInputEmail1" class="exampleInput" className={styles.exampleInput}>Name</label>
           <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={DataInfo.name} placeholder="Enter name"  onChange={nameChange}/>
          
         </div>
         <div class="form-group"  className={styles.formgroup}>
           <label for="exampleInputPassword1"  className={styles.exampleInput}>email</label>
           <input type="email" class="form-control" id="exampleInputPassword1"  value={DataInfo.email} placeholder="Enter email"  onChange={emailChange}/>
         </div>
         <div class="form-group"  className={styles.formgroup}>
           <label for="exampleInputPassword2"  className={styles.exampleInput}>Phone number</label>
           <input type="text" class="form-control" id="exampleInputPassword1"  value={DataInfo.phone} placeholder=" Enter phone"  onChange={phoneChange}/>
         </div>
         </div>
  </form>

    </div>
  )
}

export default Info