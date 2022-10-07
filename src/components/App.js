import Announcement from "./Announcement";
import Filter from "./Filter";
import Hero from "./Hero";
import MostPopularList from "./MostPopularList";
import Navbar from "./Navbar";
import Product from "./Product";
import ProductList from "./ProductList";

function App() {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Filter />
      <Hero />
      <ProductList />
    </div>
  );
}

export default App;
