import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  School,
  CheckCircle2,
  FileBadge
} from 'lucide-react';
import { portfolioData } from '../../../shared/constants/portfolioData';

export default function EducationWindow() {
  const { education } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap':
        return GraduationCap;
      case 'Award':
        return Award;
      case 'BookOpen':
        return BookOpen;
      case 'School':
        return School;
      default:
        return FileBadge;
    }
  };

  return (
    <div className="space-y-2.5 sm:space-y-3 text-xs md:text-sm">
      {/* Education Header */}
      <div className="win95-raised p-2.5 sm:p-3 bg-[#c0c0c0]">
        <div className="flex items-center justify-between pb-1 border-b border-[#808080]">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900 flex-shrink-0" />
            <h2 className="font-bold text-xs sm:text-base text-blue-900 truncate">
              Academic Qualifications
            </h2>
          </div>
          <span className="text-[9px] sm:text-[11px] font-mono-90s bg-green-200 text-green-900 px-1.5 py-0.5 border border-green-700 font-semibold whitespace-nowrap">
            VERIFIED
          </span>
        </div>

        <p className="text-gray-700 text-[11px] sm:text-xs mt-1.5 font-sys">
          Official academic records for <strong>Atul Demond</strong> from MCA to Secondary School.
        </p>
      </div>

      {/* 90s Table Transcript - Mobile Horizontal Scrollable */}
      <div className="win95-raised p-2 sm:p-3 bg-[#c0c0c0]">
        <div className="win95-sunken p-1.5 sm:p-2 bg-white overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[340px]">
            <thead>
              <tr className="bg-[#dfdfdf] border-b-2 border-gray-400 text-gray-900">
                <th className="p-1.5 sm:p-2 font-bold">Qualification</th>
                <th className="p-1.5 sm:p-2 font-bold">Institution</th>
                <th className="p-1.5 sm:p-2 font-bold">Level</th>
                <th className="p-1.5 sm:p-2 font-bold text-center">Division</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {education.map((item, index) => {
                const Icon = getIcon(item.icon);
                return (
                  <tr key={index} className="hover:bg-yellow-50 transition-none">
                    <td className="p-1.5 sm:p-2 font-semibold text-gray-900">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 win95-raised bg-[#d4d0c8] flex items-center justify-center flex-shrink-0">
                          <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-900" />
                        </div>
                        <span className="text-[11px] sm:text-xs">{item.degree}</span>
                      </div>
                    </td>
                    <td className="p-1.5 sm:p-2 font-mono-90s text-gray-800 text-[11px] sm:text-xs">
                      {item.institution}
                    </td>
                    <td className="p-1.5 sm:p-2 text-gray-600">
                      <span className="bg-gray-100 border border-gray-400 px-1 py-0.2 text-[9px] sm:text-[10px] whitespace-nowrap">
                        {item.level}
                      </span>
                    </td>
                    <td className="p-1.5 sm:p-2 text-center whitespace-nowrap">
                      <span className="bg-blue-100 text-blue-900 border border-blue-500 font-bold px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-mono-90s inline-block">
                        {item.score}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Verified Notice Box */}
      <div className="win95-raised p-2 sm:p-2.5 bg-[#d4d0c8] flex items-start sm:items-center gap-2 text-xs text-gray-800">
        <CheckCircle2 className="w-4 h-4 text-green-700 flex-shrink-0 mt-0.5 sm:mt-0" />
        <span className="text-[11px] sm:text-xs">
          <strong>Academic Excellence:</strong> Consistently secured 1st Division across undergraduate (BCA), intermediate (PCM), and 10th CBSE curriculum.
        </span>
      </div>
    </div>
  );
}
