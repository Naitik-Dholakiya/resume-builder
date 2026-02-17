import { createContext, useState, useEffect } from "react";

export const ResumeContext = createContext();

const ONE_HOUR = 60 * 60 * 1000;

const defaultResumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: ""
  },
  summary: "",
  skills: [],
  experience: []
};

export const ResumeProvider = ({ children }) => {

  const checkSession = () => {
    const savedData = localStorage.getItem("resumeData");
    const lastActive = localStorage.getItem("lastActive");

    if (savedData && lastActive) {
      const now = Date.now();
      const timePassed = now - parseInt(lastActive);

      if (timePassed > ONE_HOUR) {
        // Clear ONLY on refresh
        localStorage.removeItem("resumeData");
        localStorage.removeItem("lastActive");

        return { data: defaultResumeData, expired: true };
      }

      return { data: JSON.parse(savedData), expired: false };
    }

    return { data: defaultResumeData, expired: false };
  };

  const sessionCheck = checkSession();

  const [resumeData, setResumeData] = useState(sessionCheck.data);
  const [sessionExpired, setSessionExpired] = useState(sessionCheck.expired);

  // 🔥 Auto Save
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  // 🔥 Track Activity (only update timestamp)
  useEffect(() => {
    const updateActivity = () => {
      localStorage.setItem("lastActive", Date.now().toString());
    };

    window.addEventListener("mousemove", updateActivity);
    window.addEventListener("keydown", updateActivity);
    window.addEventListener("click", updateActivity);
    window.addEventListener("scroll", updateActivity);
    window.addEventListener("touchstart", updateActivity);

    updateActivity();

    return () => {
      window.removeEventListener("mousemove", updateActivity);
      window.removeEventListener("keydown", updateActivity);
      window.removeEventListener("click", updateActivity);
      window.removeEventListener("scroll", updateActivity);
      window.removeEventListener("touchstart", updateActivity);
    };
  }, []);

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        setResumeData,
        sessionExpired,
        setSessionExpired
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};