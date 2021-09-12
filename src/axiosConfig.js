// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
// .. where we make our configurations
   // baseURL: 'https://server-112.herokuapp.com'
    baseURL: 'http://localhost:5000'
});
// Where you would set stuff like your 'Authorization' header, etc ...
//instance.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRaby1MVDNCVDE2VkEtZnhWb1JxbiJ9.eyJpc3MiOiJodHRwczovL2Rldi12LS1waXh5YS51cy5hdXRoMC5jb20vIiwic3ViIjoiZ0lCTUZiTHdGVFQ2d2haNEdhbUVEbVVwR3BvYkZuVllAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vc2VydmVyLTExMi5oZXJva3VhcHAuY29tIiwiaWF0IjoxNjMwMzAyODA4LCJleHAiOjE2MzI4OTQ4MDgsImF6cCI6ImdJQk1GYkx3RlRUNndoWjRHYW1FRG1VcEdwb2JGblZZIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.O2_HFH8ff1nw89z1lTz8gxxsN_kf9GOEd3C0HHabY5N1Ebiu9DrDY9tPvNIzF_PiiGO0jOjGJSKk-0yHnLLwcp6cfvvU1iqoGl6Hnp58PoIUGpRPVJeMUAdCfb7nPaz1GyHcerF2HCsv2PCayWjDgM34ijZN6x8_PrP70t8ThrQWcexN1A6iAr90UMuSd32clQT2MknqP73kDj3vp7gHuNJmL5m1zus7iJLUxdXXV3cly7J4pO1denjyiAXKj4iTwscFysV4oqc66XnOm8dBVHlmjMD31jxxQNp79Wv1RBRzANkx1FDEZqRVcZF4IGLBUfmaaHkM4j4XkJIcxBz5QA'
instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(request => {
   // console.log('request********************************************',request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    console.log(response);
    // Edit response config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default instance;