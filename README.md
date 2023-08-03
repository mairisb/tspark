# JSpark

JSPark is a full-stack TypeScript base project that empowers developers to quickly prototype and develop scalable React/Express applications.

Benefits:
- **Jumpstart your development:** JSPark provides a solid foundation and best practices for building React/Express projects, saving you valuable time.
- **Scalable architecture:** Built with scalability in mind, JSPark enables your ideas to grow into fully-fledged applications without major refactoring.
- **TypeScript support:** Leverage the power of TypeScript for type safety and improved code maintainability.
<!-- - **Seamless integration:** Easily integrate additional libraries, APIs, and modules into your project to extend functionality. -->
<!-- - **Community-driven:** Join a thriving community of developers using JSPark, benefiting from ongoing updates and contributions. -->

Key Features:
- React and Express integration
- TypeScript configuration for client and server
- Hot reloading for instant code updates during development
- Ready-to-use folder structure for organized development
- Sample components and API endpoints for reference
<!-- - Pre-configured Webpack for efficient bundling -->
<!-- - Deployment-ready configurations -->
<!-- - Extensible and modular architecture -->

## Getting started

Kickstart your development journey with a touch of elegance using this powerful command:

```
npx nx run-many --parallel --target=serve --projects=client,server --host=0.0.0.0
```


### VSCode launch.json

We care about your development comfort. That's why our project comes equipped with a pre-configured launch.json for VSCode. Navigate through your codebase with ease, as you effortlessly debug and fine-tune your project.

### Launching client and server separately

#### Client
```
npx nx serve client --host=0.0.0.0
```

#### Server
```
npx nx serve server
```
