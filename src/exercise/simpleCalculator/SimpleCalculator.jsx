import React,{useReducer,useState} from 'react'
import './calculator.css'

const SimpleCalculator = () => {
    const numbers=[0,1,2,3,4,5,6,7,8,9];
    const actions=['+','-','*','/']
      
    const [click1,setClick1]=useState(false);
    const [click2,setClick2]=useState(false);
    const [click3,setClick3]=useState(false);
    const [num1,setNum1]=useState('');
    const [num2,setNum2]=useState('');
    const [action,setAction]=useState('');

    function Click1(number){
        setClick1(click1=>!click1);
        setNum1(number);
    }
    function Click2(number){
        setClick2(click2=>!click2);
        setNum2(number)   
    }
    function Click3(action){
        setClick3(click3=>!click3);
        setAction(action)
    }
      
    const [result,setResult]=useReducer(()=>{
         if (action===''||num1===''||num2==='') return (
          alert('None can be empty')
         )
         else if (action==='/' & num2===0) 
         return(
          alert('number 2 can not be 0 when action is /'
         )) 
      
         if(action==='+') return num1+num2; 
         if(action==='-') return num1-num2;
         if (action==='*') return num1*num2;
         if (action==='/') return num1/num2;     

        },0)
      
    return (
        <div className='form__container flex__center'>
           
            <label for='num1'>Number 1: </label>
              <div className='num1'>
              {numbers.map((item,index)=>(
                <div className='button' key={`num1+${index}`}>
                <button type='button' value={item}
                onClick={()=>Click1(item)} 
                style={num1===item? {backgroundColor:'orange'}:{}}>                
                 {item}           
                </button>
                </div>
              ))}
             </div>
      
            <label for='num2'>Number 2: </label>
              <div className='num2'>
              {numbers.map((item,index)=>(
                  <div className='button' key={`num2+${index}`}>
                   <button type='button' value={item}
                   onClick={()=>Click2(item)} 
                   style={num2===item? {backgroundColor:'orange'}:{}}> 
                   {item}</button>
                  </div>
              ))}
            </div>
      
            <label for='action'>Action: </label>
              <div className='action'>
              {actions.map((item,index)=>(
                  <div className='button' key={item+index}>
                  <button type='button' 
                   onClick={()=>Click3(item)} 
                   style={action===item? {backgroundColor:'orange'}:{}}>
                  {item}</button>
                  </div>
              ))}
            </div>
      
              <label for='result'>Result: <span> {result} </span> </label>
              <input type='submit' onClick={setResult}/>
      
          </div>
        )
      }

export default SimpleCalculator