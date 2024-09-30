import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

const GeneralInfo = ({ generalInfo, handleGeneralInfoChange, isEdit }) => {
  return (
    <div className="general-info">
      {isEdit ? (
        <>
          <input
            type="text"
            value={generalInfo.name}
            placeholder="Name"
            onChange={(e) => handleGeneralInfoChange('name', e.target.value)}
          />
          <input
            type="email"
            value={generalInfo.email}
            placeholder="Email"
            onChange={(e) => handleGeneralInfoChange('email', e.target.value)}
          />
          <input
            type="tel"
            value={generalInfo.phone}
            placeholder="Phone Number"
            onChange={(e) => handleGeneralInfoChange('phone', e.target.value)}
          />
        </>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {generalInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {generalInfo.email}
          </p>
          <p>
            <strong>Phone:</strong> {generalInfo.phone}
          </p>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
