import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

function App() {
  return(
    <div className="wbody">
      <Navbar />
      <Hero />
      <Cards />
    </div>
  )
}
  
export default App;

/*
const jokesElement = Prac.map(jokes => {
    return <Jokes joke={jokes.joke} punchline={jokes.punchline}/>
  })
  return(
    <div>
      {jokesElement}
    </div>
  )
*/