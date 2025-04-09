
import logo from './done.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function header() {
  return(
<div classname="card border-primary mb-3" style="max-width: 18rem;">
  <div classname="card-header">Header</div>
  <div classname="card-body text-primary">
    <h5 classname="card-title">Primary card title</h5>
    <p classname="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  );
}
export default header;