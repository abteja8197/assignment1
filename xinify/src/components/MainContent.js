import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../screens/Home';
import Registration from '../screens/Registration';
import CourseApplications from '../screens/CourseApplications';
import PaymentBatch from '../screens/PaymentBatch';
import Assignments from '../screens/Assignments';


const MainContent = () => {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/registration">
        <Registration />
      </Route>
      <Route path="/course-applications">
        <CourseApplications />
      </Route>
      <Route path="/payment-batch">
        <PaymentBatch />
      </Route>
      <Route path="/assignments-data-entry">
        <Assignments />
      </Route>
    </Switch>
  );
}

export default MainContent;
