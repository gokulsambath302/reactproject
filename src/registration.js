import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
const registration = () => {
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
          REGISTRATION PAGE
        </h2>
        <label for="Fname">
          <b>F NAME</b>
        </label>
        <span id="span1"></span>
        <input
          id="vla"
          type="text"
          className="form-control form-control-lg"
          placeholder="Please Enter Your First Name "
          name="uname"
          required
        />
        <label for="Lname">
          <b>L NAME</b>
        </label>
        <span id="span1"></span>
        <input
          id="vla"
          type="text"
          className="form-control form-control-lg"
          placeholder="Please Enter Your Last Name "
          name="Lname"
          required
        />
        <label for="Age">
          <b>AGE</b>
        </label>
        <span id="span1"></span>
        <input
          id="vla"
          type="Number"
          className="form-control form-control-lg"
          placeholder="Please Enter Your AGE "
          name="Age"
          required
        />
        <label for="Email">
          <b>Email - ID</b>
        </label>
        <span id="span1"></span>
        <input
          id="vla"
          type="mail"
          className="form-control form-control-lg"
          placeholder="Please Enter Your Email Id"
          name="Email"
          required
        />
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
         <label for="psw">
          <b>Conform Password</b>
        </label>{" "}
        <span id="span1"></span>
        <input
          id="vla"
          type="password"
          className="form-control form-control-lg"
          placeholder="Re-type Password"
          name="psw"
          required
        />
        <span id="span2"></span>
          
       <div className="d-flex justify-content-between mt-4">
       <Link to="/thank"><button type="submit" class="btn btn-primary btn-lg">
            Submit
          </button>
          </Link>
        <span id="span3"></span>
        <Link to="/loginform">
        <button type="button" class="btn btn-danger btn-lg">
          Cancel
        </button>
        </Link>
       </div>
       <div className="d-flex justify-content-between mt-4">
       </div>
        <br />
      </form>
    </div>
  );
};
export default registration;
