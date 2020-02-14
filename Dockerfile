### STAGE 1: Build ###

FROM node:12-alpine as builder

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy npm package files
COPY package*.json ./

# Install npm dependencies
RUN npm set progress=false && npm i --silent && npm install

# Copy app files to out container
COPY . .

# Build app
RUN npm run build

### STAGE 2: Setup ###

FROM nginx:1.12-alpine

COPY ./config/nginx.conf /etc/nginx/conf.d/nginx.conf

#COPY corp.globant.com.crt /etc/nginx/corp.globant.com.crt
#COPY corp.globant.com.key /etc/nginx/corp.globant.com.key

# Copy build files from first image to nginx dir
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/dist/ /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]