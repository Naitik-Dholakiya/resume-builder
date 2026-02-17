import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const ExperienceForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const addExperience = () => {
    const newExperience = {
      jobTitle: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: ""
    };

    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, newExperience]
    });
  };

  const handleChange = (index, e) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience[index][e.target.name] = e.target.value;

    setResumeData({
      ...resumeData,
      experience: updatedExperience
    });
  };

  const removeExperience = (index) => {
    const updatedExperience = resumeData.experience.filter((_, i) => i !== index);
    setResumeData({
      ...resumeData,
      experience: updatedExperience
    });
  };

  return (
    <div>
      <h4 className="mb-3">Work Experience</h4>

      <button className="btn btn-primary mb-3" onClick={addExperience}>
        + Add Experience
      </button>

      {resumeData.experience.map((exp, index) => (
        <div key={index} className="card p-3 mb-3 shadow-sm">
          
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            className="form-control mb-2"
            value={exp.jobTitle}
            onChange={(e) => handleChange(index, e)}
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="form-control mb-2"
            value={exp.company}
            onChange={(e) => handleChange(index, e)}
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            className="form-control mb-2"
            value={exp.location}
            onChange={(e) => handleChange(index, e)}
          />

          <div className="row mb-2">
            <div className="col">
              <input
                type="text"
                name="startDate"
                placeholder="Start Date"
                className="form-control"
                value={exp.startDate}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="endDate"
                placeholder="End Date"
                className="form-control"
                value={exp.endDate}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
          </div>

          <textarea
            rows="4"
            name="description"
            placeholder="Describe your responsibilities and achievements..."
            className="form-control mb-2"
            value={exp.description}
            onChange={(e) => handleChange(index, e)}
          />

          <button
            className="btn btn-sm btn-danger"
            onClick={() => removeExperience(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExperienceForm;