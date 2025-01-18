from api.clientes import id1, delete
from pytest_bdd import scenario, given, when, then
import pytest

@pytest.skip
    
@scenario('features/delete.feature', 'Delete existing user')
def test_delete_existing_user():
    pass

@given('a user exists in the database')
def existing_user():
    assert id1 is not None

@when('the system attempts to delete them')
def delete_handler():
    pass

@then('the system deletes the user')
def delete_existing_handler():
    pass

@then('returns a success code')
def delete_existing_user(app):
    with app.app.app_context():
        response = delete(id1)

        assert response.status_code == 200