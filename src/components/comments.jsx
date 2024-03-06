import axios from "axios";
import { useEffect, useState } from "react";
const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/comment").then((res) => {
      setComments(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="comments">
      {comments.map((comment) => {
        <div className="comment">
          <p>{comment.comment}</p>
          <p>{comment.user}</p>
        </div>;
      })}
    </div>
  );
};

export default Comments;
