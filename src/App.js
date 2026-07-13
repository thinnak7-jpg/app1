import logo from './logo.svg';
import './App.css';

function App() {
  let rname = "John Doe";
  let age = 30;

  const user = {
    name: rname,
    age: age
  };

  return (
    <div>
      Create Web & Mobile App <br />
      with {rname} <br />
      Age is {age} <br />
    </div>
  );
}

export default App;