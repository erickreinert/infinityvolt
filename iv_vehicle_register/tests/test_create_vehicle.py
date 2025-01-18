from api.Veiculos import create
from pytest_bdd import scenario, when, then

@scenario('features/create.feature', 'Register new vehicle')
def test_create_vehicle():
    pass

@when('a user fills up a vehicle brand')
def vehicle_brand(vehicle, brand, correlation_id):
    vehicle['brand_name'] = brand
    vehicle['correlation_id'] = correlation_id

@when('a user fills up a vehicle model')
def vehicle_model(vehicle, model):
    vehicle['model_name'] = model

@when('a user fills up a model year')
def model_year(vehicle, model_year):
    vehicle['model_year'] = model_year

@when('a user fills up the vehicle\'s autonomy')
def autonomy(vehicle, vehicle_autonomy):
    vehicle['autonomy'] = vehicle_autonomy

@then('the system registers the vehicle and returns a success code')
def create_vehicle(vehicle, app):
    with app.app.app_context():
        response = create(vehicle)
        assert response.status_code == 201, f"Expected 201 but got {response}"