#!/bin/bash

if [ $# -eq 0 ]; then
    echo ""
    echo "What do you want this script to do?"
    echo ""
    echo "start_dev: Start the development server"
    echo "start_dev_verbose: Start the development server with all logging turned on"
    echo "dev_db: Use internact MongoDB shell for development"
    echo "server_log: Listen to Node server log"
    echo "nginx_log: Listen to nginx server log"
    echo "start_prod: Start the staging server"
    echo "start_prod: Start the production server"
    echo "build_prod: Pull the latest from master and rebuild containers"
    echo ""
    exit
fi

if [ $1 == "start_dev" ]; then
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
fi

if [ $1 == "start_dev_verbose" ]; then
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
fi

if [ $1 == "dev_db" ]; then
    docker exec -it mrtk_mongo  mongo
fi

if [ $1 == "server_log" ]; then
    docker logs --follow mrtk_server
fi

if [ $1 == "nginx_log" ]; then
    docker logs --follow mrtk_nginx
fi

if [ $1 == "start_staging" ]; then
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build 
fi

if [ $1 == "start_prod" ]; then
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build 
fi

if [ $1 == "build_prod" ]; then
    docker-compose stop
    git pull
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
fi
