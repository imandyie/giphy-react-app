import express from 'express';
import Api from './helpers/api';
import settings from './helpers/settings';

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', settings.clientUrl);
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
}); 

app.get('/gifs/:keyword/:offset/:limit', (request, response) => {
  const { keyword, offset, limit } = request.params;
  const apiPath = `/search?q=${keyword}&limit=${limit}&offset=${parseInt(offset) * parseInt(limit)}`;

  if (keyword === 'dog' || keyword === 'cat') {
    Api.get(apiPath).then(resp => {
      response.send(JSON.stringify({gifs: resp}));
    }).catch((ex) => {
      response.send(JSON.stringify({error: ex}));
    });
  } else {
    response.send(JSON.stringify({gifs: {}}));
  }
});

app.get('/gif/details/:gifId', (request, response) => {
  const { gifId } = request.params;
  const apiPath = `/${gifId}`;

  if (gifId) {
    Api.get(apiPath).then(resp => {
      response.send(JSON.stringify({gifDetails: resp}));
    }).catch((ex) => {
      response.send(JSON.stringify({error: ex}));
    });
  } else {
    response.send(JSON.stringify({gifDetails: {}}));
  }
});

app.listen(settings.serverPort, () => {
  console.log(`Listening on port: ${settings.serverPort}`);
});
