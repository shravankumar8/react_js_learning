import React from 'react'


function Userslist(){
    const users=["shravam","venkatesh","kumar","hp","linux","binux"]
    let people=users.map(person => <li>{person}</li>);
    return (
      <div>
        <ul>
          {people}
        </ul>
      </div>
    );

}
export default Userslist