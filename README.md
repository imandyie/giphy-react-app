## Instructions For Server
- Open the "server/helpers/settings.js" file and update any details you want. The "clientUrl" should be the url for the client react js app which you will start in the next step.
- Run "npm install"
- Run "npm start"

## Instructions For Client
- Open the "client/helpers/settings.js" file and update the "apiUrl" with your server url which you started earlier
- Run "npm install"
- Run "npm start"

## How it works
- I'm using a simple "Express" server to store tha API key and take care of the API calls. From the client I'm communicating with the "giphy" API
only through the "Express" server

- All containers that will need to render data from the API are wrapped in a "ErrorBoundary" container which will catch any errors from its the entire
tree and show a nice message rather than the ugly errors.

- When I get the list of images from API, each entry also contains all the details I need about that image, so when you click the image, it will get those details from the Redux store rather than calling the API again. If you refresh the page, only then will call the API since the Redux store is empty.

- Everytime more items are loaded, all entries are stored in the Redux store so if you change the filter or go to Details page and then go back to the previous screen, it will load all entries for all the pages you previously had from the store.