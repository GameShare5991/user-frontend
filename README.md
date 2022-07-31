# User micro-frontend
login screen and user account creation micro-frontend

'''
docker built -t user-frontend
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3011:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    user-frontend

'''