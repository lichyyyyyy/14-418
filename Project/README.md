# README



## File directory

```frontend/```: source codes for the frontend, which is implemented using React.

```resources/```: source codes to deploy on k8s

```checkpoint/```: the required screenshots for checkpoint

`final/`: some screenshots for the whole project.



## Steps

1. Reserve a static IP for the application.

   ```
   gcloud compute addresses create big-data-toolbox --region us-central1
   ```

2. Configure regarding varibles to the static IP in the deployment files.

   In `resources/deployment-frontend.yaml`, update the env variable `REACT_APP_EIP`.

   In `resources/loadbalancer.yaml`, update the configuration  `loadBalancerIP`.

3. Create a new GKE cluster.

   ```
   gcloud compute addresses create big-data-toolbox --region us-central1
   ```

   Check if the current-context of `kubectl` has been switch to the GKE cluster. If not, use the below command: 

   ```
   gcloud container clusters get-credentials big-data-toolbox --zone=us-central1-a
   ```

4. Create a namespace for the project.

   ```shell
   kubectl create ns project
   ```

5. Deploy microservices and the frontend application.

   ```shell
   cd resources
   kubectl apply -f deployment-frontend.yaml
   kubectl apply -f deployment-hadoop.yaml
   kubectl apply -f deployment-spark.yaml
   kubectl apply -f deployment-jupyter.yaml
   kubectl apply -f deployment-sonar.yaml
   ```

6. Deploy the loadbalancer.

   ```
   kubectl apply -f loadbalancer.yaml
   ```

7. Now you should be able to visit the application by simply hitting the static IP in your browser!



## Recordings

https://drive.google.com/drive/folders/1Dmw80tj1xW4n8P5EijEhw_wV7WVU0ypj?usp=sharing

This shared folder contains 3 recording:

1. demo
2. code_walkthru_part1
3. code_walkthru_part2



## Images

### Dockerfile & Base images

1. For the frontend: ```frontend/Dockerfile```

2. Jupiter notebook: https://hub.docker.com/r/jupyter/base-notebook

3. Spark: https://hub.docker.com/r/bitnami/spark

4. Hadoop datanode: https://hub.docker.com/r/bde2020/hadoop-datanode 

   Hadoop namenode: https://hub.docker.com/r/bde2020/hadoop-namenode

5. Sonarqube: https://hub.docker.com/_/sonarqube

   Sonar scanner: https://hub.docker.com/r/sonarsource/sonar-scanner-cli



### Docker URLs

1. Controller (the terminal): https://hub.docker.com/repository/docker/lichyyyyyy/14848-controller

2. Jupyter notebook: https://hub.docker.com/repository/docker/lichyyyyyy/14848-jupyter-notebook

3. Spark: https://hub.docker.com/repository/docker/lichyyyyyy/14848-spark

4. Hadoop datanode: https://hub.docker.com/repository/docker/lichyyyyyy/14848-hadoop-datanode

   Hadoop namenode: https://hub.docker.com/repository/docker/lichyyyyyy/14848-hadoop-namenode

5. Sonarqube: https://hub.docker.com/repository/docker/lichyyyyyy/14848-sonarqube

   Sonarscanner: https://hub.docker.com/repository/docker/lichyyyyyy/14848-sonar-scanner



