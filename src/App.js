import classes from "./app.module.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";

const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Router />
      </div>
    </BrowserRouter>
  );
};

export default App;
