import './App.css';
import NavBar from './components/NavBar';
import ContextThemeProvider from './components/ContextThemeProvider';
import ContextDva from './components/ContextDva';

function App() {
  return (
    <ContextThemeProvider>
      <ContextDva>
        <NavBar/>
      </ContextDva>   
    </ContextThemeProvider>    
  );
}

export default App;
