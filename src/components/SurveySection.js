import React from 'react';

const SurveySection = ({ title, fields, values, errors, onChange }) => {
  return (
    <div>
      <h3>{title}</h3>
      {fields.map(field => (
        <div key={field.name}>
          <label>
            {field.label}:
            {field.type === 'select' ? (
              <select
                name={field.name}
                value={values[field.name] || ''}
                onChange={onChange}
              >
                <option value="">Select</option>
                {field.options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={values[field.name] || ''}
                onChange={onChange}
              />
            )}
            {errors[field.name] && <p>{errors[field.name]}</p>}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SurveySection;
