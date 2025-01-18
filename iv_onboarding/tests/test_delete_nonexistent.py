from api.clientes import delete
from pytest_bdd import scenario, given, when, then

@scenario('features/delete.feature', 'Attempt to delete non-existing user')
def test_delete_non_existing_user():
    pass

@given('a user does not exist in the database')
def non_existing_user_to_delete(non_existing_id):
    pass

@when('the system attempts to delete them')
def delete_handler():
    pass

@then('the system raises a warning message')
def delete_non_existing_user(non_existing_id, app):
    with app.app.app_context():
        response = delete(non_existing_id)
        assert response.status_code == 404, f"Expected 404 but got {response}"