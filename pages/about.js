import Link from "next/link";
import Navbar from "../components/navbar"

const AboutPage = () => {

  return (
    <div>
      <Navbar />
      <h1>This is the About page!!!</h1>
      <Link href="/"><a>go back </a></Link>
    </div>
  )

};
export default AboutPage;
