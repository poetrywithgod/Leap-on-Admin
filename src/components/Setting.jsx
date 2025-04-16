import React, { useState, useEffect } from "react";
import { ChevronDown, Moon, Sun } from "lucide-react";

const Setting = () => {
  // Language and translation system
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
    },
    Spanish: {
      profile: "Perfil",
      mentorProfile: "Perfil del Mentor",
      menteeProfile: "Perfil del Mentee",
      generalSettings: "Configuración General",
      language: "Idioma",
      theme: "Tema",
      lightMode: "Modo Claro",
      darkMode: "Modo Oscuro",
      enableMentorSignup: "Habilitar Registro de Mentores",
      enableMenteeSignup: "Habilitar Registro de Mentees",
      programSettings: "Configuración del Programa",
      mentorshipDuration: "Duración del Ciclo de Mentoría",
      menteesPerMentor: "Número de Mentees por Mentor",
      mentorsPerMentee: "Número de Mentores por Mentee",
      months: "meses",
    },
    French: {
      profile: "Profil",
      mentorProfile: "Profil du Mentor",
      menteeProfile: "Profil du Mentee",
      generalSettings: "Paramètres Généraux",
      language: "Langue",
      theme: "Thème",
      lightMode: "Mode Clair",
      darkMode: "Mode Sombre",
      enableMentorSignup: "Activer l'Inscription des Mentors",
      enableMenteeSignup: "Activer l'Inscription des Mentees",
      programSettings: "Paramètres du Programme",
      mentorshipDuration: "Durée du Cycle de Mentorat",
      menteesPerMentor: "Nombre de Mentees par Mentor",
      mentorsPerMentee: "Nombre de Mentors par Mentee",
      months: "mois",
    },
    German: {
      profile: "Profil",
      mentorProfile: "Mentor-Profil",
      menteeProfile: "Mentee-Profil",
      generalSettings: "Allgemeine Einstellungen",
      language: "Sprache",
      theme: "Thema",
      lightMode: "Hellmodus",
      darkMode: "Dunkelmodus",
      enableMentorSignup: "Mentor-Anmeldung aktivieren",
      enableMenteeSignup: "Mentee-Anmeldung aktivieren",
      programSettings: "Programmeinstellungen",
      mentorshipDuration: "Dauer des Mentoring-Zyklus",
      menteesPerMentor: "Anzahl der Mentees pro Mentor",
      mentorsPerMentee: "Anzahl der Mentoren pro Mentee",
      months: "Monate",
    },
  };

  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [mentorSignup, setMentorSignup] = useState(true);
  const [menteeSignup, setMenteeSignup] = useState(true);
  const [menteesPerMentor, setMenteesPerMentor] = useState(3);
  const [mentorsPerMentee, setMentorsPerMentee] = useState(3);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [themeDropdown, setThemeDropdown] = useState(false);
  const [durationDropdown, setDurationDropdown] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(3);
  const [theme, setTheme] = useState("light");

  // Apply theme to the entire document
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Apply language to the entire document
  useEffect(() => {
    // This would typically update your app's language context or i18n system
    // For this example, we're just storing it in state
    document.documentElement.lang = selectedLanguage.toLowerCase();
  }, [selectedLanguage]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setLanguageDropdown(false);
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    setThemeDropdown(false);
  };

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
    setDurationDropdown(false);
  };

  // Get translations for current language
  const t = translations[selectedLanguage];

  return (
    <div className="mx-auto p-6 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md transition-colors duration-300">
      <div className="mb-6">
        <button
          className="text-xl font-semibold border p-4 rounded-md dark:border-gray-600 w-full text-left dark:bg-gray-900 flex justify-between items-center dark:text-white"
          onClick={() => setProfileDropdown(!profileDropdown)}
        >
          {t.profile}
          <ChevronDown className={`w-5 h-5 transition-transform ${profileDropdown ? "rotate-180" : ""}`} />
        </button>
        {profileDropdown && (
          <div className="ml-4 mt-2 space-y-2">
            <a
              href="https://example.com/mentor-profile"
              className="text-blue-600 hover:underline block dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.mentorProfile}
            </a>
            <a
              href="https://example.com/mentee-profile"
              className="text-blue-600 hover:underline block dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.menteeProfile}
            </a>
          </div>
        )}
      </div>

      <div className="space-y-8">
        {/* General Setting */}
        <div>
          <h3 className="text-lg font-semibold mb-4 dark:text-white">{t.generalSettings}</h3>
          <div className="space-y-4">
            {/* Language Dropdown */}
            <div className="relative border p-4 rounded-md dark:border-gray-600">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setLanguageDropdown(!languageDropdown)}
              >
                <span className="dark:text-white">{t.language}: {selectedLanguage}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${languageDropdown ? "rotate-180" : ""}`} />
              </div>
              {languageDropdown && (
                <ul className="absolute bg-white dark:bg-gray-700 border dark:border-gray-600 mt-2 rounded-md shadow w-full z-10">
                  {Object.keys(translations).map((lang) => (
                    <li
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer dark:text-white"
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Theme Dropdown */}
            <div className="relative border p-4 rounded-md dark:border-gray-600">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setThemeDropdown(!themeDropdown)}
              >
                <div className="flex items-center">
                  {theme === "light" ? (
                    <Sun className="w-4 h-4 mr-2 text-yellow-500" />
                  ) : (
                    <Moon className="w-4 h-4 mr-2 text-indigo-400" />
                  )}
                  <span className="dark:text-white">
                    {t.theme}: {theme === "light" ? t.lightMode : t.darkMode}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${themeDropdown ? "rotate-180" : ""}`} />
              </div>
              {themeDropdown && (
                <ul className="absolute bg-white dark:bg-gray-700 border dark:border-gray-600 mt-2 rounded-md shadow w-full z-10">
                  <li
                    onClick={() => handleThemeChange("light")}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer flex items-center dark:text-white"
                  >
                    <Sun className="w-4 h-4 mr-2 text-yellow-500" />
                    {t.lightMode}
                  </li>
                  <li
                    onClick={() => handleThemeChange("dark")}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer flex items-center dark:text-white"
                  >
                    <Moon className="w-4 h-4 mr-2 text-indigo-400" />
                    {t.darkMode}
                  </li>
                </ul>
              )}
            </div>

            {/* Enable Mentor Signup */}
            <div className="flex justify-between items-center border p-4 rounded-md dark:border-gray-600">
              <span className="dark:text-white">{t.enableMentorSignup}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={mentorSignup}
                  onChange={() => setMentorSignup(!mentorSignup)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500 dark:peer-checked:bg-orange-600 dark:bg-gray-700"></div>
              </label>
            </div>

            {/* Enable Mentee Signup */}
            <div className="flex justify-between items-center border p-4 rounded-md dark:border-gray-600">
              <span className="dark:text-white">{t.enableMenteeSignup}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={menteeSignup}
                  onChange={() => setMenteeSignup(!menteeSignup)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500 dark:peer-checked:bg-orange-600 dark:bg-gray-700"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Program Setting */}
        <div>
          <h3 className="text-lg font-semibold mb-4 dark:text-white">{t.programSettings}</h3>
          <div className="space-y-4">
            {/* Duration Dropdown */}
            <div className="relative border p-4 rounded-md dark:border-gray-600">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setDurationDropdown(!durationDropdown)}
              >
                <span className="dark:text-white">{t.mentorshipDuration}: {selectedDuration} {t.months}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${durationDropdown ? "rotate-180" : ""}`} />
              </div>
              {durationDropdown && (
                <ul className="absolute bg-white dark:bg-gray-700 border dark:border-gray-600 mt-2 rounded-md shadow w-full z-10">
                  {[3, 6, 9, 12].map((duration) => (
                    <li
                      key={duration}
                      onClick={() => handleDurationChange(duration)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer dark:text-white"
                    >
                      {duration} {t.months}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex justify-between items-center border p-4 rounded-md dark:border-gray-600">
              <span className="dark:text-white">{t.menteesPerMentor}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setMenteesPerMentor(Math.max(0, menteesPerMentor - 1))}
                  className="px-2 py-1 border rounded dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                >
                  –
                </button>
                <span className="dark:text-white">{menteesPerMentor}</span>
                <button
                  onClick={() => setMenteesPerMentor(menteesPerMentor + 1)}
                  className="px-2 py-1 border rounded dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center border p-4 rounded-md dark:border-gray-600">
              <span className="dark:text-white">{t.mentorsPerMentee}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setMentorsPerMentee(Math.max(0, mentorsPerMentee - 1))}
                  className="px-2 py-1 border rounded dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                >
                  –
                </button>
                <span className="dark:text-white">{mentorsPerMentee}</span>
                <button
                  onClick={() => setMentorsPerMentee(mentorsPerMentee + 1)}
                  className="px-2 py-1 border rounded dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;