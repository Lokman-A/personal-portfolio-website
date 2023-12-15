import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header container">
      <div className="row">
        <h2>
          MD. Lo<span>k</span>man
        </h2>
        <h2>
          Ha<span>k</span>im
        </h2>
      </div>
      <hr />

      <div className="row">
        <span>Full Stack Developer</span>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
          View Resume
        </a>
        <a href="mailto:hmlokman40@gamil.com" target="_blank" rel="noreferrer">
          Send Email
        </a>
        <Link to="/contact">Contact Me</Link>
      </div>
      <hr />
      <div className="row">
        <Link to="/about" className="box about">
          <span> About</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2>Aspiring</h2>
        <Link to="/projects" className="box contacts">
          <span>Projects</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
      </div>
      <hr />
      <div className="row">
        <h2>
          Full <span>S</span>tack D<span>e</span>veloper
        </h2>
      </div>
      <hr />
      <div className="row">
        <h2>Based </h2>
        <Link to="/skills" className="box skills">
          <span>Skills</span>
          <BsArrowUpRightCircle />
        </Link>
        <h2>In Bangladesh</h2>
      </div>
      <hr />
    </div>
  );
};

export default Header;
