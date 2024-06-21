import { useState } from 'react';
import axios from 'axios';

const useApi = () => {
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  const fetchQuestions = async (topic) => {
    try {
      console.log("api fetched successfully" ,topic);
      const response = await axios.get(`https://api.example.com/questions?topic=${topic}`);
      
      if (!response.status === 200) {
        throw new Error('Failed to fetch questions');
      }
      
      setAdditionalQuestions(response.data.questions);
    } catch (error) {
      console.error('Error fetching questions:', error.message);
    }
  };

  return {
    fetchQuestions,
    additionalQuestions
  };
};

export default useApi;
