import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const SummaryForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      summary: e.target.value
    });
  };

  return (
    <div>
      <h4 className="mb-3">Professional Summary</h4>

      <textarea
        rows="6"
        className="form-control"
        placeholder="Write a powerful professional summary..."
        value={resumeData.summary}
        onChange={handleChange}
      />
    </div>
  );
};

export default SummaryForm;