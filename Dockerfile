FROM node:lts-alpine as build

WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install

CMD ["npm", "start"]
EXPOSE 3000