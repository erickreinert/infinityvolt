# Infinity Volt Monorepo Core

This is the Infinity Volt Monorepo Core

### Requirements ###
* Python 3.12.4
* Docker

### Projects ###
Clients Onboarding - iv_onboarding
Vehicle Register - iv_vehicle_register

### Build and Run (development) ###
```shell
cd [[directory_name]]
pip install -r requirements.txt
python main.py
```
You can see the project running in http://localhost:8090

*WARN: If you're running this way you can run only one project at time 'cause the port will be in use.*

### Endpoints ###

### Run with Docker compose ###
In the root directory run below command
```shell
docker-compose up --build
```
This will generate all images and run all projects at same time.

### Mapped Ports ###
To access each microservice you can use this mapped ports.
1. iv_onboarding - **8090**
2. iv_vehicle_register - **8091**

### Testing Microsservice Access ###
After run docker-compose with success you can try access the swagger and see if all services are up with this url:
http://localhost:{{port}}/ui
