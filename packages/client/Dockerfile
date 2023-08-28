# Stage 1: Build with Node
FROM tspark-base as build

RUN npm run build -w @tspark/client

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/packages/client/dist /usr/share/nginx/html

COPY packages/client/nginx.conf /etc/nginx/conf.d/default.conf
