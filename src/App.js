import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
<header>
  <h1>Search for any word</h1>
</header>
    
    <main>
      <Dictionary defaultKeyword="forest" />
    </main>
<hr />
    <footer>Open-source on <a href="https://github.com/chandn33/dictionary-app" target="_blank" rel="noopener noreferrer">GitHub</a> | Project designed by Chandni Patel🌻</footer>
    </div>
    </div>
  );
  }
