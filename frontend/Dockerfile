FROM node:20-alpine3.17

RUN npx create-react-app frontend
WORKDIR ./frontend
RUN npm install jest
RUN npm install react-router-dom

COPY ./ ./

CMD ["npm", "start"]
