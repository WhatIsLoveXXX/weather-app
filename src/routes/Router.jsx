import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main/Main";

export const Router = () => (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
);
