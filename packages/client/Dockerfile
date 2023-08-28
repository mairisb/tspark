FROM node:18
WORKDIR /app
COPY ../.. .
RUN rm -rf packages/api
RUN npm install
RUN npm run build -w @tspark/common
