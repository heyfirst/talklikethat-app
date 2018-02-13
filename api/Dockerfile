FROM java:8

WORKDIR /app

COPY ./target/talklikethat-spring-boot-0.1.0.jar  /app/app.jar

EXPOSE 8080

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app/app.jar"]
