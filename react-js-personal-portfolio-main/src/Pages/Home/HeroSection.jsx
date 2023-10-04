export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello i am Ezzulddin</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I'm a dedicated full stack developer specializing in creating dynamic web applications. My proficiency in HTML and CSS allows me to craft stunning and responsive user interfaces that engage and captivate users. On the backend, I harness the power of Node.js to build efficient and scalable server-side solutions. With React, I seamlessly bridge the gap between front-end and back-end development, delivering seamless user experiences. I'm passionate about leveraging the latest technologies to bring innovative web projects to life, ensuring they are both visually appealing and performant.
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            const contactMeSection = document.getElementById("ContactMe");
            if (contactMeSection) {
              contactMeSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Get In Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
