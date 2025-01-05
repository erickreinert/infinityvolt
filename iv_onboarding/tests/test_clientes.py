from api.clientes import create, update, delete
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

@when('the system attempts to update a user info')
def get_update_id(non_existing_id):
    pass

@when('the user does not exist in the database')
def non_existing_user(non_existing_id):
    pass

@then('the system raises a warning message')
def validate_user(non_existing_id):

    with pytest.raises(BadRequest):
        # User class won't be needed for validation
        update(non_existing_id, None)
