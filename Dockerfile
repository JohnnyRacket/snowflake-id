FROM node:alpine
# Create Directory for the Container
WORKDIR /usr/src/app
# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install
# Copy all other source code to work directory
ADD . /usr/src/app
# Install and build typescript
RUN npm install -g typescript
RUN tsc
# Start
WORKDIR /usr/src/app/dist
EXPOSE 3000
CMD [ "node", "server.js" ]
