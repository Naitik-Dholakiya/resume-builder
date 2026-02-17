import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const PersonalInfoForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  return (
    <div>
      <h4 className="mb-3">Personal Information</h4>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        className="form-control mb-3"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form-control mb-3"
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        className="form-control mb-3"
        onChange={handleChange}
      />
    </div>
  );
};

export default PersonalInfoForm;