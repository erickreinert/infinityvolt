from api.clientes import delete
from werkzeug.exceptions import NotFound
import pytest
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
        with pytest.raises(NotFound):
            delete(non_existing_id)