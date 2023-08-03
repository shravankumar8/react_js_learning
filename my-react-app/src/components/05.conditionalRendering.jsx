import React from 'react'



function Items({name,ispacked}){
   if (ispacked){
    return (<h1>{name} is packed</h1>)
   }else{
    return(
    <h1>{name} is not packed</h1>)
   }
}
function Packinglost(){
    return (
      <div>
        <h1>shravan packing list</h1>
        <ul>
          <Items name="SpaceSuit" ispacked={false} />
          <Items name="Charger" ispacked={true} />
          <Items name="Camera" ispacked={false} />
          <Items name="Books" ispacked={false} />
        </ul>
      </div>
    );
}
export default Packinglost
// this is the example of conditional rendering 