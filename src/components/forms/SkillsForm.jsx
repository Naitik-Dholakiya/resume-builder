import { useState, useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const predefinedSkills = [
  "JavaScript",
  "React",
  "Node.js",
  "Laravel",
  "Bootstrap",
  "MySQL",
  "MongoDB",
  "Git",
  "REST API",
  "Tailwind CSS",
  "Python",
  "C++"
];

const levelPercentage = {
  Beginner: 40,
  Intermediate: 70,
  Expert: 100
};

const SkillsForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("Beginner");

  const addSkill = (skillName) => {
    const formattedSkill = skillName.trim();
    if (!formattedSkill) return;

    const alreadyExists = resumeData.skills.some(
      (s) => s.name.toLowerCase() === formattedSkill.toLowerCase()
    );

    if (alreadyExists) return;

    setResumeData({
      ...resumeData,
      skills: [
        ...resumeData.skills,
        { name: formattedSkill, level }
      ]
    });

    setSkill("");
    setLevel("Beginner");
  };

  const removeSkill = (index) => {
    const updatedSkills = resumeData.skills.filter((_, i) => i !== index);
    setResumeData({
      ...resumeData,
      skills: updatedSkills
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill(skill);
    }
  };

  return (
    <div className="card shadow-sm p-4">
      <h4 className="fw-bold mb-3">Professional Skills</h4>

      {/* Input Section */}
      <div className="row g-2 mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
        </div>

        <div className="col-md-2">
          <button
            className="btn btn-primary w-100"
            onClick={() => addSkill(skill)}
          >
            Add
          </button>
        </div>
      </div>

      {/* Suggested Skills */}
      <div className="mb-4">
        <h6 className="text-muted">Quick Add</h6>
        <div className="d-flex flex-wrap gap-2">
          {predefinedSkills.map((s, index) => {
            const exists = resumeData.skills.some(
              (skillObj) =>
                skillObj.name.toLowerCase() === s.toLowerCase()
            );

            return (
              <button
                key={index}
                className={`btn btn-sm ${
                  exists ? "btn-secondary" : "btn-outline-primary"
                }`}
                disabled={exists}
                onClick={() => addSkill(s)}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skill List */}
      <div>
        {resumeData.skills.map((s, index) => (
          <div
            key={index}
            className="mb-3 p-3 border rounded bg-light"
          >
            <div className="d-flex justify-content-between align-items-center">
              <strong>{s.name}</strong>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => removeSkill(index)}
              >
                Remove
              </button>
            </div>

            <small className="text-muted">{s.level}</small>

            <div className="progress mt-2" style={{ height: "8px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${levelPercentage[s.level]}%`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsForm;