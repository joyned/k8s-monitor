import { Outlet } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import PushNotification from './Components/PushNotification/PushNotification';

function App() {
  return (
    <div className="App">
      <PushNotification />
      <Header />
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default App;
