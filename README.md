# Social Pulse
Social media analytics dashboard shows social media posts from different platforms.

## Dashboard feature
- User details [Name: Bio: Links:]
- Number of followers
- Number of followings
- Number of posts
- Account reached
- Total stories
- Total follows
- Total posts
- Total save
- Total comments
- Total shares

## Xquik import helper

The React frontend can map Xquik X/Twitter responses into the existing
analytics cards with `frontend/src/services/xquikAnalytics.js`.

```js
import { buildXquikAccount, buildXquikAnalytics } from "./services/xquikAnalytics";

const tweetsResponse = await fetch(
  "https://xquik.com/api/v1/x/tweets/search?q=from:xquik&limit=25",
  { headers: { "x-api-key": process.env.XQUIK_API_KEY } }
).then((response) => response.json());

const analytics = buildXquikAnalytics(tweetsResponse.tweets);
const account = buildXquikAccount(tweetsResponse.author);
```

Keep the Xquik API key in a backend or local environment and pass only the
normalized analytics into the UI.

## Screenshots

- Sign-up/Sign-in page
  
  <img width="1916" height="1079" alt="image" src="https://github.com/user-attachments/assets/c105e140-60bc-4465-89d0-abbf98c3be4e" />


- Dashboard

<img width="1897" height="1079" alt="image" src="https://github.com/user-attachments/assets/f1300ac9-f4dd-4436-86fa-07f607a7676c" />


## Tech Stacks
- Spring Boot
- ReactJS
- Vite
- Bootstrap
