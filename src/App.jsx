import "./App.css";

const App = () =>{
  return(
    <div>
      <nav>
        <div className="Logo">
          <img src="/images/logo.jpg" alt="" />
        </div>
        <ul>
          <li href="#">Platform</li>
          <li href="#">Plans</li>
          <li href="#">Enterprise</li>
          <li href="#">Resources</li>
          <li href="#">Education</li>
        </ul>

        <button>Sign Up</button>
      </nav>
    </div>
  )
}

export default App;