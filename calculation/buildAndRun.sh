#!/bin/sh
mvn clean package && docker build -t com.airhacks/calculation .
docker rm -f calculation || true && docker run -d -p 8080:8080 -p 4848:4848 --name calculation com.airhacks/calculation 
