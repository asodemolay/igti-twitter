import axios from 'axios';

const API_URL = 'http://localhost:3001/tweets'

async function getAllTweets() {
  const res = await axios.get(API_URL);
  return res.data;
}

async function postNewTweet(newTweet) {
  const response = await axios.post(API_URL, newTweet);
  return response.data.id;
}

async function deleteTweet(id) {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}

export { getAllTweets, postNewTweet, deleteTweet };