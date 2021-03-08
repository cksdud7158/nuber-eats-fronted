### 리액트 초기 세팅

$ npx create-react-app nuber-eats-fronted --template=typescript

### css 프레임워크 'tailwindcss'

$ npm install tailwindcss
vscode Extension : 'Tailwind CSS IntelliSense' 설치
https://tailwindcss.com/docs/installation 따라 설치
package.json의 script 에 "tailwind:build": "tailwind build ./src/styles/tailwind.css -o ./src/styles/styles.css" 를 추가함

### 프론트에서 graphql 를 사용하기위한 패키지

npm install @apollo/client graphql
https://www.apollographql.com/docs/react/get-started/

### React-Router-dom 리액트 라우팅 시스템임

https://reactrouter.com/

### Form을 좀더 쉽게 사용하게 해주는 패키지

https://react-hook-form.com/get-started

### apollo codegen

apollo client:codegen --target=typescript --outputFlat

### Apollo tooling -> 백엔드 mutation, query, input type들 typescript 파일 생얼을 해줌

https://github.com/apollographql/apollo-tooling

### react-helmet. document의 타이틀을 바꿀수 있게 해줌

npm i react-helmet

### react 전용 font-awesome

https://fontawesome.com/how-to-use/on-the-web/using-with/react

### 프론트엔드 테스트 도구

npm install cypress

### Cypress Testing Library

https://testing-library.com/docs/cypress-testing-library/intro/
npm install --save-dev cypress @testing-library/cypress

### 리액트에서 그래프를 사용할 수 있게해주는 패키지

https://formidable.com/open-source/victory/

### subscription 을 위해 apollo client 에서 패키지를 설치해야함

https://www.apollographql.com/docs/react/data/subscriptions/#gatsby-focus-wrapper

### 리액트 컴포넌트로 google Map을 사용할 수 있게해주는 라이브러리

https://www.npmjs.com/package/google-map-react

### 구글 맵스 Typescript 사용하는 법

npm i -D @types/googlemaps
