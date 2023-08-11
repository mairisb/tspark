# JSpark (Work in Progress)

JSpark is a full-stack TypeScript base project that empowers developers to quickly prototype and develop scalable React/Express applications.

Benefits:
- **Jumpstart your development:** JSpark provides a solid foundation and best practices for building React/Express projects, saving you valuable time.
- **Scalable architecture:** Built with scalability in mind, JSpark enables your ideas to grow into fully-fledged applications without major refactoring.
- **TypeScript support:** Leverage the power of TypeScript for type safety and improved code maintainability.
<!-- - **Seamless integration:** Easily integrate additional libraries, APIs, and modules into your project to extend functionality. -->
<!-- - **Community-driven:** Join a thriving community of developers using JSpark, benefiting from ongoing updates and contributions. -->

Key Features:
- React and Express integration
- TypeScript configuration for client and server
- Hot reloading for instant code updates during development
- Ready-to-use folder structure for organized development
- Sample components and API endpoints for reference
<!-- - Pre-configured Webpack for efficient bundling -->
<!-- - Deployment-ready configurations -->
<!-- - Extensible and modular architecture -->

Please note that JSpark is still a work in progress, and additional features and improvements are actively being developed.

## Getting started

To start the frontend and backend in development mode, use the following command:

```
npm run start:dev
```

### Launching client and server separately

To launch the client and server separately, use the following commands:

#### Common
Execute the following command inside `packages/common`:
```
npm run watch
```

#### Frontend

Execute the following command inside `packages/client`:
```
npm run start:dev
```

#### Backend
Execute the following commands inside `packages/api`:
```
npm run watch
```
```
npm run start:dev
```

### VSCode launch configuration

For your convenience, we've included a pre-configured `launch.json` in the project. Enhance your development experience with seamless debugging and code navigation in VSCode.
