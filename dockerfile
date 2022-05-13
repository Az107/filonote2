FROM node:lts
COPY ./* /app/
WORKDIR /app
EXPOSE 3000
RUN npm install
RUN npm run build
ENTRYPOINT ["npm", "start"]