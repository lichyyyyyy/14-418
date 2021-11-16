FROM node:latest
WORKDIR /app
COPY src/ ./
COPY public/ ./
COPY package.json ./
COPY package-lock.json ./
RUN npm i
RUN npm i -g serve
RUN npm run build
CMD ["serve", "-s", "build"]
