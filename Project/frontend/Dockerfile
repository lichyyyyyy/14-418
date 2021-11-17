# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:latest as frontend
WORKDIR /app
COPY package*.json /app/
COPY ./ /app/
RUN npm i
RUN npm run build
RUN npm i -g serve
ENTRYPOINT ["serve", "-s", "build"]

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:latest
# COPY --from=frontend /app/build/ /usr/share/nginx/html
# COPY --from=frontend /nginx.conf /etc/nginx/conf.d/default.conf
