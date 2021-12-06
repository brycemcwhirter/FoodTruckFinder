FROM node:14 AS Production

ENV NODE_ENV=production

WORKDIR /usr/src/frontend
ENV PATH /usr/src/frontend/node_modules/.bin:$PATH

COPY ../package.json .
COPY ../package-lock.json .
RUN npm install
#RUN npm install --save http-proxy-middleware
#RUN npm install react-scripts@4.0.3

COPY . .

#RUN npm run build

CMD ["npm", "start"]