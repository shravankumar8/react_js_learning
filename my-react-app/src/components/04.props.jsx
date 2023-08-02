import React from 'react'
function Displayimg(){
    return (
      <div>
        <h1>this is shravan image</h1>
        <img src="https://i.imgur.com/1bX5QH6.jpg" alt="shravanimg" />
      </div>
    )
}

function Props1(){
    return (<div className="gandu">
        <Displayimg />
        <Displayimg />
        <Displayimg />
        <Displayimg />

    </div>)
}
export default Props1