import { Children } from "react";

function ALertbutton({message,children}){
    return(
    <button onClick={()=>{alert(message)}}>{children}</button>
    )
}

function Buttons(){
    return (
      <div>
        <ALertbutton  message="shravan">playmovie</ALertbutton>
        <ALertbutton message="kumar">playmovie</ALertbutton>
      </div>
    );
}
export default Buttons