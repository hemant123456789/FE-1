// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
// .. where we make our configurations
    baseURL:'https://server-112.herokuapp.com'
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2Rldi12LS1waXh5YS51cy5hdXRoMC5jb20vIiwic3ViIjoiUUREeEd4WktGekxrYlZOYUJyS2MwbjRnUHgzbks2V2pAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vc2VydmVyLTExMi5oZXJva3VhcHAuY29tIiwiaWF0IjoxNjMwMTcyNTAzLCJleHAiOjE2MzAyNTg5MDMsImF6cCI6IlFERHhHeFpLRnpMa2JWTmFCcktjMG40Z1B4M25LNldqIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.o61X0RGduGfK4FOGnV1Ft9jwjmZTrsun1NMeMim711Q';
instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(request => {
    console.log(request);
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