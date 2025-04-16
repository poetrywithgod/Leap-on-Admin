import React, { createContext, useState, useContext } from 'react';

const translations = {
  English: {
    profile: "Profile",
    mentorProfile: "Mentor Profile",
    menteeProfile: "Mentee Profile",
    generalSettings: "General Settings",
    language: "Language",
    theme: "Theme",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    enableMentorSignup: "Enable Mentor Sign up",
    enableMenteeSignup: "Enable Mentee Sign up",
    programSettings: "Program Settings",
    mentorshipDuration: "Duration of Mentorship Cycle",
    menteesPerMentor: "Number of Mentee per Mentor",
    mentorsPerMentee: "Number of Mentor per Mentee",
    months: "months",
    // Add all other translations here
  },
  Spanish: {
    // Spanish translations...
  },
  French: {
    // French translations...
  },
  German: {
    // German translations...
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('English');
  
  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);