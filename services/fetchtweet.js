import fetch from 'node-fetch';


const fetchTweets = async (userName) => {
    const response = await fetch(`https://myna-api.onrender.com/search?user=${userName}`);
    return await response.json();
}

export default fetchTweets