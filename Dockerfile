# Build stage
# Base image Node
FROM node:22

WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --network-timeout=100000

# Copy source code
COPY . .

# Expose port Metro
EXPOSE 8081

# Start Metro bundler
CMD ["npx", "react-native", "start", "--host", "0.0.0.0"]

