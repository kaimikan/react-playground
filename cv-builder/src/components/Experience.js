import React from 'react';
import '../styles/Experience.css';

const Experience = ({ experience, handleExperienceChange, isEdit }) => {
  return (
    <div className="experience-section">
      {isEdit ? (
        <>
          <input
            type="text"
            value={experience.companyName}
            placeholder="Company Name"
            onChange={(e) =>
              handleExperienceChange('companyName', e.target.value)
            }
          />
          <input
            type="text"
            value={experience.positionTitle}
            placeholder="Position Title"
            onChange={(e) =>
              handleExperienceChange('positionTitle', e.target.value)
            }
          />
          <input
            type="text"
            value={experience.mainResponsibilities}
            placeholder="Main Responsibilities"
            onChange={(e) =>
              handleExperienceChange('mainResponsibilities', e.target.value)
            }
          />
          <input
            type="text"
            value={experience.dateFrom}
            placeholder="Date From"
            onChange={(e) => handleExperienceChange('dateFrom', e.target.value)}
          />
          <input
            type="text"
            value={experience.dateUntil}
            placeholder="Date Until"
            onChange={(e) =>
              handleExperienceChange('dateUntil', e.target.value)
            }
          />
        </>
      ) : (
        <div>
          <p>
            <strong>Company:</strong> {experience.companyName}
          </p>
          <p>
            <strong>Position:</strong> {experience.positionTitle}
          </p>
          <p>
            <strong>Responsibilities:</strong> {experience.mainResponsibilities}
          </p>
          <p>
            <strong>From:</strong> {experience.dateFrom}
          </p>
          <p>
            <strong>Until:</strong> {experience.dateUntil}
          </p>
        </div>
      )}
    </div>
  );
};

export default Experience;
