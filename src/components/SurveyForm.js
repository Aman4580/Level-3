import React, { useState, useEffect } from 'react';
import useForm from '../hooks/useForm';
import useApi from '../hooks/useApi';
import validate from '../hooks/validate';
import SurveySection from './SurveySection';
import AdditionalQuestions from './AdditionalQuestions';
import '../App.css';

const SurveyForm = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);
  const { fetchQuestions, additionalQuestions } = useApi();
  const [showTechnology, setShowTechnology] = useState(false);
  const [showHealth, setShowHealth] = useState(false);
  const [showEducation, setShowEducation] = useState(false);

  useEffect(() => {
    setShowTechnology(values.surveyTopic === 'Technology');
    setShowHealth(values.surveyTopic === 'Health');
    setShowEducation(values.surveyTopic === 'Education');
  }, [values.surveyTopic]);

  useEffect(() => {
    if (values.surveyTopic) {
      fetchQuestions(values.surveyTopic);
    }
  }, [values.surveyTopic, fetchQuestions]);

  return (
    <form onSubmit={handleSubmit} className='comps'>
      <div>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={values.fullName || ''}
            onChange={handleChange}
          />
          {errors.fullName && <p>{errors.fullName}</p>}
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </label>
      </div>
      <div>
        <label>
          Survey Topic:
          <select
            name="surveyTopic"
            value={values.surveyTopic || ''}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
          {errors.surveyTopic && <p>{errors.surveyTopic}</p>}
        </label>
      </div>

      {showTechnology && (
        <SurveySection
          title="Technology Section"
          fields={[
            { name: 'favoriteLanguage', label: 'Favorite Programming Language', type: 'select', options: ['JavaScript', 'Python', 'Java', 'C#'] },
            { name: 'yearsExperience', label: 'Years of Experience', type: 'number' }
          ]}
          values={values}
          errors={errors}
          onChange={handleChange}
        />
      )}

      {showHealth && (
        <SurveySection
          title="Health Section"
          fields={[
            { name: 'exerciseFrequency', label: 'Exercise Frequency', type: 'select', options: ['Daily', 'Weekly', 'Monthly', 'Rarely'] },
            { name: 'dietPreference', label: 'Diet Preference', type: 'select', options: ['Vegetarian', 'Vegan', 'Non-Vegetarian'] }
          ]}
          values={values}
          errors={errors}
          onChange={handleChange}
        />
      )}

      {showEducation && (
        <SurveySection
          title="Education Section"
          fields={[
            { name: 'highestQualification', label: 'Highest Qualification', type: 'select', options: ['High School', "Bachelor's", "Master's", 'PhD'] },
            { name: 'fieldOfStudy', label: 'Field of Study', type: 'text' }
          ]}
          values={values}
          errors={errors}
          onChange={handleChange}
        />
      )}

      <div>
        <label>
          Feedback:
          <textarea
            name="feedback"
            value={values.feedback || ''}
            onChange={handleChange}
          />
          {errors.feedback && <p>{errors.feedback}</p>}
        </label>
      </div>

      <button type="submit">Submit</button>

      {values.submitted && (
        <div>
          <h3>Form Submitted</h3>
          <p>Full Name: {values.fullName}</p>
          <p>Email: {values.email}</p>
          <p>Survey Topic: {values.surveyTopic}</p>
          {showTechnology && (
            <>
              <p>Favorite Programming Language: {values.favoriteLanguage}</p>
              <p>Years of Experience: {values.yearsExperience}</p>
            </>
          )}
          {showHealth && (
            <>
              <p>Exercise Frequency: {values.exerciseFrequency}</p>
              <p>Diet Preference: {values.dietPreference}</p>
            </>
          )}
          {showEducation && (
            <>
              <p>Highest Qualification: {values.highestQualification}</p>
              <p>Field of Study: {values.fieldOfStudy}</p>
            </>
          )}
          <p>Feedback: {values.feedback}</p>

          {additionalQuestions.length > 0 && (
            <AdditionalQuestions additionalQuestions={additionalQuestions} />
          )}
        </div>
      )}
    </form>
  );
};

export default SurveyForm;
