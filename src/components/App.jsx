import classes from "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
