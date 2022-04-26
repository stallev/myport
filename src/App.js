import { Routes, Route } from 'react-router-dom';
import { RoutePath } from './common/constants/RoutePath';
import { Landing, Work, WorksList } from './pages';
import Container from './common/components/Container';

import '../src/common/styles/global.scss';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Container>
        <header className={styles['App-header']}>
          Hello, my portfolio!
        </header>
        <Routes>
          <Route path={RoutePath.Landing} element={<Landing />} />
          <Route path={RoutePath.WorksList} element={<WorksList />} />
          <Route path={RoutePath.Work} element={<Work />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
