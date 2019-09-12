import Link from "next/link";


const Index = () => {
  return (

  <div>
    
    <h1>Our Index Page!!!</h1>
    <Link href="/about"><a>About Page</a></Link>
    <Link href="/contact"><a>Contact Page</a></Link>
  </div>
  )
};

export default Index;
