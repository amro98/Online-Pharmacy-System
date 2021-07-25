import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faUserMd,
  faTruck,
  faCalendarAlt,
  faUser,
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
  faClinicMedical,
  faBell
} from "@fortawesome/free-solid-svg-icons";

import Home from "./Homee/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./User/Login";
import User from "./User/User";
import Register from "./User/Register";
import UserProfile from "./User/UserProfile";
import LoginPh from "./Pharmacy/LoginPh";
import SignupPh from './Pharmacy/SignupPh'
import Pharmacy from "./Pharmacy/Pharmacy";
import PharmacyProfile from "./Pharmacy/PharmacyProfile";
import OrderHistory from "./User/OrderHistory";
import Notification from "./Pharmacy/Notification";
import AddMedicine from "./Pharmacy/AddMedicine";
import ListMedicines from "./Pharmacy/ListMedicines";
import UserInfoPh from "./Pharmacy/UserInfoPh"



library.add(
  fab,
  faGlobe,
  faUserMd,
  faTruck,
  faCalendarAlt,
  faUser,
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
  faClinicMedical,
  faBell
);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>

        <Route path="/login" component={Login}></Route>

        <Route path="/user" component={User}></Route>

        <Route path="/register" component={Register}></Route>

        <Route path="/userprofile" component={UserProfile}></Route>

        <Route path="/orderhistory" component={OrderHistory}></Route>

        <Route path="/loginph" component={LoginPh}></Route>

        <Route path="/signupph" component={SignupPh}></Route>

        <Route path="/pharmacy" component={Pharmacy}></Route>

        <Route path="/pharmacyprofile" component={PharmacyProfile}></Route>

        <Route path="/notification" component={Notification}></Route>

        <Route path="/addmedicine" component={AddMedicine}></Route>

        <Route path="/listmedicines" component={ListMedicines}></Route>

        <Route path="/userinfoph/:owner"
        render={props=>(
        <UserInfoPh {...props}/>
        )}></Route>

   
        

      </Switch>
    </BrowserRouter>

  );
}

export default App;
