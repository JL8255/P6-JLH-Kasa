import Footer from "./components/Footer";
import Router from "./components/Router"
import styles from './style/App.module.scss';

function App() {
  return (
    <div>
      <div className={styles.main}>
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
