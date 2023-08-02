import React from 'react'

function Multiple(){
    return (
      <div>
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
      </div>
    );
}
const Component=()=>{
    return (
      <div>
        <article>
          <h1>My First Component</h1>
          <ol>
            <li>Components: UI Building Blocks</li>
            <li>Defining a Component</li>
            <li>Using a Component</li>
          </ol>
        </article>
        <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
        <Multiple />
        <Multiple />
        <Multiple />
        <Multiple />
      </div>
    );
}
export default Component