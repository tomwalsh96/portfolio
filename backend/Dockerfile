FROM openjdk:17-alpine as build

WORKDIR /app

COPY mvnw .
COPY .mvn .mvn

COPY pom.xml .

RUN ./mvnw dependency:go-offline -B

COPY src src

RUN ./mvnw package
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)


FROM openjdk:17-alpine

ARG DEPENDENCY=/app/target/dependency

COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app

ARG EMAIL_SERVICE_USERNAME
ARG EMAIL_SERVICE_PASSWORD
ENV EMAIL_SERVICE_USERNAME=${EMAIL_SERVICE_USERNAME}
ENV EMAIL_SERVICE_PASSWORD=${EMAIL_SERVICE_PASSWORD}
 
ENTRYPOINT ["java","-cp","app:app/lib/*","tomwalsh96.portfolio.backend.BackendApplication"]
