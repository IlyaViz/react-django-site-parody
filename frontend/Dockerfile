FROM node:20-alpine3.17

RUN npx create-react-app frontend
WORKDIR ./frontend
RUN npm install jest

COPY ./ ./

CMD ["npm", "start"]
