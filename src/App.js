import SearchBar from "./components/SearchBar";

const App = () => {
    const handleSubmit = (term) => {
        console.log(`Show me please the ${term}`)
    }

  return (
    <div>
        <SearchBar onSubmit={handleSubmit}/>
    </div>
  )
};

export default App;
