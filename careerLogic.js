function getCareerRecommendations(profile) {
  const careers = [];

  if (profile.interest.includes("technology")) {
    careers.push("Web Developer", "AI Engineer", "Data Analyst");
  }
  if (profile.interest.includes("design")) {
    careers.push("UI/UX Designer", "Graphic Designer");
  }
  if (profile.interest.includes("business")) {
    careers.push("MBA", "Entrepreneur");
  }
  if (profile.interest.includes("government")) {
    careers.push("UPSC", "Banking Exams");
  }

  return [...new Set(careers)];
}

module.exports = { getCareerRecommendations };
