import fetch from 'node-fetch';


const fetchTweets = async (userName) => {
    const response = await fetch(`http://[::1]:5555/tweet?user=${userName}&count=10`);
    return await response.json();
}

export default fetchTweets