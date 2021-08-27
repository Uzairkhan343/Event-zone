import Home from "./container/home/home";
import "./assets/style/style.css";
import Next from "./container/next-page/next-page";
import { Route, Switch } from "react-router-dom";
import Contact from "./container/contact/contact";
import Layout from "./layout/layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/next" component={Next} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
};
export default App;
