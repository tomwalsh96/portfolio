FROM node:17-alpine3.15 AS builder

# Set working directory
WORKDIR /app

# Copy the package.json as well as the package-lock.json and install 
# the dependencies. This is a separate step so the dependencies 
# will be cached unless changes to one of those two files 
# are made.
COPY package.json package-lock.json ./
RUN npm install

# Copy all files from current directory to working dir in image
COPY . .

# Arguments
ARG API_BASE_URL
ENV API_BASE_URL=${API_BASE_URL}

# install node modules and build assets
RUN npm run build

# nginx state for serving content
FROM nginx:1.17.0-alpine

# Copy the react build from Stage 1
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 to the Docker host, so we can access it 
# from the outside.
EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]