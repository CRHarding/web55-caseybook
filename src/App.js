import './App.css';

const initialUser = {
  gender: "male",
  name: {
    first: "Casey",
    last: "Harding"
  },
  location: {
    state: "NY"
  },
  email: "C@C.com",
  login: {
    uuid: "blahblahblah",
    username: "CRHarding"
  },
  picture: {
    large: "https://downloadwallpaper.org/wp-content/uploads/2016/05/thor-wallpaper3.jpg"
  }
}

function App() {
  return (
    <div className="App">
      <h1>CASEYBOOK (It's like Facebook only made by some guy named Casey)</h1>
    </div>
  );
}

export default App;
