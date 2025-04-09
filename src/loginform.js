import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
import React from 'react'

const loginform = () => {
  return (
    <div>
      <h1 id="wel" className=''>" Welocome To The Portal "</h1>
      <p class=".text-center " id="txt">"Welcome to HDFC Prepaid Portal, where your financial well-being is our priority. Whether you're here to explore our range of services, manage your accounts, or discover new opportunities, we're dedicated to making your banking experience seamless and secure. Thank you for choosing us—we're excited to be part of your journey!"</p>
      <tr class="d-flex justify-content-center border-0" >       
        <td class="border-0">
      <form className="form-control border-0" action={"/nav"}>
      <Link to="/nav"><button type="button" class="btn btn-primary btn-lg ">
          Login Page 
        </button>
        </Link>
        </form>
        </td>
        <td class="border-0">
        <form  className="form-control border-0" action={""}>
        <Link to="/registration"> <button type="button" class="btn btn-primary btn-lg">
          Sigup Page
        </button>
        </Link>
        </form>
        </td>
        </tr>
    </div>
  )
}
export default loginform
