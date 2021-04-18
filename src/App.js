import './App.css';
import SearchBar from './components/search_bar';

function App() {
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

window.addEventListener('click', function(e) {
  const phone = document.getElementById("phone");
  const dropdown = document.getElementById("country-box");
  if (!phone.contains(e.target) && !dropdown.contains(e.target)) {
    document.getElementById('country-container').style.display = 'none';
  }
})

export default App;
