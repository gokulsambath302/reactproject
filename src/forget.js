import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const forget = () => {
  return (
    <div
      id="maindiv"
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 id="lp6" class=".text-danger ">
        "Reset Your Password"
      </h1>
      <form id="foidfor" action="/log" className="justify-content-center">
              <label for="uname">
                <b>Password</b>
              </label>
              <span id="span1"></span>
              <input
                id="vla"
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter Password"
                name="uname"
                required
              />
              <br />
              <br />
              <label for="psw">
                <b>Re-Enter Password</b>
              </label>{" "}
              <span id="span1"></span>
              <input
                id="vla"
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter Re-Enter Password"
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
              <br />
            </form>
    </div>
    
  );
};

export default forget;
