const validate = (values) => {
    let errors = {};
  
    if (!values.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
  
    if (!values.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!values.surveyTopic) {
      errors.surveyTopic = 'Survey Topic is required';
    }
  
    if (values.surveyTopic === 'Technology') {
      if (!values.favoriteLanguage) {
        errors.favoriteLanguage = 'Favorite Programming Language is required';
      }
      if (!values.yearsExperience || isNaN(values.yearsExperience) || values.yearsExperience <= 0) {
        errors.yearsExperience = 'Years of Experience must be a valid number greater than 0';
      }
    }
  
    if (values.surveyTopic === 'Health') {
      if (!values.exerciseFrequency) {
        errors.exerciseFrequency = 'Exercise Frequency is required';
      }
      if (!values.dietPreference) {
        errors.dietPreference = 'Diet Preference is required';
      }
    }
  
    if (values.surveyTopic === 'Education') {
      if (!values.highestQualification) {
        errors.highestQualification = 'Highest Qualification is required';
      }
      if (!values.fieldOfStudy.trim()) {
        errors.fieldOfStudy = 'Field of Study is required';
      }
    }
  
    if (!values.feedback || values.feedback.length < 50) {
      errors.feedback = 'Feedback is required and must be at least 50 characters';
    }
  
    return errors;
  };
  
  export default validate;
  