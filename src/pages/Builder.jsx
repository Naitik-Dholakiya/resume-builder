import { useState } from "react";
import PersonalInfoForm from "../components/forms/PersonalInfoForm";
import SummaryForm from "../components/forms/SummaryForm";
import SkillsForm from "../components/forms/SkillsForm";
import ResumePreview from "../components/preview/ResumePreview";
import Stepper from "../components/common/Stepper";
import ExperienceForm from "../components/forms/ExperienceForm";
import ResumeScore from "../components/common/ResumeScore";
import html2pdf from "html2pdf.js";

const downloadPDF = () => {
    const element = document.getElementById("resume-preview");

    const options = {
        margin: 0.5,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(options).from(element).save();
};

const Builder = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

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
        <div className="container-fluid py-4">
            <div className="row g-4">

                {/* LEFT PANEL */}
                <div className="col-lg-5">
                    <div className="left-panel p-4">

                        <ResumeScore />
                        <Stepper step={step} />

                        {renderStep()}

                        <div className="d-flex justify-content-between mt-4">
                            {step > 1 && (
                                <button className="btn btn-outline-secondary" onClick={prevStep}>
                                    Previous
                                </button>
                            )}

                            {step < 4 && (
                                <button className="btn primary-btn text-white ms-auto" onClick={nextStep}>
                                    Next
                                </button>
                            )}

                            <button
                                className="btn btn-success ms-2"
                                onClick={downloadPDF}
                            >
                                Download PDF
                            </button>
                        </div>

                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="col-lg-7 preview-panel p-4">
                    <ResumePreview />
                </div>

            </div>
        </div>
    );
};

export default Builder;