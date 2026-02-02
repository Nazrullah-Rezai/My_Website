import React, { useMemo } from "react";
import "./Blog.css";
import { FaCalendar, FaArrowRight } from "react-icons/fa";
import { useI18n } from "../../utils/i18n";
import mein_logo from "../../assets/images/Mein_Logo.png";
const Blog = () => {
  const { t } = useI18n();

  const projects = useMemo(() => [
  
    {
      id: 2,
      title: t("blog_project_2_title"),
      description: t("blog_project_2_desc"),
      tags: ["React", "Framer Motion", "CSS3", "HTML5", "Responsive"],
      image: mein_logo,
      link: "https://github.com/Nazrullah-Rezai/My_Website",
      date: "Jan 2026",
    },

    {
      id: 7,
      title: t("blog_project_7_title"),
      description: t("blog_project_7_desc"),
      tags: ["C#", "REST API", "Visual Studio", "DevOps (Azure)", "Energy Monitoring", "MVVM"],
      image: "https://www.peaknx.com/pub/media/catalog/product/cache/45e809fc250b9d5ce968e39ce8b02ddd/p/e/peaknx_shop_youvi_bridge_solar_edge_01_de.jpg",
      link: "https://github.com/Nazrullah-Rezai",
      date: "April 2025",
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
                <img src={project.image} alt={project.title} loading="lazy" />
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
