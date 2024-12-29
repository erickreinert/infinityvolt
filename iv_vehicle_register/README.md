# Infinity Volt Vehicle Register MS

This is the Infinity Volt Vehicle Register MS

### Requirements ###
* Python 3.12.4
* Docker

### Build and Run (development) ###
```shell
pip install -r requirements.txt
python main.py
```
You can see the project running in http://localhost:8091

### Endpoints ###


### Run with Docker ###
You can build the docker image with the below code.

```shell
docker image build -t iv_vehicle_register .
```

Now you can run the container image with this command
```shell
docker run -p 8090:3001 iv_vehicle_register 
```
