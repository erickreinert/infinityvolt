from api.clientes import create
from pytest_bdd import scenario, given, when, then
@scenario('features/create.feature', 'Attempt to create duplicate user')
def test_create_duplicate_user():
    pass

@given('an existing user account registered')
def existing_account(duplicated_user, first_name, last_name, birthdate, phone_number, duplicated_email, app):
    duplicated_user['name'] = first_name
    duplicated_user['lastname'] = last_name
    duplicated_user['birthdate'] = birthdate
    duplicated_user['phone'] = phone_number
    duplicated_user['email'] = duplicated_email
    duplicated_user['correlation_id'] = "123123"
    with app.app.app_context():
        create(duplicated_user)

@when('someone uses the existing user\'s email to register a new account')
def duplicate_email(another_user, duplicated_email):
    another_user['name'] = 'GIL'
    another_user['lastname'] = 'GOMES'
    another_user['birthdate'] = '29-07-1957'
    another_user['phone'] = '21929296764'
    another_user['email'] = duplicated_email
    another_user['correlation_id'] = "321321"

@then('the system blocks the new registration')
def create_duplicate(another_user, app):
    with app.app.app_context():
        response = create(another_user)
        assert response.status_code == 400, f"Expected 400 but got {response.status}"
