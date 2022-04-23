import '../src/common/styles/global.scss';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        Hello, my portfolio!
      </header>
    </div>
  );
}

export default App;
