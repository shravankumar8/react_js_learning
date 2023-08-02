import React from "react"
const Person={
    Theme: {
        backgroundColor:"black",
        color:"white   ",
        padding:200,
        marginTop:100,
    }
}

function Styledcomponents(){
    return(
    <h1 style={Person.Theme}>this is a normal text</h1>
    )
}
export default Styledcomponents 