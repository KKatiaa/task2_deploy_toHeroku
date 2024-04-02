FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=80
EXPOSE $PORT
CMD ["node", "index.js"]