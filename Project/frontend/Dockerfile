FROM node:14.18.1-alpine
WORKDIR /app
COPY package*.json /app/
COPY ./ /app/
RUN npm i
ENTRYPOINT ["npm", "start"]