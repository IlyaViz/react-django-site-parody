FROM node:20-alpine3.17 as build
WORKDIR ./frontend
COPY ./ ./
RUN npm install
RUN npm run build

FROM nginx:1.14.2
COPY --from=build /frontend/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf 