FROM node:8

# Create app directory
ENV WORKDIR=/src/app

WORKDIR ${WORKINGDIR}

# Install app dependencies
COPY package*.json ./

RUN npm install --silent
# Copy app source code
COPY 	. .  ${WORKINGDIR}/

#Expose port and start application
EXPOSE 3000
CMD ["npm", "start"]