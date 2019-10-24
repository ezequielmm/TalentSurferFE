FROM node:alpine AS builder
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build -- --prod

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
