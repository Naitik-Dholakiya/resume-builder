import { useState } from "react";
import PersonalInfoForm from "../components/forms/PersonalInfoForm";
import SummaryForm from "../components/forms/SummaryForm";
import SkillsForm from "../components/forms/SkillsForm";
import ResumePreview from "../components/preview/ResumePreview";
import Stepper from "../components/common/Stepper";
import ExperienceForm from "../components/forms/ExperienceForm";
import ResumeScore from "../components/common/ResumeScore";
import html2pdf from "html2pdf.js";
import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

const downloadPDF = () => {
    const element = document.getElementById("resume-preview");

    const options = {
        margin: 10,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] }
    };

    html2pdf().set(options).from(element).save();
};

const Builder = () => {
    const { sessionExpired, setSessionExpired } = useContext(ResumeContext);
    const [showPreview, setShowPreview] = useState(false);
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const renderStep = () => {
        switch (step) {
            case 1:
                return <PersonalInfoForm />;
            case 2:
                return <SummaryForm />;
            case 3:
                return <SkillsForm />;
            case 4:
                return <ExperienceForm />;
            default:
                return <PersonalInfoForm />;
        }
    };

    return (
        <div className="container-fluid py-3 py-md-4">

            {/* Session Expired Alert */}
            {sessionExpired && (
                <div className="alert alert-warning alert-dismissible fade show text-center">
                    Your saved data was removed due to 1 hour of inactivity.
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setSessionExpired(false)}
                    ></button>
                </div>
            )}

            <div className="row">

                {/* LEFT PANEL (FORM) */}
                <div
                    className={`col-12 col-lg-5 mb-4 mb-lg-0 ${showPreview ? "d-none d-lg-block" : ""
                        }`}
                >
                    <div className="left-panel p-3 p-md-4 bg-white rounded shadow-sm h-100">

                        <ResumeScore />
                        <Stepper step={step} />

                        <div className="mt-3">
                            {renderStep()}
                        </div>

                        <div className="d-flex flex-wrap gap-2 mt-4">

                            {step > 1 && (
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={prevStep}
                                >
                                    Previous
                                </button>
                            )}

                            {step < 4 && (
                                <button
                                    className="btn btn-primary"
                                    onClick={nextStep}
                                >
                                    Next
                                </button>
                            )}

                            {/* 📱 Mobile Preview Button */}
                            <button
                                className="btn btn-dark d-lg-none ms-auto"
                                onClick={() => setShowPreview(true)}
                            >
                                Preview
                            </button>

                            <button
                                className="btn btn-success ms-lg-auto"
                                onClick={downloadPDF}
                            >
                                Download PDF
                            </button>

                        </div>

                    </div>
                </div>

                {/* RIGHT PANEL (PREVIEW) */}
                <div
                    className={`col-12 col-lg-7 ${!showPreview ? "d-none d-lg-block" : ""
                        }`}
                >
                    <div className="preview-panel p-2 p-md-4 bg-light rounded">

                        {/* 📱 Back Button (Mobile Only) */}
                        <div className="d-lg-none mb-3">
                            <button
                                className="btn btn-outline-dark"
                                onClick={() => setShowPreview(false)}
                            >
                                ← Back to Edit
                            </button>
                        </div>

                        <div className="preview-wrapper">
                            <ResumePreview />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Builder;