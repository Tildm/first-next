import Link from "next/link";
import Navbar from "../components/navbar"

const ContactPage = () => {
  return (
<div>
  <Navbar />
  <h1>Contact page!!!</h1>
  <p>Never contact us!</p>
  <Link href="/"><a>go Back</a></Link>
</div>
      )

};
export default ContactPage;
