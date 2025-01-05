from api.clientes import create, update, delete, id1
from domain.entities.user import User

from werkzeug.exceptions import BadRequest

import pytest
from pytest_bdd import scenario, given, when, then

@scenario('features/create.feature', 'Create new user')
def test_create_new_user():
    pass

@when('a user fills up a first name')
def first_name(user, first_name):
    user['nome'] = first_name

@when('a user fills up a last name')
def last_name():
    pass

@when('a user fills up a birthdate')
def birthdate(user, birthdate):
    user['nascimento'] = birthdate

@when('a user fills up a phone number')
def phone(user, phone_number):
    user['telefone'] = phone_number

@when('a user fills up an e-mail')
def email(user, email):
    user['email'] = email

@then('the system creates the user and returns a success code')
def create_user(user):
    response = create(user)

    assert response == {'status': 201, 'user': user}

@scenario('features/create.feature', 'Attempt to create duplicate user')
def test_create_duplicate_user():
    pass

@given('an existing user account registered')
def existing_account(user, first_name, birthdate, phone_number, email):
    user['nome'] = first_name
    user['nascimento'] = birthdate
    user['telefone'] = phone_number
    user['email'] = email

    user_creation = create(user)

@when('someone uses the existing user\'s email to register a new account')
def duplicate_email(another_user, email):
    another_user['nome'] = 'GIL'
    another_user['nascimento'] = '29-07-1957'
    another_user['telefone'] = '21929296764'
    another_user['email'] = email

@then('the system blocks the new registration')
def create_duplicate(another_user):

    with pytest.raises(BadRequest):
        create(another_user)

@scenario('features/update.featur', 'Update non-existing user')
def test_update_non_existing_user():
    pass

@when('the system attempts to update their info')
def get_update_id(non_existing_id):
    pass

@given('a non-existing user in the database')
def non_existing_user(non_existing_id):
    pass

@then('the system raises a warning message')
def validate_user(non_existing_id):

    with pytest.raises(BadRequest):
        # User class won't be needed for validation
        update(non_existing_id, None)

@scenario('features/update.feature', 'Update existing user')
def test_update_user():
    pass

@given('an existing user in the database')
def get_existing_id(existing_user_data):
    user_instance = User(**existing_user_data)
    create(**user_instance)

@when('the system attempts to update their info')
def update_user_handler(existing_user_data):
    pass

@then('the system returns a success code')
def update_existing_user(existing_user_data):
    user_instance = User(**existing_user_data)
    response = update(existing_user_data['id'], user_instance)

    assert response == {'status': 200, 'user': user_instance.to_dict()}

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
def delete_non_existing_user(non_existing_id):
    with pytest.raises(BadRequest):
        delete(non_existing_id)

@scenario('features/delete.feature', 'Delete existing user')
def test_delete_existing_user():
    pass

@given('a user exists in the database')
def existing_user():
    assert id1 is not None

@then('the system deletes the user')
def delete_existing_handler():
    pass

@then('returns a success code')
def delete_existing_user():
    response = delete(id1)

    assert response == {f"{id1} deletado com sucesso", 200}
