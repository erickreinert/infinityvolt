from api.Veiculos import update
import pytest
from pytest_bdd import scenario, given, when, then
from werkzeug.exceptions import NotFound

@scenario('features/update.feature', 'Update non-existing vehicle')
def test_update_non_existing_vehicle():
    pass

@given('a non-existing vehicle in the database')
def non_existing_vehicle(non_existing_id):
    pass

@when('the system attempts to update their info')
def get_update_id(non_existing_id):
    pass

@then('the system raises a warning message')
def validate_vehicle(non_existing_id, app, vehicle):

    with app.app.app_context():
        response = update(non_existing_id, vehicle)
        assert response.status_code == 404, f"Expected 404 but got {response}"