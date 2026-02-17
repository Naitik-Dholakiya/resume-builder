import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero-section text-center text-white d-flex align-items-center">
        <div className="container">

          <span className="badge bg-light text-dark px-3 py-2 mb-4">
            Trusted by Job Seekers Worldwide
          </span>

          <h1 className="fw-bold display-4 mb-4">
            Build ATS-Friendly Resumes <br />
            That Actually Get Interviews
          </h1>

          <p className="lead mb-5 opacity-75">
            Smart multi-step builder with professional scoring,
            real-time feedback, and instant PDF export.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/builder" className="btn btn-light px-4 py-2 fw-semibold">
              Start Building
            </Link>

            <a href="#features" className="btn btn-outline-light px-4 py-2">
              Learn More
            </a>
          </div>

        </div>
      </section>


      {/* TRUST STRIP */}
      <section className="py-4 bg-white text-center border-bottom">
        <div className="container">
          <p className="text-muted mb-0">
            ATS Optimized • Professional Templates • Real-Time Score • Instant PDF
          </p>
        </div>
      </section>


      {/* FEATURES */}
      <section id="features" className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Everything You Need to Stand Out</h2>
          <p className="text-muted">
            Designed with modern hiring systems in mind.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="feature-card p-4 h-100">
              <h5 className="fw-bold mb-3">Real-Time Resume Score</h5>
              <p className="text-muted">
                Get instant professional feedback based on ATS-friendly standards.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card p-4 h-100">
              <h5 className="fw-bold mb-3">Structured Multi-Step Builder</h5>
              <p className="text-muted">
                Guided sections to help you build a complete, impactful resume.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card p-4 h-100">
              <h5 className="fw-bold mb-3">Instant PDF Export</h5>
              <p className="text-muted">
                Download clean, ATS-compatible resumes in A4 format instantly.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* FINAL CTA SECTION */}
      <section className="cta-section text-center py-5">
        <div className="container">

          <h2 className="fw-bold mb-4">
            Ready to Land More Interviews?
          </h2>

          <Link to="/builder" className="btn primary-btn text-white px-4 py-2">
            Build Your Resume Now
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Landing;