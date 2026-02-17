const Stepper = ({ step }) => {
  const steps = ["Personal", "Summary", "Skills", "Experience"];

  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between align-items-center">

        {steps.map((label, index) => (
          <div key={index} className="text-center flex-fill">

            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                margin: "auto",
                background:
                  step >= index + 1
                    ? "linear-gradient(135deg, #2563eb, #1e40af)"
                    : "#d1d5db",
                color: "white",
                lineHeight: "32px",
                fontSize: "14px"
              }}
            >
              {index + 1}
            </div>

            <small className="d-block mt-2 text-muted">
              {label}
            </small>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Stepper;