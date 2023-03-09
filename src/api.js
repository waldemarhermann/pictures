import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID TwAlLes5lGvBr9-3VFvPRkWsmAsHIOlAwEdyUH4Or5U',
    },
    params: {
      query: term
    },
  });

  return response.data.results
};

export default searchImages;
