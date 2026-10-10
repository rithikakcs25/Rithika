import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const links = ['About', 'Skills', 'Work', 'Contact'];
const skills = [
  ['01', 'Java', 'Learning by building', 'blue'],
  ['02', 'Python', 'Practical foundations', 'coral'],
  ['03', 'MySQL', 'Database basics', 'green'],
  ['04', 'Web technologies', 'Growing every day', 'gold'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('About');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActive(visible.target.id[0].toUpperCase() + visible.target.id.slice(1));
    }, { rootMargin: '-30% 0px -60% 0px' });
    links.forEach((link) => { const section = document.getElementById(link.toLowerCase()); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  return <div className="site">
    <header className="header">
      <a className="brand" href="#top"><span>RK</span> Rithika K</a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><i/><i/></button>
      <nav className={menuOpen ? 'open' : ''}>
        {links.map((link) => <a className={active === link ? 'active' : ''} onClick={() => setMenuOpen(false)} href={`#${link.toLowerCase()}`} key={link}>{link}</a>)}
        <a className="nav-button" href="mailto:rithika2852007@gmail.com">Let’s connect ↗</a>
      </nav>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><b/> Computer Science & Engineering student</p>
          <h1>Learning.<br/>Building.<br/><em>Growing.</em></h1>
          <p className="lead">I’m Rithika, a curious engineering student who enjoys turning ideas into useful, thoughtful digital experiences.</p>
          <div className="actions"><a className="button" href="#work">Explore my work ↗</a><a className="underlined" href="mailto:rithika2852007@gmail.com">Say hello →</a></div>
          <div className="meta"><span><strong>Based in</strong> Trichy, India</span><span><strong>Graduating</strong> 2029</span></div>
        </div>
        <div className="portrait-area">
          <div className="ring ring-one"/><div className="ring ring-two"/>
          <div className="portrait"><img src="/WhatsApp_Image_2026-10-10_at_12.14.08.jpeg" alt="Portrait of Rithika K" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.parentElement.classList.add('fallback'); }}/><div className="initials">RK<small>Rithika K</small></div></div>
          <div className="note note-one">✦ <span>Open to<br/><b>opportunities</b></span></div><div className="note note-two"><strong>01</strong><span>Portfolio<br/><b>2026</b></span></div>
        </div>
      </section>

      <section id="about" className="section about"><p className="label"><span>01</span> A little about me</p><div className="two-column"><h2>Building a strong<br/><em>foundation</em> for what’s next.</h2><div><p className="large">I’m motivated by the space where logic meets creativity. As a B.E. Computer Science and Engineering student at K. Ramakrishna College of Technology, I’m developing the skills to create solutions that are simple, useful, and made with care.</p><p>My approach is hands-on: learn the fundamentals, ask good questions, and keep building. I bring a positive attitude, strong teamwork, and the willingness to learn whatever the next challenge needs.</p></div></div></section>

      <section id="skills" className="skills"><div className="section-inner"><div className="section-top"><p className="label"><span>02</span> What I work with</p><p>A growing toolkit, shaped by curiosity<br/>and practical projects.</p></div><div className="skill-grid">{skills.map(([number, title, detail, color]) => <article className="skill" key={title}><span className={`number ${color}`}>{number}</span><span className="arrow">↗</span><h3>{title}</h3><p>{detail}</p></article>)}</div><div className="soft"><span>Also part of my toolkit</span><div>{['Problem solving','Communication','Time management','Adaptability','Teamwork'].map((item) => <b key={item}>{item}</b>)}</div></div></div></section>

      <section id="work" className="section work"><div className="section-top"><p className="label"><span>03</span> Selected work</p><p>Small steps, real learning,<br/>meaningful progress.</p></div><div className="project"><div className="mockup"><div className="window"><i/><i/><i/> student-management</div><div className="screen"><h3>Students <b>+</b></h3><hr/><hr className="short"/><div>01 <span>Student records</span><small>view</small></div><div>02 <span>Course details</span><small>view</small></div></div></div><div className="project-copy"><p className="kicker">Academic project / 2026</p><h2>Student<br/><em>Management</em><br/>System</h2><p>My mini project for organizing student information with a focus on clear structure and practical problem-solving.</p><div className="tags"><span>Java</span><span>MySQL</span><span>Problem solving</span></div></div></div><div className="project-footer">More projects are on the way.<span/>01 / 01</div></section>

      <section className="quote"><div className="section-inner"><strong>“</strong><blockquote>Stay curious.<br/><em>Keep creating.</em></blockquote><div className="quote-bottom"><p>Beyond technical skills, I value the habits that make good work possible: listening carefully, collaborating generously, and showing up ready to learn.</p><div><b>95%</b><span>Higher Secondary<br/>examination</span></div><div><b>2nd</b><span>Prize in a<br/>coding event</span></div></div></div></section>

      <section id="contact" className="section contact"><p className="label"><span>04</span> Start a conversation</p><div className="contact-body"><h2>Have an opportunity<br/>in <em>mind?</em></h2><a className="email" href="mailto:rithika2852007@gmail.com">rithika2852007@gmail.com ↗</a><div className="contact-meta"><span>+91 63802 20846</span><span>Trichy, Tamil Nadu</span><span>Available for entry-level opportunities</span></div></div></section>
    </main>
    <footer><span>© 2026 Rithika K</span><span>Learn · Build · Grow</span><a href="#top">Back to top ↑</a></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
