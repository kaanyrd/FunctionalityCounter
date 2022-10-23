import './App.css';
import Counter from './components/Counter/Counter';
import { ThemeContextProvider } from './context/ThemeContext';
import Container from './components/Counter/Container';


function App() {
  return (
    <div className='App'>
    <ThemeContextProvider>
      <Container>
        <Counter />
      </Container>
    </ThemeContextProvider>
    </div>
  );
}

export default App;
