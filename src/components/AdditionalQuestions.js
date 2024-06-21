import React from 'react';

const AdditionalQuestions = ({ additionalQuestions }) => {
  return (
    <div>
      <h3>Additional Questions</h3>
      <ul>
        {additionalQuestions.map(question => (
          <li key={question.id}>
            <strong>{question.question}</strong>: {question.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdditionalQuestions;
