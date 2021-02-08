# Build environment
FROM node:lts-alpine as build

WORKDIR /app
COPY . .
RUN npm install --silent
RUN npm run build

# Production environment
FROM nginx:alpine
COPY --from=build /app/dist /app
ADD nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
RUN mkdir /run/nginx/
CMD ["nginx","-g","daemon off;"]
