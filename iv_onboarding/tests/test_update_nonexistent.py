from api.clientes import update
from pytest_bdd import scenario, given, when, then

@scenario('features/update.feature', 'Update non-existing user')
def test_update_non_existing_user():
    pass

@when('the system attempts to update their info')
def get_update_id(non_existing_id):
    pass

@given('a non-existing user in the database')
def non_existing_user(non_existing_id):
    pass

@then('the system raises a warning message')
def validate_user(non_existing_id, app, user):

    with app.app.app_context():
        response = update(non_existing_id, user)
        assert response.status_code == 404, f"Expected 404 but got {response}"
