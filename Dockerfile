FROM node:20-alpine

WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm install

COPY backend/ .

ENV NODE_ENV=development
EXPOSE 3000

CMD ["npm", "run", "dev"]