import { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaUser, FaArrowRight } from "react-icons/fa";
import Loader from "../components/loader";
// import Swal from "sweetalert2";

const url = "https://digital-website-1.onrender.com";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [commentValue, setCommentValue] = useState("");
  // check if user is signed in
  const [signedIn, setSignedIn] = useState(false);
  // get user informations from session storage
  const [userinfo, setUserinfo] = useState({});

  const viewComments = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const showAlert = (message) => {
    // Swal.fire({
    //   title: message,
    //   icon: type,
    //   customClass: {
    //     container: "my-swal-container", // Add your custom class for styling
    //   },
    // });
    alert(message);
  };

  const addComment = async (blogId) => {
    if (sessionStorage.getItem("signedIn") !== "true") {
      showAlert("Please sign in to add a comment", "error");
      return;
    }
    if (!commentValue) {
      showAlert("Comment cannot be empty", "error");
      return;
    }

    try {
      await axios.post(`${url}/comment/${blogId}`, {
        comment: {
          comment: commentValue,
          user: userinfo.name,
        },
      });
      showAlert("Comment added successfully", "success");
      setCommentValue("");
      fetchBlogs();
    } catch (error) {
      console.log(error);
      showAlert("Error adding comment. Please try again.", "error");
    }
  };

  // const fetchBlogs = () => {
  //   setLoading(true);
  //   axios
  //     .get("/post/blogs")
  //     .then((res) => {
  //       setBlogs(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //       showAlert("Error fetching blogs. Please try again.", "error");
  //     });
  // };

  const fetchBlogs = () => {
    setLoading(true);
    axios
      .get(`${url}/post/blogs`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setBlogs(res.data);
        } else {
          console.error("Invalid data structure:", res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        showAlert("Error fetching blogs. Please try again.", "error");
      });
  };

  useEffect(() => {
    fetchBlogs();

    if (sessionStorage.getItem("signedIn") === "true") {
      setSignedIn(true);
      setUserinfo(JSON.parse(sessionStorage.getItem("user")));
    }
  }, []);

  return (
    <div className="blog">
      <div className="main">
        {" "}
        {loading && <Loader />}{" "}
        {blogs
          .slice()
          .reverse()
          .map((blog, index) => (
            <div key={blog._id}>
              <h3> {blog.title} </h3>{" "}
              <p className="desc"> {blog.description} </p>{" "}
              <p className="date">
                {" "}
                {new Date(blog.createdAt).toLocaleString()}{" "}
              </p>{" "}
              <div className="icons">
                <p
                  className="comments-number"
                  onClick={() => viewComments(index)}
                >
                  {blog.comments.length}
                  comments{" "}
                </p>{" "}
                <FaHeart className="fa-heart" />
              </div>{" "}
              <div className="add-comment-form">
                <input
                  type="text"
                  placeholder="Add a comment"
                  className="comment-input"
                  value={commentValue}
                  onChange={(e) => setCommentValue(e.target.value)}
                  // check if user is signed in if not disabled
                  disabled={!signedIn}
                />{" "}
                <FaArrowRight
                  className="fa-arrow-right"
                  disabled={!signedIn}
                  onClick={() => addComment(blog._id, index)}
                />{" "}
              </div>{" "}
              <div
                className={`comments ${activeIndex === index ? "active" : ""}`}
              >
                {blog.comments.map((comment) => (
                  <div className="comment" key={comment._id}>
                    <div className="user">
                      <FaUser className="fa-user" />
                      <p className="username"> {comment.user} </p>{" "}
                    </div>{" "}
                    <p className="comment-text">
                      {" "}
                      {comment.comment}{" "}
                      <span className="date">
                        {" "}
                        {new Date(comment.createdAt).toLocaleString()}{" "}
                      </span>{" "}
                    </p>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
              <div className="line"> </div>{" "}
            </div>
          ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Blog;
