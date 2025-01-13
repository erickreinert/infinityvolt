from api.clientes import create
from pytest_bdd import scenario, given, when, then
@scenario('features/create.feature', 'Attempt to create duplicate user')
def test_create_duplicate_user():
    pass

@given('an existing user account registered')
def existing_account(duplicated_user, first_name, birthdate, phone_number, duplicated_email, app):
    duplicated_user['nome'] = first_name
    duplicated_user['nascimento'] = birthdate
    duplicated_user['telefone'] = phone_number
    duplicated_user['email'] = duplicated_email
    with app.app.app_context():
        create(duplicated_user)

@when('someone uses the existing user\'s email to register a new account')
def duplicate_email(another_user, duplicated_email):
    another_user['nome'] = 'GIL'
    another_user['nascimento'] = '29-07-1957'
    another_user['telefone'] = '21929296764'
    another_user['email'] = duplicated_email

@then('the system blocks the new registration')
def create_duplicate(another_user, app):
    with app.app.app_context():
        response = create(another_user)
        assert response.status_code == 400, f"Expected 400 but got {response.status}"
