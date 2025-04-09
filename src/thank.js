import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
import React from 'react'
import done from './done.png'

const thank = () => {
  return (
    <div>
        
      <Link  id="reg" to="/loginform"><h1 id="lp2">" Thank For The Registration"<br/><img class="justify-content-center" src={done} alt="Logo"></img></h1></Link>
    </div>
  )
}
export default thank;
