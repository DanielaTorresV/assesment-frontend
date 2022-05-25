import HeaderHome from '../components/Home/HeaderHome';
import ProductCard from '../components/Home/ProductCard';

const Home = () => {
  return (
    <div className="home">
      <HeaderHome className="headerHome" />
      <div className="containerHome">
        <ProductCard />
      </div>
    </div>
  );
};

export default Home;
