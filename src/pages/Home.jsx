import BlogList from "../components/BlogList";
import { Header } from "../components/Header";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Blog from "./Blog";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BlogList/>
      <NewsLetter/>
    </>
  );
};
export default Home;
