# Infinity Volt Onboarding MS

This is the Infinity Volt user onboarding MS

### Requirements ###
* Python 3.12.4
* Docker

### Build and Run (development) ###
```shell
pip install -r requirements.txt
python main.py
```
You can see the project running in http://localhost:8090

### Endpoints ###


### Run with Docker ###
You can build the docker image with the below code.

```shell
docker image build -t iv_user_onboarding .
```

Now you can run the container image with this command
```shell
docker run -p 8090:3001 iv_user_onboarding 
```
