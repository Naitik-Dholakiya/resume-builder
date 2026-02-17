export const calculateScore = (data) => {
  let score = 0;
  let breakdown = [];

  // Personal Info
  if (
    data.personalInfo.fullName &&
    data.personalInfo.email &&
    data.personalInfo.phone
  ) {
    score += 10;
    breakdown.push({ label: "Personal Info Complete", status: true, points: 10 });
  } else {
    breakdown.push({ label: "Personal Info Complete", status: false, points: 10 });
  }

  // Summary
  if (data.summary && data.summary.length > 50) {
    score += 15;
    breakdown.push({ label: "Strong Professional Summary", status: true, points: 15 });
  } else {
    breakdown.push({ label: "Strong Professional Summary", status: false, points: 15 });
  }

  // Skills
  if (data.skills.length >= 5) {
    score += 15;
    breakdown.push({ label: "Minimum 5 Skills Added", status: true, points: 15 });
  } else {
    breakdown.push({ label: "Minimum 5 Skills Added", status: false, points: 15 });
  }

  // Experience
  if (data.experience.length > 0) {
    score += 20;
    breakdown.push({ label: "Work Experience Added", status: true, points: 20 });
  } else {
    breakdown.push({ label: "Work Experience Added", status: false, points: 20 });
  }

  if (data.experience.length > 1) {
    score += 10;
    breakdown.push({ label: "Multiple Job Entries", status: true, points: 10 });
  } else {
    breakdown.push({ label: "Multiple Job Entries", status: false, points: 10 });
  }

  const hasNumbers = data.experience.some(exp =>
    /\d/.test(exp.description)
  );

  if (hasNumbers) {
    score += 15;
    breakdown.push({ label: "Measurable Achievements (Numbers)", status: true, points: 15 });
  } else {
    breakdown.push({ label: "Measurable Achievements (Numbers)", status: false, points: 15 });
  }

  return { score, breakdown };
};