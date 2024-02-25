import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Viewport from './components/Viewport/Viewport';
import useSidebarStore from './components/store/store';

function App() {
  const { isOpen, toggleSidebar } = useSidebarStore();
  return (
    <div className="App">
      <Navbar/>
      <div className='w-full'>
      {isOpen && (
      <Sidebar/>
      )}
      <Viewport/>
      </div>
    </div>
  );
}

export default App;
