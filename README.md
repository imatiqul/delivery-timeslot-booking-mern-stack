## Overview
A codebase for MERN Stack using following tech stacks
1. NestJS
2. Next.js
3. 

## Requirement
1. [Node.js](https://nodejs.org/)
2. [npm](https://www.npmjs.com/)
3. [Nx](https://nx.dev/)

## Installation

### 1. **Clone the application**

```sh
git clone https://github.com/imatiqul/delivery-timeslot-booking-mern-stack
```
### 2. **Bootstrap the packages**

From the project root, we can run the following command to bootstrap the packages and install all their dependencies and linking any cross-dependencies:

```sh
npm install
```

### Seed the data
Execute following command to seed the initial data
```sh
npx prisma db seed 
```

### 3. **Start the packages**

From the project root, we can run the following command to start our Node.js packages:

```sh
npm run dev
```

The above command will do the following:

    1. Starts the front-end package on `http://localhost:4200/`
    2. Starts the backend api on `http://localhost:3333/swagger`
