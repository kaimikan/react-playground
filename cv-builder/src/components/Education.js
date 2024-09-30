import React from 'react';
import '../styles/Education.css';

const Education = ({ education, handleEducationChange, isEdit }) => {
  return (
    <div className="education-section">
      {isEdit ? (
        <>
          <input
            type="text"
            value={education.schoolName}
            placeholder="School Name"
            onChange={(e) =>
              handleEducationChange('schoolName', e.target.value)
            }
          />
          <input
            type="text"
            value={education.titleOfStudy}
            placeholder="Title of Study"
            onChange={(e) =>
              handleEducationChange('titleOfStudy', e.target.value)
            }
          />
          <input
            type="text"
            value={education.dateOfStudy}
            placeholder="Date of Study"
            onChange={(e) =>
              handleEducationChange('dateOfStudy', e.target.value)
            }
          />
        </>
      ) : (
        <div>
          <p>
            <strong>School:</strong> {education.schoolName}
          </p>
          <p>
            <strong>Study:</strong> {education.titleOfStudy}
          </p>
          <p>
            <strong>Date:</strong> {education.dateOfStudy}
          </p>
        </div>
      )}
    </div>
  );
};

export default Education;
