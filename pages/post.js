import axios from "axios";

const Post = ({comments, id}) => (
  <div>
  <ul>
  <h1>Comments for post #{id}</h1>
   {comments.map(comment =>(
     <li key={comment.id}>
      <p>{comment.email}</p>
      {comment.body}


      </li>

        ))}
        </ul>
    </div>
);

Post.getInitialProps = async({query})=> {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
  const {data} = res;
  return  {...query, comments: data}
}


export default Post;
