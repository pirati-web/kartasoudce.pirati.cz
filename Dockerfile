FROM node:10.6.0 as build

RUN mkdir /app
WORKDIR /app

COPY package-lock.json package.json ./
COPY package.json .

# Install from package-lock.json
RUN npm ci

# Copy over all the files
COPY . ./

RUN npm run generate

# Nginx build

FROM nginx:alpine as prod

# Overwrite default config
COPY nginx-site.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /app
