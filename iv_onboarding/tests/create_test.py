from api.clientes import create
from pytest_bdd import scenario, when, then

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
def create_user(user, app):
    with app.app.app_context():
        response = create(user)
        assert response.status_code == 201, f"Expected 201 but got {response.status}"