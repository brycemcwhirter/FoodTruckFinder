FROM openjdk:16

ADD target/foodtruckfinder-boot.jar user-mysql.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "user-mysql.jar"]


#FROM openjdk:14 AS Production
#ENV NODE_ENV=production
#WORKDIR /usr/src/backend
# Possible to execute the mave bom build here? Would need to dowload maven...
#ARG JAR_FILE=target/*.jar

#RUN cp ${JAR_FILE} /app.jar
#COPY ${JAR_FILE} /app.jar
#COPY . .
#ENTRYPOINT ["java","-jar","/app.jar"]