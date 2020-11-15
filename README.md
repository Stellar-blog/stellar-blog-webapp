# stellar-blog.com :rocket:
> Fullstack webapp deployed on https://www.stellar-blog.com

It's a blog style social media webapp built with Next.js & GraphQL on AWS.

<details>
  <summary>
    <b>
      Preview of stellar-blog.com :star:
    </b>
  </summary>
<br>
<img src="https://github.com/Stellar-blog/stellar-blog-webapp/blob/master/wiki/preview-login480.gif" alt="preview" />
</details>

<details>
  <summary>
    <b>
      Overview diagram of the whole system :star:
    </b>
  </summary>
<br>
<img src="https://github.com/Stellar-blog/stellar-blog-webapp/blob/master/wiki/General_Process.png" alt="General_Process" />
</details>

## Development tools
### Front-end
- HTML 5, CSS 3, Javascript (ES6)
- Next.js (React.js)
- Styled Components

### Back-end
- Node.js (v12)
- Express.js
- GraphQL

### Unit-test
- Jest
- Enzyme
- @testing-library

### AWS services
- AWS Amplify
- AWS Appsync
- AWS DynamoDB
- AWS S3
- AWS Congnito
- AWS Lambda
- AWS Route 53
- AWS CloudFront
- AWS ElasticSearch

## Core features
### Integrated with GraphQL and Rest API
> Generated fully working APIs from GraphQL schema

- [Click it to see GraphQL schema](https://github.com/Stellar-blog/stellar-blog-webapp/blob/master/amplify/backend/api/stellagraphqlapi/schema.graphql)

### Blog system
- [x] Let user submit their post
- [x] Let user add hashtags on their post
- [x] Let user see a list of all posts others uploaded
- [x] Let user see a list of posts the user uploaded
- [x] Let user see a list of options for settings
- [x] Let user delete their post
- [ ] Let user edit their post (WIP)
- [ ] Let user follow other bloggers (WIP)
- [ ] Let user like other posts (WIP)
- [ ] Let user comment on a post (WIP)

### Authentication flow built with AWS Cognito

- [x] Let user sign up with their email
- [x] Let user log in with their username
- [x] Let user log out
- [x] Verify user by email
- [ ] Let user change their password (WIP)
- [ ] Let user delete their account (WIP)
- [ ] Redirect unauthenticated users (WIP)

### Photo upload flow
> Implemented a draggable & droppable UI for better user experience

- [x] Let user upload up to 3 photos at once
- [x] Let user drag and drop their photos
- [x] Let user search a photo with their local OS
- [x] Store user-uploaded photos on AWS S3
- [ ] Convert to Webp and resize to fit the window (WIP)

<details>
  <summary>
    <b>
      Preview of Photo upload flow :star:
    </b>
  </summary>
<br>
<img src="https://github.com/Stellar-blog/stellar-blog-webapp/blob/master/wiki/preview-photo-upload480.gif" alt="preview-photo-upload480" />
</details>

<details>
  <summary>
    <b>
      Sequence diagram :star:
    </b>
  </summary>
<br>
<img src="https://github.com/Stellar-blog/stellar-blog-webapp/blob/master/wiki/seq-diagram-photo-upload.png" alt="seq-diagram-photo-upload" />
</details>

### Search flow by hashtag
> Implemented an auto-suggestion system with a Trie structure for faster performance and better user experience.

- [x] Let user search posts by hashtag
- [x] Let user see a list of auto-suggestions 

<details>
  <summary>
    <b>
      Preview of Search flow :star:
    </b>
  </summary>
<br>
<img src="https://github.com/Stellar-blog/stellar-blog-webapp/blob/master/wiki/preview-search480.gif" alt="preview-search480" />
</details>

<details>
  <summary>
    <b>
      Sequence diagram (Auto-suggestion flow) :star:
    </b>
  </summary>
<br>
<img src="https://github.com/Stellar-blog/stellar-blog-webapp/blob/master/wiki/Autocomplete_Process.png" alt="Autocomplete_Process" />
</details>

### CI/CD pipeline built with Amplify & Github
> Implemented multi-environments; Master/QA/Prod, and had each domain SSL certified by AWS Certificate Manager to enable HTTPS

- [x] Deployed Master branch to https://dev.stellar-blog.com
- [x] Deployed QA branch to https://qa.stellar-blog.com
- [x] Deployed Prod branch to https://www.stellar-blog.com

<details>
  <summary>
    <b>
      Overview diagram of CI/CD pipeline :star:
    </b>
  </summary>
<br>
<img src="https://github.com/Stellar-blog/stellar-blog-webapp/blob/master/wiki/CICD_Process.png" alt="CICD_Process" />
</details>

## Performance optimization

<details open>
  <summary>
    <b>
      Lighthouse performance score (Home page) :100:
    </b>
  </summary>
<br>
<img src="https://github.com/Stellar-blog/stellar-blog-webapp/blob/master/wiki/performance.png" alt="performance_score" />
</details>

<details>
  <summary>
    <b>
      Lighthouse best practices score (Home page) :100:
    </b>
  </summary>
<br>
<img src="https://github.com/Stellar-blog/stellar-blog-webapp/blob/master/wiki/best_practices.png" alt="best_practices_score" />
</details>

<details>
  <summary>
    <b>
      Resized media files to the actual size that users see and then converted to Webp format. :star:
    </b>
  </summary>
<br>

- Original background image format : <b>jpg</b>
- Original background image size : <b>492 kb</b>
- Converted background image format : <b>webp</b>
- Converted background image size : <b>63 kb (88% :small_red_triangle_down:)</b>
</details>

<details>
  <summary>
    <b>
      Pre-loaded google fonts and the background image for shorter loading time. :star:
    </b>
  </summary>
<br>

- Background loading time before pre-loading : <b>877ms</b>
- Background loading time after pre-loading : <b>153ms (5 times faster loading :rocket:)</b>
</details>

<details>
  <summary>
    <b>
      Debounced search input by 500 ms :star:
    </b>
  </summary>
<br>

- Set to fire user requests every 500 ms, otherwise it'll affect the performance of the browser.
</details>

<details>
  <summary>
    <b>
      Cached static files on the client side :star:
    </b>
  </summary>
<br>

- TTL : 600 seconds
- Cached on CDN
</details>

<details>
  <summary>
    <b>
      Cached user-uploaded images on the client side :star:
    </b>
  </summary>
<br>

- TTL : 31536000 seconds
- Cached on local memory
</details>

<details>
  <summary>
    <b>
      Cached GraphQL queries on the server side (AppSync) :star:
    </b>
  </summary>
<br>

- TTL : 60 seconds
- Cached on an EC2 instance with 1.5GB RAM
- Ave. GraphQL query response on Dashboard before cache : <b>544ms</b>
- Ave. GraphQL query response on Dashboard after cache : <b>374ms (30% :small_red_triangle_down:)</b>
</details>

## Future improvements
- [ ] Cache top search keywords on both client and server sides
- [ ] Infinite loading functionality on the dashboard page
- [ ] Pre-render blurred images

## Responsive web design
- [x] Support desktop viewport (window width greater than 600px)
- [x] Support mobile  viewport (window width less than 600px)

## Browser compaitibility
- [x] Support Chrome
- [x] Support Firefox
- [x] Support Safari
- [x] Support Edge

## Unit-test result
- [ ] Set up a testing environment with Jest (WIP)

## Web accessibility (Keyboard navigation)
- [x] Let user sign up
- [x] Let user log in
- [ ] Let user browse through nav menus (WIP)
- [ ] Let user upload a photo (WIP)
- [x] Let user add hashtags 
- [x] Let user submit a post
- [x] Let user search posts by hashtags
- [ ] Let user browse a list of auto-suggestions (WIP)

## Internationalization
- [ ] Redirect based on user's location (WIP)
- [x] Support English
- [ ] Support Korean (WIP)

## To-do list
- [ ] Refactor by Typescript
- [ ] Format with ESLint, Airbnb Style Guide, and Prettier

## Meta Data
Jong-Ho (James) Kim
- [Github](https://github.com/april9288) - Github page
- [Linkedin](http://www.linkedin.com/in/james-kim-dev) - Linkedin page
- [Medium](https://medium.com/@april9288) - Medium blog
- april9288@gmail.com
