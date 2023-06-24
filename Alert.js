 import React from 'react'

 export default function Alert(props) {
  const capitalize=(word)=>{
  if(typeof word !=='undefined')
  {     const lower=word.toLowerCase()
     return lower.charAt().toUpperCase()+lower.slice(1)
  
   }
  }

   return (
    props.alert&& <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
<strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
 </div>
   )
 }


