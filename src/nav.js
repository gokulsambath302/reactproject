import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
const nav = () => {
  return (
    <div
      id="maindiv"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form id="foid" action="/log">
        <h2 id="lp1" class="text-nowrap">
          {" "}
          LOGIN PAGE
        </h2>
        <label for="uname">
          <b>Username</b>
        </label>
        <span id="span1"></span>
        <input
          id="vla"
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Username"
          name="uname"
          required
        />
        <br />
        <br />
        <label for="psw">
          <b>Password</b>
        </label>{" "}
        <span id="span1"></span>
        <input
          id="vla"
          type="password"
          className="form-control form-control-lg"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <span id="span2"></span>
          
       <div className="d-flex justify-content-between mt-4">
        <Link to="/thank">
       <button type="submit" class="btn btn-primary btn-lg">
            Submit
          </button>
          </Link>
        <span id="span3"></span>
        <Link to='/loginform'>
        <button type="button" class="btn btn-danger btn-lg">
          Cancel
        </button>
        </Link>
       </div>
       <div className="d-flex justify-content-between mt-4">
       <label>
          <input type="checkbox"  name="remember" /> Remember
          me
        </label>
        <Link to='/forget'><a href="">Forgot password?</a></Link>
       </div>
        <br />
      </form>
    </div>
  );
};
export default nav;
