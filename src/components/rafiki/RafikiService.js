import axios from 'axios';

const RafikiService = {
  getAnswer: async (query) => {
    try {
      const response = await axios.post('https://rafiki-ai.com/api/ask', { query });
      return response.data;
    } catch (error) {
      console.error('Error fetching data from Rafiki:', error);
      return 'Sorry, I could not fetch an answer at this time.';
    }
  }
};

export default RafikiService;
