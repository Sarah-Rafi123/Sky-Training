// Level 5 SQA: Professional Taxi & Private Hire Driver Role (Scotland) Course Data
// Based on actual course1 folder structure with 9 units
import { getUnitTextPages } from './textContent.js';

export const courseUnits = [
  {
    id: 1,
    title: "Unit 1: Taxi and Private Hire: Workplace Health and Safety",
    description: "Understanding workplace health and safety requirements, hazard identification, and risk management for taxi and private hire operations.",
    duration: "8 hours",
    pages: 30,
    icon: "🛡️",
    color: "#3b82f6"
  },
  {
    id: 2,
    title: "Unit 2: Customer Service Excellence",
    description: "Advanced customer service strategies, communication techniques, and passenger interaction skills.",
    duration: "7 hours",
    pages: 29,
    icon: "👥",
    color: "#10b981"
  },
  {
    id: 3,
    title: "Unit 3: Safety and Security Protocols",
    description: "Comprehensive safety procedures, risk assessment, and security measures for passenger transport.",
    duration: "5 hours",
    pages: 18,
    icon: "🛡️",
    color: "#f59e0b"
  },
  {
    id: 4,
    title: "Unit 4: Route Planning and Navigation",
    description: "Advanced route optimization, traffic management, and efficient navigation techniques.",
    duration: "7 hours",
    pages: 29,
    icon: "🗺️",
    color: "#8b5cf6"
  },
  {
    id: 5,
    title: "Unit 5: Business Operations and Management",
    description: "Commercial aspects, business development, financial management, and industry leadership.",
    duration: "9 hours",
    pages: 37,
    icon: "💼",
    color: "#ef4444"
  },
  {
    id: 6,
    title: "Unit 6: Advanced Vehicle Operations",
    description: "Vehicle maintenance, technology integration, and advanced driving techniques.",
    duration: "5 hours",
    pages: 21,
    icon: "🚗",
    color: "#06b6d4"
  },
  {
    id: 7,
    title: "Unit 7: Communication and Interpersonal Skills",
    description: "Professional communication, conflict resolution, and interpersonal relationship management.",
    duration: "4 hours",
    pages: 14,
    icon: "💬",
    color: "#84cc16"
  },
  {
    id: 8,
    title: "Unit 8: Legal and Ethical Responsibilities",
    description: "Understanding legal obligations, ethical considerations, and professional responsibilities.",
    duration: "5 hours",
    pages: 22,
    icon: "⚖️",
    color: "#f97316"
  },
  {
    id: 9,
    title: "Unit 9: Quality Assurance and Performance",
    description: "Quality standards, performance evaluation, and continuous improvement in service delivery.",
    duration: "8 hours",
    pages: 32,
    icon: "⭐",
    color: "#ec4899"
  }
];

// Generate unit content using extracted text content
export const generateUnitContent = (unitId) => {
  const unit = courseUnits.find(u => u.id === unitId);
  if (!unit) return [];
  
  // Try to get text content first
  const textPages = getUnitTextPages(unitId);
  if (textPages && textPages.length > 0) {
    return textPages.map(page => ({
      ...page,
      isImage: false
    }));
  }
  
  // Fallback to image-based content for units without text extraction yet
  const pages = [];
  for (let i = 1; i <= unit.pages; i++) {
    pages.push({
      pageNumber: i,
      title: `Page ${i}`,
      imagePath: `/course1/unit_${unitId}/page${i}.jpg`,
      isImage: true
    });
  }
  
  return pages;
};

// Helper function to get all pages for a unit (now returns text or images)
export const getUnitPages = (unitId) => {
  return generateUnitContent(unitId);
};