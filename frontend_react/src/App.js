import "./App.css";
import { Container, Button } from "react-bootstrap";
import { Route } from "react-router-dom";
import Profile from "./Pages/user/Profile";
import Join from "./Pages/user/Join";
import Header from "./Components/Header";
import Login from "./Components/User/Login";
import Home from "";
// import Header from
function App() {
  return (
    <>
      <h1>app.js화면</h1>
      <Container>
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/Login" exact component={Login}></Route>
        <Route path="/Join" exact component={Join}></Route>
        <Route path="/Profile" exact component={Profile}></Route>
      </Container>
    </>
  );
}

export default App;
