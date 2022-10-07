import Announcement from "./Announcement";
import Filter from "./Filter";
import Hero from "./Hero";
import MostPopularList from "./MostPopularList";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Filter />
      <Hero />
      <MostPopularList />
    </div>
  );
}

export default App;
