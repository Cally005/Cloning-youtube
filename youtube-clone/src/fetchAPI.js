import axios from 'axios'

const VidUrl = 'https://youtube-v311.p.rapidapi.com' 

const options = {

    url: VidUrl,
    params: {
      part: 'snippet,contentDetails,statistics',
      id: 'Q8TXgCzxEnw',
      maxResults: '10'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_PRIVATE_KEY,
      'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
    }
  };


  