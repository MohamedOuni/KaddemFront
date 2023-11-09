### STAGE 1: Build Angular app ###
FROM node AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm cache clean --force
COPY . .
RUN npm install --legacy-peer-deps --force
RUN npm run build --prod

FROM nginx:latest AS ngi
COPY --from=build /app/dist/sakai-ng /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
