import React, { useMemo } from "react";
import "./Blog.css";
import { FaCalendar, FaArrowRight } from "react-icons/fa";
import { useI18n } from "../../utils/i18n";
import mein_logo from "../../assets/images/Mein_Logo.png";
const Blog = () => {
  const { t } = useI18n();

  const projects = useMemo(() => [
    {
      id: 1,
      title: t("blog_project_1_title"),
      description: t("blog_project_1_desc"),
      tags: ["React", "Node.js", "MongoDB", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
      link: "https://github.com/Nazrullah-Rezai",
      date: "Jan 2024",
    },
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
      id: 3,
      title: t("blog_project_3_title"),
      description: t("blog_project_3_desc"),
      tags: ["React", "Express", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=300&fit=crop",
      link: "https://github.com/Nazrullah-Rezai",
      date: "Nov 2023",
    },
    {
      id: 4,
      title: t("blog_project_4_title"),
      description: t("blog_project_4_desc"),
      tags: ["React", "Firebase", "WebSockets", "Authentication"],
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop",
      link: "https://github.com/Nazrullah-Rezai",
      date: "Oct 2023",
    },
    {
      id: 5,
      title: t("blog_project_5_title"),
      description: t("blog_project_5_desc"),
      tags: ["React", "API Integration", "CSS3", "Charts"],
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop",
      link: "https://github.com/Nazrullah-Rezai",
      date: "Sep 2023",
    },
    {
      id: 6,
      title: t("blog_project_6_title"),
      description: t("blog_project_6_desc"),
      tags: ["React", "Redux", "Local Storage", "UI/UX"],
      image: "https://images.unsplash.com/photo-1555617462-c2f7c33a33f0?w=400&h=300&fit=crop",
      link: "https://github.com/Nazrullah-Rezai",
      date: "Aug 2023",
    },
    {
      id: 7,
      title: t("blog_project_7_title"),
      description: t("blog_project_7_desc"),
      tags: ["C#", "REST API", "Visual Studio", "DevOps (Azure)", "Energy Monitoring", "MVVM"],
      image: "https://www.peaknx.com/pub/media/catalog/product/cache/45e809fc250b9d5ce968e39ce8b02ddd/p/e/peaknx_shop_youvi_bridge_solar_edge_01_de.jpg",
      link: "https://github.com/Nazrullah-Rezai",
      date: "2024",
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
