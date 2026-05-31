"use client";

import React from "react";
import Image from "next/image";
import Header from "./components/Header";
import HeroParticles from "./components/HeroParticles";

export default function Home() {
  const currentYear = new Date().getFullYear();

  // Full-Stack and Mobile Featured Projects in Japanese IT Industry Standard
  const featuredProjects = [
    {
      title: "Wan-Life",
      category: "React Native Expo App & Next.js Platform",
      description: "A two-sided pet-tech marketplace and health tracking digital passport for dog owners and businesses.",
      icon: "fas fa-dog",
      period: "2023/08 - 2024/05",
      role: "Lead UI/UX Designer & Mobile Developer (開発リーダー)",
      team: "チーム規模: 5名 (開発: 2名, 企画・営業: 3名)",
      tech: ["React Native", "Expo", "Next.js", "TypeScript", "PostgreSQL", "AWS S3"],
      phases: {
        req: true,   // 要件定義
        basic: true, // 基本設計
        detail: true,// 詳細設計
        impl: true,  // 実装
        test: true,  // テスト
        ops: true    // 保守・運用
      },
      achievements: [
        "B2C Pet Passport: Digital vaccine tracker (OCR scan parsing), weight charts, and walk logger.",
        "B2B Store Hub: Interactive business profiles with facility media sliders and service menus.",
        "Designed clean custom HSL themes (Terracotta & Teal) prioritizing friendly, accessible UI/UX."
      ],
      link: "https://wan-life.app/"
    },
    {
      title: "Sajhalekh News Portal",
      category: "Django Web Application",
      description: "A responsive dynamic news aggregator and reader platform optimized for local audiences.",
      icon: "fas fa-newspaper",
      period: "2021/11 - 2022/02",
      role: "Full-Stack Developer (主開発者)",
      team: "チーム規模: 1名 (自主開発)",
      tech: ["Python", "Django", "PostgreSQL", "Ubuntu", "Nginx", "Gunicorn", "AWS EC2"],
      phases: {
        req: true,
        basic: true,
        detail: true,
        impl: true,
        test: true,
        ops: false
      },
      achievements: [
        "Architected complete backend structures, custom admin dashboards, and database models.",
        "Developed full-screen mobile-optimized interfaces yielding seamless reading performance.",
        "Deployed using a highly secure stack on AWS EC2, behind an Nginx reverse proxy with SSL."
      ],
      link: "https://sajhalekh.com/"
    },
    {
      title: "Online Reservation System",
      category: "Web & Booking System",
      description: "A robust real-time reservation and scheduling portal for businesses.",
      icon: "fas fa-calendar-alt",
      period: "2023/04 - 2023/07",
      role: "Lead Developer (主開発者)",
      team: "チーム規模: 2名 (開発: 1名, デザイナー: 1名)",
      tech: ["Python", "Flask", "PostgreSQL", "Nginx", "Ubuntu", "AWS EC2/RDS"],
      phases: {
        req: true,
        basic: true,
        detail: true,
        impl: true,
        test: true,
        ops: true
      },
      achievements: [
        "Designed and implemented booking slot verification algorithms to prevent double-booking.",
        "Configured relational database schemas (PostgreSQL) optimized for rapid query speeds.",
        "Configured custom server maintenance schedules and database automated backups."
      ]
    }
  ];

  // Visual Design Samples
  const designSamples = [
    { name: "Result Publishing Portal", src: "/images/project-1.png" },
    { name: "Ecommerce Interface", src: "/images/project-2.png" },
    { name: "News Portal Layout", src: "/images/project-3.png" },
    { name: "Education Site Template", src: "/images/project-4.png" },
    { name: "Corporate Web Design", src: "/images/project-5.png" },
    { name: "Creative Brand Portal", src: "/images/project-6.png" },
    { name: "Geometric Logo Design", src: "/images/project-7.png" },
    { name: "Corporate Logo Branding", src: "/images/project-8.png" },
    { name: "Creative Identity Logo", src: "/images/project-9.png" },
    { name: "Marketing Banner Design", src: "/images/project-10.jpg" },
    { name: "Promotional Banner Mockup", src: "/images/project-11.jpeg" },
    { name: "Sleek Business Logo", src: "/images/project-12.png" },
  ];

  return (
    <>
      <Header />
      
      <div className="wrap">
        {/* ===== main catch area ===== */}
        <section id="particles-js" className="main-catch" style={{ position: "relative" }}>
          <HeroParticles />
          <div className="sanjok_catch" style={{ zIndex: 1, pointerEvents: "none" }}>
            <div className="catch-wrap">
              <div className="catch-image" style={{ pointerEvents: "auto" }}>
                <Image
                  src="/images/top1.png"
                  alt="Sanjok Pandey Catch"
                  width={280}
                  height={280}
                  priority
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="catch-contain" style={{ pointerEvents: "auto" }}>
                <h1>
                  Hi, I'm<br />
                  <span>SANJOK PANDEY</span>
                </h1>
                <h2>Web Designer & Front-End Developer | Next.js & React Native</h2>
              </div>
            </div>
          </div>
        </section>

        {/* ===== About section ===== */}
        <section id="san-about" className="cb-pt-l cb-pb-l">
          <div className="cb-container">
            <div className="cb-row">
              <div className="cl-6 cl-md-12 align-self-center">
                <div className="title-main">
                  <strong className="filltext">PROFESSIONAL</strong>
                  <small style={{ marginLeft: "8px" }}>BIOGRAPHY</small>
                  <h2>
                    ABOUT<span> ME</span>
                  </h2>
                </div>
              </div>
              <div className="cl-6 cl-md-12 align-self-center">
                <div className="title-info">
                  <p>Web Designer & Front-end Developer focused on creating clean, responsive, and interactive software!</p>
                </div>
              </div>
            </div>
            <div className="cb-row san-contain-wrap">
              <div className="about-left cl-8 cl-m-12">
                <p>
                  I am a passionate Web Designer and Front-end & Mobile Developer with a proven record of building high-performance 
                  responsive web platforms and cross-platform mobile apps (React Native, Next.js, Django). I combine user-centric 
                  UI/UX design principles with robust full-stack development skills (PostgreSQL, Nginx, AWS, Docker) to engineer 
                  premium digital products.
                  <br /><br />
                  Graduating from Chiba Mode Business College (IT Business Course) in Japan, I have strong cross-cultural 
                  communication, business manners, and analytical skills. I am self-motivated, adapt rapidly to new frameworks, 
                  and excel at steering projects from conceptual prototypes to production-ready deployments.
                </p>

                <div className="hobbies">
                  <h2>Hobbies & Interests</h2>
                  <ul>
                    <li>
                      <i className="fas fa-palette"></i>
                      <p>Drawing</p>
                    </li>
                    <li>
                      <i className="fas fa-blog"></i>
                      <p>Blogging</p>
                    </li>
                    <li>
                      <i className="fas fa-camera"></i>
                      <p>Photography</p>
                    </li>
                    <li>
                      <i className="fad fa-plane-departure"></i>
                      <p>Travelling</p>
                    </li>
                    <li>
                      <i className="fas fa-gamepad"></i>
                      <p>Games</p>
                    </li>
                    <li>
                      <i className="fas fa-music"></i>
                      <p>Music</p>
                    </li>
                  </ul>
                </div>
                
                <div className="languages">
                  <h2>Languages & Competencies</h2>
                  <ul className="languages-card">
                    <li>JAPANESE (JLPT N2 - Business Level)</li>
                    <li>ENGLISH (TOEIC 600 - Business Level)</li>
                    <li>NEPALI (Native)</li>
                    <li>HINDI (Fluent)</li>
                  </ul>
                </div>
              </div>

              <div className="about-right cl-4 cl-m-12">
                <div className="about-right-san">
                  <img src="/images/san.jpeg" alt="Sanjok Portrait" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Skills section ===== */}
        <section id="my-education" className="cb-pt-l cb-pb-l">
          <div className="cb-container">
            <div className="cb-row">
              <div className="cl-6 cl-md-12 align-self-center">
                <div className="title-main">
                  <strong className="filltext">SKILLS &</strong>
                  <small style={{ marginLeft: "8px" }}>ACHIEVEMENTS</small>
                  <h2>EDUCATION</h2>
                </div>
              </div>
              <div className="cl-6 cl-md-12 align-self-center">
                <div className="title-info">
                  <p>Learn continually. There's always one more thing to understand.</p>
                </div>
              </div>
            </div>
            
            <ul className="cb-row my-education">
              <li className="cl-3 cl-m-6 cl-md-6 cl-s-12">
                <div className="edu-card">
                  <i className="fas fa-graduation-cap"></i>
                  <time>2021 - 2023</time>
                  <div className="degree">IT Business Course</div>
                  <div className="school-name">Chiba Mode Business College, Japan</div>
                </div>
              </li>
              <li className="cl-3 cl-m-6 cl-md-6 cl-s-12">
                <div className="edu-card">
                  <i className="fas fa-graduation-cap"></i>
                  <time>2019 - 2021</time>
                  <div className="degree">Japanese Language Dept.</div>
                  <div className="school-name">Anabuki Medical College, Japan</div>
                </div>
              </li>
              <li className="cl-3 cl-m-6 cl-md-6 cl-s-12">
                <div className="edu-card">
                  <i className="fas fa-graduation-cap"></i>
                  <time>2012 - 2017</time>
                  <div className="degree">Bachelor of Computer Applications</div>
                  <div className="school-name">Lagrandee International College, Nepal</div>
                </div>
              </li>
              <li className="cl-3 cl-m-6 cl-md-6 cl-s-12">
                <div className="edu-card">
                  <i className="fas fa-graduation-cap"></i>
                  <time>2010 - 2012</time>
                  <div className="degree">Intermediate (+2 Science)</div>
                  <div className="school-name">Galkot Higher Secondary School, Nepal</div>
                </div>
              </li>
            </ul>

            <div className="personal-skill cb-pt-m">
              <div className="cb-row skill">
                <div className="cl-4 cl-md-12">
                  <h3 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--first-color)", marginBottom: "1rem", fontFamily: "Raleway, sans-serif" }}>
                    TECHNICAL SKILLS
                  </h3>
                  <div className="skill-card-txt" style={{ paddingRight: "1rem" }}>
                    <p>
                      Having worked as a lead developer on news readers, reservation platforms, and custom mobile apps, 
                      I maintain a highly practical skillset across modern frontend frameworks, mobile deployment pipelines, 
                      and cloud infrastructure.
                    </p>
                  </div>
                </div>
                <div className="cl-8 cl-md-12">
                  <h4 className="tools" style={{ marginTop: 0 }}>Core Technologies</h4>
                  <ul className="skill-card">
                    <li>React Native & Expo</li>
                    <li>Next.js & React.js</li>
                    <li>TypeScript & JavaScript</li>
                    <li>HTML5 & CSS3/SASS</li>
                    <li>Python (Django / Flask)</li>
                    <li>PHP</li>
                    <li>WordPress</li>
                    <li>PostgreSQL / MySQL / SQL Server</li>
                    <li>AWS (EC2, RDS, S3)</li>
                    <li>Linux / Nginx / Gunicorn</li>
                  </ul>
                  <p className="tools">Designing Tools</p>
                  <ul className="skill-card">
                    <li>Figma</li>
                    <li>Adobe XD</li>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Premiere Pro</li>
                    <li>After Effects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Featured Projects Section ===== */}
        <section id="featured-projects" className="cb-pt-l cb-pb-l" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="cb-container">
            <div className="cb-row">
              <div className="cl-6 cl-md-12 align-self-center">
                <div className="title-main">
                  <strong className="filltext">PROJECTS</strong>
                  <small style={{ marginLeft: "8px" }}>CASE STUDIES</small>
                  <h2>DEVELOPMENTS</h2>
                </div>
              </div>
              <div className="cl-6 cl-md-12 align-self-center">
                <div className="title-info">
                  <p>A detail of full-stack systems and cross-platform mobile apps mapped to Japanese IT engineering standards.</p>
                </div>
              </div>
            </div>

            <div className="cb-row" style={{ marginTop: "3rem", gap: "24px", justifyContent: "center" }}>
              {featuredProjects.map((proj, idx) => (
                <div key={idx} className="cl-4 cl-md-12 glass-panel" style={{ padding: "2.5rem 1.8rem", display: "flex", flexDirection: "column", flex: "1 1 350px", maxWidth: "420px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                    <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(14, 165, 233, 0.1)", border: "1px solid rgba(14, 165, 233, 0.2)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center" }}>
                      <i className={`${proj.icon}`} style={{ fontSize: "1.5rem", color: "var(--first-color)" }}></i>
                    </div>
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", fontWeight: "bold", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "5px" }}>
                        Live Demo <i className="fas fa-external-link-alt" style={{ fontSize: "11px" }}></i>
                      </a>
                    )}
                  </div>
                  <h3 style={{ fontSize: "1.4rem", color: "var(--text-primary)", marginBottom: "0.25rem", fontFamily: "Raleway, sans-serif" }}>{proj.title}</h3>
                  <span style={{ fontSize: "12px", color: "var(--success-color)", fontWeight: "600", textTransform: "uppercase", marginBottom: "1rem", display: "inline-block" }}>{proj.category}</span>
                  
                  {/* Japanese Shokumu Keireki Info */}
                  <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "12px", borderRadius: "8px", fontSize: "12px", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
                    <div style={{ marginBottom: "4px" }}><strong>期間:</strong> {proj.period}</div>
                    <div style={{ marginBottom: "4px" }}><strong>役割:</strong> {proj.role}</div>
                    <div style={{ marginBottom: "8px" }}><strong>規模:</strong> {proj.team}</div>
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "8px" }}>
                      <strong>担当工程 (SDLC Phases):</strong>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                        <span style={{ color: proj.phases.req ? "var(--success-color)" : "rgba(255,255,255,0.2)" }}>要件定義{proj.phases.req ? "●" : "－"}</span>
                        <span style={{ color: proj.phases.basic ? "var(--success-color)" : "rgba(255,255,255,0.2)" }}>基本設計{proj.phases.basic ? "●" : "－"}</span>
                        <span style={{ color: proj.phases.detail ? "var(--success-color)" : "rgba(255,255,255,0.2)" }}>詳細設計{proj.phases.detail ? "●" : "－"}</span>
                        <span style={{ color: proj.phases.impl ? "var(--success-color)" : "rgba(255,255,255,0.2)" }}>実装{proj.phases.impl ? "●" : "－"}</span>
                        <span style={{ color: proj.phases.test ? "var(--success-color)" : "rgba(255,255,255,0.2)" }}>テスト{proj.phases.test ? "●" : "－"}</span>
                        <span style={{ color: proj.phases.ops ? "var(--success-color)" : "rgba(255,255,255,0.2)" }}>運用{proj.phases.ops ? "●" : "－"}</span>
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: "14px", lineHeight: "22px", marginBottom: "1.5rem" }}>{proj.description}</p>
                  
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.5rem" }}>
                    {proj.tech.map((t, i) => (
                      <span key={i} style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid var(--border-color)", padding: "3px 10px", borderRadius: "4px", fontSize: "11px", color: "var(--text-secondary)" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul style={{ marginTop: "auto", borderTop: "1px solid var(--border-color)", paddingTop: "1.25rem" }}>
                    {proj.achievements.map((ach, i) => (
                      <li key={i} style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "20px", marginBottom: "10px", position: "relative", paddingLeft: "15px" }}>
                        <span style={{ position: "absolute", left: 0, top: "8px", width: "5px", height: "5px", borderRadius: "50%", background: "var(--first-color)" }}></span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Experience Portfolio Timeline ===== */}
        <section id="san-portfolio" className="cb-pt-l">
          <div className="cb-container">
            <div className="cb-row">
              <div className="cl-6 cl-md-12 align-self-center">
                <div className="title-main">
                  <strong className="filltext">PROFESSIONAL</strong>
                  <small style={{ marginLeft: "8px" }}>TIMELINE</small>
                  <h2>EXPERIENCE</h2>
                </div>
              </div>
              <div className="cl-6 cl-md-12 align-self-center">
                <div className="title-info">
                  <p>In my opinion, getting your hands dirty is the best way to learn a new skill.</p>
                </div>
              </div>
            </div>

            <div className="cb-row main-timeline">
              <div className="timeline cl-3 cl-m-4">
                <div className="timeline-content">
                  <div className="timeline-icon">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <time>2021 - Present</time>
                  <h3 className="title">Web Designer / Dev</h3>
                  <p className="description">
                    <strong>Cyber Bridge Co., Ltd. (Japan)</strong>
                    <br /><br />
                    Designing layouts, coding responsive landing pages, optimizing UX layouts, and collaborating with developers.
                  </p>
                </div>
              </div>
              <div className="timeline cl-3 cl-m-4">
                <div className="timeline-content">
                  <div className="timeline-icon">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <time>2023/04 - 2023/07</time>
                  <h3 className="title">Lead Developer</h3>
                  <p className="description">
                    <strong>Online Reservation System (Contract)</strong>
                    <br /><br />
                    Developed reservation algorithms, configured PostgreSQL database schemas, and handled Ubuntu AWS server deployment.
                  </p>
                </div>
              </div>
              <div className="timeline cl-3 cl-m-4">
                <div className="timeline-content">
                  <div className="timeline-icon">
                    <i className="fas fa-newspaper"></i>
                  </div>
                  <time>2021/11 - 2022/02</time>
                  <h3 className="title">Project Lead</h3>
                  <p className="description">
                    <strong>Sajhalekh News Portal</strong>
                    <br /><br />
                    Designed UI/UX and coded a fully responsive local news reader app using Python/Django, Postgres, Nginx, and AWS.
                  </p>
                </div>
              </div>
              <div className="timeline cl-3 cl-m-4">
                <div className="timeline-content">
                  <div className="timeline-icon">
                    <i className="fas fa-crop"></i>
                  </div>
                  <time>2017/07 - 2017/09</time>
                  <h3 className="title">Web Designer</h3>
                  <p className="description">
                    <strong>Xavier International College (Nepal)</strong>
                    <br /><br />
                    Created website prototypes, integrated front-end HTML/CSS layouts, and updated server templates (PHP).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Projects section ===== */}
        <section id="my-projects" className="cb-pt-l cb-pb-l">
          <div className="cb-container">
            <div className="cb-row">
              <div className="cl-6 cl-md-12 align-self-center">
                <div className="title-main">
                  <strong className="filltext">CREATIVE</strong>
                  <small style={{ marginLeft: "8px" }}>PORTFOLIO</small>
                  <h2>DESIGN SAMPLES</h2>
                </div>
              </div>
              <div className="cl-6 cl-md-12 align-self-center">
                <div className="title-info">
                  <p>A collection of logos, graphic banners, and early web layouts created throughout my career.</p>
                </div>
              </div>
            </div>
            
            <ul className="my-projects">
              {designSamples.map((project, idx) => (
                <li key={idx}>
                  <img src={project.src} alt={project.name} />
                  <p>{project.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== Footer ===== */}
        <footer>
          <section id="footer-bottom">
            <div className="cb-container">
              <div className="footer-bottom-txt">
                <small>
                  Copyright © {currentYear} All rights reserved Sanjok.
                </small>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}
