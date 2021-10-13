# ReadMe



## URLs for Docker Hub Images

1. SA-Frontend: https://hub.docker.com/repository/docker/lichyyyyyy/sentiment-analysis-frontend
2. SA-WebApp: https://hub.docker.com/repository/docker/lichyyyyyy/sentiment-analysis-web-app
3. SA-Logic: https://hub.docker.com/repository/docker/lichyyyyyy/sentiment-analysis-logic



## URL for video recordings

https://drive.google.com/drive/folders/1L9KNOJ5vcPmXgYUYv-rBjYf_rWoox2vH?usp=sharing



## Deployment scripts

All the scripts are under `./scripts` path.

1. `sa-frontend-deployment.yaml` 

   Deploy the frontend with 2 pods exposed at Port 80.

2. `sa-logic-deployment.yaml`

   Deploy the python application with 2 pods exposed at Port 5000.

3. `sa-web-app-deployment.yaml`

   Deploy the backend with 2 pods exposed at Port 8080. Define the URL to connect with the python application using environment variables.

4. `service-sa-frontend-lb.yaml`

   Expose Port 80 for external access to the frontend.

5. `service-sa-web-app-lb.yaml`

   Expose Port 80 for external access to the backend.

6. `service-sa-logic.yaml`

   Expose Port 80 to Port 5000, for the connection between the backend and python app.



## Steps

1. create images for the frontend, backend and python application.

   - SA-Frontend

     ```shell
     # build the app
     $ npm install
     $ npm install -g yarn
     $ yarn build
     
     # create container
     $ docker build -f Dockerfile -t $DOCKER_USER_ID/sentiment-analysis-frontend .
     
     # push the container
     $ docker run -d -p 80:80 $DOCKER_USER_ID/sentiment-analysis-frontend
     ```

   - SA-WebApp

     ```shell
     # build the app
     $ mvn install
     
     # create container
     $ docker build -f Dockerfile -t $DOCKER_USER_ID/sentiment-analysis-web-app .
     
     # push the container
     $ docker run -d -p 80:80 $DOCKER_USER_ID/sentiment-analysis-web-app
     ```

   - SA-Logic

     ```shell
     # create container
     $ docker build -f Dockerfile -t $DOCKER_USER_ID/sentiment-analysis-logic .
     
     # push the container
     $ docker push $DOCKER_USER_ID/sentiment-analysis-logic
     ```

2. deploy applications to the GKE.

   - create a cluster on GKE.

   - connect to the cluster on local console.

     ```shell
     # get assess credentials
     $ gcloud container clusters get-credentials cluster-1 --zone=us-central1-f
     
     # switch to GKE context
     $ kubectl config use-context gke_cohesive-sample_us-central1-c_cluster-1
     ```

   - apply YAML file to deploy Deployment, LoadBalancer and Service.

     ```shell
     $ kubectl apply -f ./scripts
     ```

     

