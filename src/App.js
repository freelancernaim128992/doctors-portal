import { createContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Appointment from './components/AppointmentPage/Appointment/Appointment';
import AddDoctor from "./components/DashboardPage/AddDoctor/AddDoctor";
import AppointmentContainer from "./components/DashboardPage/AppointmentContainer/AppointmentContainer";
import Dashboard from "./components/DashboardPage/Dashboard/Dashboard";
import Patients from "./components/DashboardPage/Patients/Patients";
import Home from './components/HomePage/Home/Home';
import Login from "./components/LoginPage/Login/Login";
import PrivateRoute from "./components/LoginPage/PrivateRoute/PrivateRoute";
import NoMatch from "./components/NoMatch/NoMatch";
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard/appointment">
            <AppointmentContainer />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/patients">
            <Patients />
          </PrivateRoute>
          <Route path="/dashboard/addDoctor">
            <AddDoctor />
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
