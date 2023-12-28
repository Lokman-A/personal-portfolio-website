import { useRef } from "react";
import {
  useGsapProjectTitle,
  useGsapProjectLineForward,
  useGsapProjectTitleRef,
} from "../hooks/gsap";

const data = [
  {
    id: 1,
    number: "01",
    date: "01/01/22",
    title: "React todo",
    tools: "React - Tailwind CSS",
  },
  {
    id: 2,
    number: "02",
    date: "01/01/22",
    title: "Foodveres",
    tools: "React - Tailwind CSS",
  },
  {
    id: 3,
    number: "03",
    date: "01/01/22",
    title: "Immemorial",
    tools: "React - Tailwind CSS",
  },
  {
    id: 4,
    number: "04",
    date: "01/01/22",
    title: "Tech Alpha",
    tools: "React - Tailwind CSS",
  },
];

const Projects = () => {
  const projectRef = useRef(null);
  const projectTitleRef1 = useRef(null);
  const projectTitleRef2 = useRef(null);
  const projectArr = [projectTitleRef1, projectTitleRef2];
  useGsapProjectTitle(projectArr, projectRef);

  const projectLineRef = useRef([]);
  useGsapProjectLineForward(projectLineRef.current, projectRef);

  const projectTitleRef = useRef([]);
  useGsapProjectTitleRef(projectTitleRef, projectRef);

  return (
    <div className="projects-section" ref={projectRef}>
      <div className="titles">
        <span ref={projectTitleRef1}>Selected works (2022-2023)</span>
        <span ref={projectTitleRef2}>Projects</span>
      </div>

      <div className="project-list-wrapper">
        {data.map((project, i) => (
          <div className="project-wrapper" key={project.id}>
            <div className="project-item">
              <div className="project-titles">
                <span>{project.number}</span>
                <h2 ref={(el) => (projectTitleRef.current[i] = el)}>
                  {project.title}
                </h2>
              </div>
              <div className="project-details">
                <span>{project.date}</span>
                <span>{" " + project.tools}</span>
              </div>
            </div>

            <hr ref={(el) => (projectLineRef.current[i] = el)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
