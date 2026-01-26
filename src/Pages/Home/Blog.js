import React, { useMemo } from "react";
import "./Blog.css";
import { FaCalendar, FaArrowRight } from "react-icons/fa";
import { useI18n } from "../../utils/i18n";

const Blog = () => {
  const { t } = useI18n();

  const projects = useMemo(() => [
    {
      id: 1,
      title: t("blog_project_1_title"),
      description: t("blog_project_1_desc"),
      tags: ["React", "Node.js", "MongoDB", "Responsive Design"],
      image: "https://via.placeholder.com/400x300?text=TaxGo",
      link: "#",
      date: "Jan 2024",
    },
    {
      id: 2,
      title: t("blog_project_2_title"),
      description: t("blog_project_2_desc"),
      tags: ["React", "CSS3", "Animations", "Responsive"],
      image: "https://via.placeholder.com/400x300?text=Portfolio",
      link: "#",
      date: "Dec 2023",
    },
    {
      id: 3,
      title: t("blog_project_3_title"),
      description: t("blog_project_3_desc"),
      tags: ["React", "Express", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/400x300?text=E-Commerce",
      link: "#",
      date: "Nov 2023",
    },
    {
      id: 4,
      title: t("blog_project_4_title"),
      description: t("blog_project_4_desc"),
      tags: ["React", "Firebase", "WebSockets", "Authentication"],
      image: "https://via.placeholder.com/400x300?text=Chat+App",
      link: "#",
      date: "Oct 2023",
    },
    {
      id: 5,
      title: t("blog_project_5_title"),
      description: t("blog_project_5_desc"),
      tags: ["React", "API Integration", "CSS3", "Charts"],
      image: "https://via.placeholder.com/400x300?text=Weather",
      link: "#",
      date: "Sep 2023",
    },
    {
      id: 6,
      title: t("blog_project_6_title"),
      description: t("blog_project_6_desc"),
      tags: ["React", "Redux", "Local Storage", "UI/UX"],
      image: "https://via.placeholder.com/400x300?text=Task+Manager",
      link: "#",
      date: "Aug 2023",
    },
  ], [t]);

  return (
    <section className="Blog" id="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h1>{t("blog_title")}</h1>
          <p className="subtitle">{t("blog_subtitle")}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="project-link">
                    <FaArrowRight />
                    {t("blog_view_project")}
                  </a>
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className="project-date">
                    <FaCalendar /> {project.date}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
