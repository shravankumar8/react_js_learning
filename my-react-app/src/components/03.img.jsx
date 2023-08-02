import React from 'react'
import Displayimg from './03.imgpart2'
const person={
    name:"shravan",
    age:"kumar",
    imageID:'7vQD0fP',
    imageSize:"s",
    baseurl:"https://i.imgur.com/",
    theme:{
        backgroundColor:"black",
        color:"pink"
    }
}
function Todolist(){
    return (
        <div style={person.theme}>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <img src={Displayimg(person)} />
            <ul>
                <li>having fun in the sun</li>
                <li>always listen to music</li>
                <li>always respect your fate</li>
                <li>gratefull you are alive bitch</li>
            </ul>


        </div>
    )
}

export default Todolist