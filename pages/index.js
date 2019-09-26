import Link from "next/link";
import axios from "axios";


// const Index = () => {
//   return (
//
//   <div>
//
//     <h1>Our Index Page!!!</h1>
//     <Link href="/about"><a>About Page</a></Link>
//     <Link href="/contact"><a>Contact Page</a></Link>
//   </div>
//   )
// };

const Index = ({posts}) =>{
return(



  <div>
  <h1>The most intersting Posts ever!</h1>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
        <Link href={`/post?id=${post.id}`}><a>{post.title}</a></Link>
        </li>
      ))}
    </ul>
  </div>
  )
}

Index.getInitialProps = async() => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const {data} = res;
  return {posts:data}
}

export default Index;
