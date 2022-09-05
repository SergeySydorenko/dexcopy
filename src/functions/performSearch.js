import axios from "axios";

const searchLink = 'https://www.googleapis.com/books/v1/volumes';
const apiKey = 'AIzaSyAXOUfnbTgVByACJ7f7eS3054h4ETBf7ng';

async function performSearch(searchData, startPage){
    let response = await axios({
      method: 'get',
      url: searchLink,
      params: {
        q: searchData,
        startIndex: startPage,
        maxResults: 20,
        key: apiKey
      }
    })
    return response;
  }

export default performSearch;