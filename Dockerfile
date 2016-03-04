FROM node:4.2.4
MAINTAINER Tam Dang <tam@myladybug.co>
RUN apt-get update
RUN apt-get -y upgrade
ENV NODE_ENV production
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --production
COPY index.html /app/index.html
COPY server.js /app/server.js
COPY build/index.bundle.js /app/javascripts/index.bundle.js
EXPOSE 8888
ENTRYPOINT ["node"]
CMD ["server"]
