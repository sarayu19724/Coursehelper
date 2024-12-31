'use client'
import styles from "./page.module.css";
import {useState} from "react";
import React from "react";
import { TextField,Grid } from "@material-ui/core";



export default function Home() {
  const [Login,setLogin] = useState(false);
  const[open,setOpen] = useState(false);
  
  const [values, setValues] = useState({ 
    name: '', 
    Code: '', 
    Credits: '',
    Description: '',
    Imageurl: '',
  }); 
  const handleChange = (e) => { const { name, value } = e.target; setValues({ ...values, [name]: value, }); };

    return (
    <>
    <div className={styles.header}>
        <ul>
          <li className={styles.h1}>Course Helper</li>
          <li className={styles.h3}><button className={styles.h2} onClick={()=> setLogin(true)}>LOGIN</button></li>
        </ul>
    
     {
      Login&&
      <div className={styles.popup}>
          
        <div className={styles.pop}>
         <div className={styles.pop1}>
          
         </div>
          <div className={styles.Pop}>
            
            <button className={styles.button} onClick={()=> setLogin(false)}>x</button>
            <h4 className={styles.h4}>Login</h4>
            <form className={styles.form} action='#'>
              <div className={styles.input_box}>
                <span className={styles.icon}>
                </span>
                <input className={styles.input} type="email" required />
                <label>Email</label>
              </div>
              <div className={styles.input_box}>
              <span className={styles.icon}>
              </span>
                <input className={styles.input} type="password" required />
                <label>Password</label>
              </div>
              <div className={styles.remember}>
                <label><input type="checkbox"></input>
                Remember me </label>
                <a href="#" >Forgot Password?</a>
              </div>
              
              
            </form>
            <button type="submit" className={styles.btn}>Login</button>
          </div>
        </div>
      </div>
    
     } 
    </div>  
      <div >
         
       
        <button onClick={()=> setOpen(true)} style={{marginLeft:'1400px',width:'80px',height:'40px',marginTop:'20px'}}>Add Course</button>
         {
            open&&
        
            <div className="form1" style={{width:'800px',border:'1px solid black',marginLeft:'200px',padding:'10px'}}>
                   <button  onClick={()=> setOpen(false)} style={{marginLeft:'760px',width:'20px',background:'none',border:'none',fontSize:'20px'}}>x</button>
                   <h1 style={{paddingBottom:'10px',marginLeft:'20px'}}>Add Course</h1>
                   <div className={styles.input_box}>
                   <span className={styles.icon}>
                   </span>
                   <input className={styles.input} type="email" required />
                   <label>Email</label>
                   </div>
                   
                   <button type="submit" style={{width:'70px',height:'30px',backgroundColor:'#1569C7',marginLeft:'350px',marginTop:'20px',color:'white'}}>submit</button>
                </div>
        } 
      </div>

    </>
    
  );
}
