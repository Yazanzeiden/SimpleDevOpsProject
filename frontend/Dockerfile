# Build stage
FROM node:16 as build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the app and build it
COPY . .
RUN yarn build

# Production stage
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build files to Nginx's HTML directory
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
