import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative inline-flex items-center">
      <Globe className="w-4 h-4 text-gray-400 mr-2" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en' | 'gr')}
        className="bg-gray-800/50 border border-gray-600 text-white text-sm rounded-lg px-3 py-1 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 appearance-none cursor-pointer"
      >
        <option value="en">English</option>
        <option value="gr">Ελληνικά</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;