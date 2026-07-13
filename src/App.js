import logo from './logo.svg';
import './App.css';

function App() {
  let rname = "John Doe";
  let age = 30;

  const user = {
    name: rname,
    age: age
  };
  const divStyle = {
    color: 'blue',
    backgroundColor: 'lightgray',
    fontSize: 'larger',
    padding: '3px',
  };
  return ( <div style={divStyle}>
      Create Web & Mobile App <br />
      with {user.name} <br />
      Age is {user.age} <br />
    </div>
  );

  return (
    <div>
      Create Web & Mobile App <br />
      with {rname} <br />
      Age is {age} <br />
    </div>
  );
}

export default App;