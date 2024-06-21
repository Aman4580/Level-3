import React from 'react';
import SurveyForm from './components/SurveyForm';
import './App.css'; // Assuming you have your CSS file for styling

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Survey Form</h1>
      </header>
      <main>
        <SurveyForm />
      </main>
    </div>
  );
};

export default App;

