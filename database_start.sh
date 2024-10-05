#!/bin/bash

# 모든 데이터베이스 디렉터리 경로
services=("mongodb" "mssql" "mysql" "postgres" "redis")

# 각 서비스 디렉터리로 이동 후 docker-compose 실행
for service in "${services[@]}"
do
  echo "Starting $service..."
  (cd "./database/$service" && docker-compose up -d)
  if [ $? -ne 0 ]; then
    echo "$service failed to start. Check the docker-compose file in ./database/$service"
  else
    echo "$service started successfully."
  fi
done

echo "All services started."

