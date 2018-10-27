# heb-code-challenge

The app is divided in to two parts, the web app and the api app.

## API

The API app is a Spring Boot application.

The API app requires MySQL. After MySQL is up and running, create a db and a user, and change the settings in the application.properties file.

```
spring.datasource.url=jdbc:mysql://localhost:3306/<DB_NAME>
spring.datasource.username=<DB_USER>
spring.datasource.password=<DB_PASSWORD>
```
To run the API app, from the /api directory, use the following command:

```
./gradlew bootRun
```

## Web

The web app is a Vue.js application.

The web app requires node.js.

To run the web app, from the /web directory, use the following command:

```
npm run serve
```

Once the web app server is running, direct your browser to `http://localhost:8080`
