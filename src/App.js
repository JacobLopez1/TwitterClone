import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

// Hosted at https://twitter-clone-90fb9.web.app

function App() {
  return (
    // BEM
    <div className="app">
        <Sidebar />
        <Feed />
        <Widgets />
    </div>
  );
}

export default App;
