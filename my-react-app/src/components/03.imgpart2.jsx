import React from 'react'

function Displayimg(person){
    return(person.baseUrl+person.imgID+person.imageSize+".jpg")
}
export default Displayimg