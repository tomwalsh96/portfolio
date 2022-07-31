FROM node:17-alpine3.15 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

ENV REACT_APP_API_BASE_URL=/backend

RUN npm run build

FROM nginx:1.17.0-alpine

COPY --from=builder /app/build /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000