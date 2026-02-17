import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const levelPercentage = {
  Beginner: 40,
  Intermediate: 70,
  Expert: 100
};

const ResumePreview = () => {
  const { resumeData } = useContext(ResumeContext);

  return (
    <div
      id="resume-preview"
      className="bg-white p-5 rounded shadow-sm"
      style={{
        width: "210mm",
        // minHeight: "297mm",
        margin: "auto",
        fontFamily: "Arial",
        fontSize: "14px",
        lineHeight: "1.6"
      }}
    >
      {/* Header */}
      <div className="text-center mb-3">
        <h2 className="fw-bold mb-1 text-uppercase">
          {resumeData.personalInfo.fullName || "Your Name"}
        </h2>
        <p className="mb-0">
          {resumeData.personalInfo.email || "email@example.com"} |{" "}
          {resumeData.personalInfo.phone || "1234567890"}
        </p>
      </div>

      <hr />

      {/* Summary */}
      {resumeData.summary && (
        <div className="mb-4">
          <h5 className="fw-bold border-bottom pb-1">
            PROFESSIONAL SUMMARY
          </h5>
          <p className="mt-2">{resumeData.summary}</p>
        </div>
      )}

      {/* Skills Section */}
      {resumeData.skills.length > 0 && (
        <div className="mb-4">
          <h5 className="fw-bold border-bottom pb-1">
            TECHNICAL SKILLS
          </h5>

          <div className="row mt-3">
            {resumeData.skills.map((skill, index) => (
              <div key={index} className="col-md-6 mb-3">
                <div className="d-flex justify-content-between">
                  <strong>{skill.name}</strong>
                  <small>{skill.level}</small>
                </div>

                <div className="progress" style={{ height: "6px" }}>
                  <div
                    className="progress-bar"
                    style={{
                      width: `${levelPercentage[skill.level]}%`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience Section */}
      {resumeData.experience.length > 0 && (
        <div>
          <h5 className="fw-bold border-bottom pb-1">
            WORK EXPERIENCE
          </h5>

          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-3 mt-3">
              <div className="d-flex justify-content-between">
                <strong>{exp.jobTitle}</strong>
                <span>
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>

              <div className="fw-semibold">
                {exp.company} | {exp.location}
              </div>

              <ul className="mt-2 ps-3">
                {exp.description &&
                  exp.description.split("\n").map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumePreview;