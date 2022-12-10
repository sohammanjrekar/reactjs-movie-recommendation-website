import Movie from "./Movie";
import Navbar1 from "./Navbar";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <div className="container">
      
        <Search />
        <Movie />
      </div>
    </>
  );
};

export default Home;
