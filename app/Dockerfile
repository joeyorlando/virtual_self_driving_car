FROM node:12.13.0

RUN mkdir -p /opt/apps/app
WORKDIR /opt/apps/app

COPY package.json package-lock.json ./
RUN npm install

CMD ["npm", "start"]
