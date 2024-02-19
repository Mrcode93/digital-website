import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
// import comments icon and  likes
import { FaComments, FaThumbsUp } from "react-icons/fa";
import Loader from "../components/loader";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/post/blogs")
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Removed 'blogs' from the dependency array since it's causing an infinite loop

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="blog">
      <Header />
      <NavBar />
      <div className="main">
        {blogs.reverse().map((blog) => (
          <div key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            {/* Coordinate the time of the blog */}
            <p>{new Date(blog.createdAt).toLocaleString()}</p>

            {/* comments and likes */}
            <div className="icons">
              <FaComments />
              <FaThumbsUp />
            </div>
            <div className="line"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
