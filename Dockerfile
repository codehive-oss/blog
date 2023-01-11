FROM node:alpine AS builder

ARG WORDPRSS_URL
ENV WORDPRESS_URL ${WORDPRESS_URL}

WORKDIR /app
RUN apk update

COPY ./package.json ./package.json
COPY yarn.lock ./yarn.lock

RUN yarn install

COPY . .
RUN yarn build

FROM node:alpine AS runner

WORKDIR /app
RUN apk update

COPY ./package.json ./package.json
COPY yarn.lock ./yarn.lock

COPY --from=builder /app/dist/ ./dist

RUN yarn install --production

CMD yarn start
