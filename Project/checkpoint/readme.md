# README

## Docker 

### Dockerfile & Base images

1. For the terminal: ```entry/Dockerfile```

2. Jupiter notebook: https://hub.docker.com/r/ibmcom/jupyter-base-notebook-ppc64le

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



## File directory

> .
> ├── checkpoint
> │   ├── readme.md
> │   └── screenshots
>
> └── entry 
> └── resources
>     ├── deployment-controller.yaml
>     ├── deployment-hadoop.yaml
>     ├── deployment-jupyter.yaml
>     ├── deployment-sonar.yaml
>     ├── deployment-spark.yaml
>     ├── loadbalancer.yaml
>     └── services.yaml

```entry/```: source codes for the ternimal, which is implemented using Flask

```resources/```: source codes to deploy on k8s

```checkpoint/```: the required materials for checkpoint



## Steps

1. Create a namespace for the project.

   ```shell
   $ kubectl create ns project
   ```

2. Deploy all Deployments.

   ```shell
   $ kubectl apply -f deployment-controller.yaml
   $ kubectl apply -f deployment-hadoop.yaml
   $ kubectl apply -f deployment-spark.yaml
   $ kubectl apply -f deployment-jupyter.yaml
   $ kubectl apply -f deployment-sonar.yaml
   ```

3. Expose Services.

   ```shell
   $ kubectl apply -f services.yaml
   ```

4. Expose LoadBalancers.

   ```shell
   $ kubectl apply -f loadbalancer.yaml
   ```

   
