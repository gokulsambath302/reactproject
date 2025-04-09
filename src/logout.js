import 'bootstrap/dist/css/bootstrap.css';

const logout=() => {
  return (
    
    <div id="maindiv" 
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      
      <form id="foid">
      <h1  id="lp1" class="">Logut Page</h1>
      <label for="uname"><b>Username</b></label><span id="span1"></span>
      <input type="text" placeholder="Enter Username" name="uname" required /><br /><br />
     <span id="span3"></span>
    <span class="psw">Forgot <a href="#">password?</a></span><br />
      </form>
    </div>
  );
}
export default logout
