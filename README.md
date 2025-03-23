# Shell App - Micro Front-Ends with Module Federation

This is a brief test project demonstrating a micro front-end architecture using Module Federation with Vite and React. It splits the application into two separate projects: a **shell app** and a **micro auth app**.

## Advantages of Micro Front-Ends

- **Independent Deployment:** Each micro front-end can be deployed separately, allowing for independent updates and releases.
- **Scalability:** Teams can work on different parts of the application without stepping on each other's toes.
- **Technology Agnostic:** Different micro front-ends can use different technologies if needed.
- **Improved Maintainability:** Breaking the application into smaller, manageable pieces simplifies development and maintenance.
- **Enhanced Decoupling:** Micro front-end architecture forces teams to work on their components in a highly decoupled manner, promoting clear boundaries and independent development.

## Project Structure

- **Shell App:** Acts as the host/container. It loads remote modules exposed by the micro auth app. Shell app will load all micro front-ends necessary.
- **Micro Auth App:** Exposes a component (AuthScreen) using Module Federation.

## Running the Projects

### Shell App

The shell app is designed to run in development mode. Simply run:

```bash
npm run dev
```

This starts the shell app on [http://localhost:3000](http://localhost:3000).

## Micro Auth App

**Important:** In development mode, the micro auth app does not generate a physical `remoteEntry` file, so the shell app cannot dynamically load the remote module. To test the integration, you need to build the micro auth app and serve the build.

### Build the micro auth app:

```bash
npm run build
```

Serve the generated build (for example, using http-server):

```bash
npx http-server dist -p 3001 --cors
```

This will serve the micro auth app on [http://localhost:3001](http://localhost:3001), making the `remoteEntry.js` available for the shell app.

**Summary**

- **Shell App:** Run with `npm run dev` on port **3000**.
- **Micro Auth App:** Build with `npm run build` and serve with a static server on port **3001** (using `npx http-server dist -p 3001 --cors`).

This setup allows you to test micro front-end integration using Module Federation. During development, you'll need to rebuild the micro auth app to see changes reflected in the shell app, as the development server does not output a separate `remoteEntry` file.

Additionally, when you rebuild, there will be a significant caching issue because the shell app may load the `remoteEntry.js` file from cache, so updates in the micro auth app might not be reflected in the shell app. **To resolve this in the shell app**, open the Network tab in your browser's console, right-click on the `remoteEntry.js` file, select "Clear Cache," and then reload the page.











