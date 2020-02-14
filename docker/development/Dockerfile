FROM node:10.13-alpine
ENV NODE_ENV development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install nodemon -g
RUN npm install --verbose && mv node_modules ../
COPY . .
EXPOSE 3000
CMD npm run dev