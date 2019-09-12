import Link from "next/link";

const Navbar = () => {
  const navStyle = {
    display:"flex",
    justifyContent: "space-between",
    background:"grey",
    padding: "1rem"


  }
  return (
  <div style={navStyle}>
    <Link href="/about"><a>About Page</a></Link>
    <Link href="/"><a>HOME Page</a></Link>
    <Link href="/contact"><a>Contact Page</a></Link>
  </div>
  )
};

export default Navbar;
