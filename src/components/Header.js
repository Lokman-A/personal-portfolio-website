import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useRef } from "react";
import {
  useGsapLinkDownFall,
  useGsapLineForward,
  useGsapTextUpward,
  useGsapBoxScaling,
} from "../hooks/gsap";

const Header = () => {
  const link1 = useRef(null);
  const link2 = useRef(null);
  const link3 = useRef(null);
  const link4 = useRef(null);
  const linkArr = [link1, link2, link3, link4];
  useGsapLinkDownFall(linkArr);

  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);
  const line5 = useRef(null);
  const lineArr = [line1, line2, line3, line4, line5];
  useGsapLineForward(lineArr);

  const headingText1 = useRef(null);
  const headingText2 = useRef(null);
  const headingText3 = useRef(null);
  const headingText4 = useRef(null);
  const headingText5 = useRef(null);
  const headingText6 = useRef(null);
  const headingArr = [
    headingText1,
    headingText2,
    headingText3,
    headingText4,
    headingText5,
    headingText6,
  ];
  useGsapTextUpward(headingArr);

  const boxScale1 = useRef(null);
  const boxScale2 = useRef(null);
  const boxScale3 = useRef(null);
  const boxScaleArr = [boxScale1, boxScale2, boxScale3];
  useGsapBoxScaling(boxScaleArr);

  return (
    <div className="header container">
      <div className="row">
        <h2 ref={headingText1}>
          MD. Lo<span>k</span>man
        </h2>
        <h2 ref={headingText2}>
          Ha<span>k</span>im
        </h2>
      </div>
      <hr ref={line1} />

      <div className="row">
        <span ref={link1}>Full Stack Developer</span>
        <a
          href="https://www.google.com/"
          target="_blank"
          rel="noreferrer"
          ref={link2}
        >
          View Resume
        </a>
        <a
          href="mailto:hmlokman40@gamil.com"
          target="_blank"
          rel="noreferrer"
          ref={link3}
        >
          Send Email
        </a>
        <Link to="/contact" ref={link4}>
          Contact Me
        </Link>
      </div>
      <hr ref={line2} />
      <div className="row">
        <Link to="/about" className="box about" ref={boxScale1}>
          <span> About</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2 ref={headingText3}>Aspiring</h2>
        <Link to="/projects" className="box projects" ref={boxScale2}>
          <span>Projects</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
      </div>
      <hr ref={line3} />
      <div className="row">
        <h2 ref={headingText4}>
          Full <span>S</span>tack D<span>e</span>veloper
        </h2>
      </div>
      <hr ref={line4} />
      <div className="row">
        <h2 ref={headingText5}>Based </h2>
        <Link to="/skills" className="box skills" ref={boxScale3}>
          <span>Skills</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2 ref={headingText6}>In Bangladesh</h2>
      </div>
      <hr ref={line5} />
    </div>
  );
};

export default Header;
