import Link from "next/link";
import Navbar from "../components/navbar"

const Index = () => {
  return (

  <div>
    <Navbar />
    <h1>Our Index Page!!!</h1>
    <Link href="/about"><a>About Page</a></Link>
    <Link href="/contact"><a>Contact Page</a></Link>
  </div>
  )
};

export default Index;
