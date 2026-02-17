import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { calculateScore } from "../../utils/calculateScore";

const ResumeScore = () => {
  const { resumeData } = useContext(ResumeContext);
  const { score, breakdown } = calculateScore(resumeData);

  const getColor = () => {
    if (score < 50) return "bg-danger";
    if (score < 75) return "bg-warning";
    return "bg-success";
  };

  return (
    <div className="card shadow-sm p-3 mb-4">
      <h5 className="fw-bold mb-3">Resume Score</h5>

      <div className="progress mb-3" style={{ height: "10px" }}>
        <div
          className={`progress-bar ${getColor()}`}
          style={{ width: `${score}%` }}
        />
      </div>

      <h3 className="fw-bold mb-3">{score}/100</h3>

      <ul className="list-group">
        {breakdown.map((item, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between ${
              item.status ? "list-group-item-success" : "list-group-item-light"
            }`}
          >
            <span>{item.label}</span>
            <span>{item.status ? `+${item.points}` : "0"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeScore;