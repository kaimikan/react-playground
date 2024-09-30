import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';
import '../styles/CVForm.css';

const CVForm = () => {
  const [isEdit, setIsEdit] = useState(true);
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [education, setEducation] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: '',
  });
  const [experience, setExperience] = useState({
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    dateFrom: '',
    dateUntil: '',
  });

  const handleGeneralInfoChange = (field, value) => {
    setGeneralInfo({ ...generalInfo, [field]: value });
  };

  const handleEducationChange = (field, value) => {
    setEducation({ ...education, [field]: value });
  };

  const handleExperienceChange = (field, value) => {
    setExperience({ ...experience, [field]: value });
  };

  const handleSubmit = () => {
    setIsEdit(false);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  return (
    <div className="cv-form">
      <h1>CV/Resume</h1>

      {/* General Information Section */}
      <section>
        <h2 className="section-title">General Information</h2>
        <GeneralInfo
          generalInfo={generalInfo}
          handleGeneralInfoChange={handleGeneralInfoChange}
          isEdit={isEdit}
        />
      </section>

      {/* Education Section */}
      <section>
        <h2 className="section-title">Education</h2>
        <Education
          education={education}
          handleEducationChange={handleEducationChange}
          isEdit={isEdit}
        />
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="section-title">Practical Experience</h2>
        <Experience
          experience={experience}
          handleExperienceChange={handleExperienceChange}
          isEdit={isEdit}
        />
      </section>

      {/* Submit and Edit Button */}
      {isEdit ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
};

export default CVForm;
