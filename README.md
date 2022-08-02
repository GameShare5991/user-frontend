# User micro-frontend
login screen and user account creation micro-frontend

```
docker built -t user-frontend
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3011:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    user-frontend

```

# build docker
npm run build
docker build . -t jackjackzhou/user-frontend

# push image:
docker push jackjackzhou/user-frontend

# kubectl create&run
minikube start
kubectl create -f user-frontend-deployment.yaml
minikube tunnel
minikube dashboard

# clean up
kubectl delete -f user-frontend-deployment.yaml