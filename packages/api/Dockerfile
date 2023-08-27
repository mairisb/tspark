FROM node:18
WORKDIR /app
COPY ../.. .
RUN rm -rf packages/client
RUN npm install
RUN npm run build -w @tspark/common
RUN npm run build -w @tspark/api
CMD ["node", "packages/api/dist/src/index.js"]
