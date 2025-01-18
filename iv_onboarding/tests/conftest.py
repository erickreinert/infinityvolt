import pytest
from infra.app import create_app
import os
@pytest.fixture
def app(monkeypatch):
    monkeypatch.setenv("DATABASE_URL", "sqlite:///:memory:")
    app = create_app() 
    with app.app.app_context():
        yield app

@pytest.fixture
def client(app):
    return app.test_client()

@pytest.fixture
def user():
    return {}

@pytest.fixture
def duplicated_user():
    return {}

@pytest.fixture
def another_user():
    return {}

@pytest.fixture
def first_name():
    return 'JOSELITO'

@pytest.fixture
def birthdate():
    return '05-08-1974'

@pytest.fixture
def phone_number():
    return '21888666888'

@pytest.fixture
def email():
    return 'joselito@semnocao.com.br'

@pytest.fixture
def duplicated_email():
    return 'joselito2@semnocao.com.br'

@pytest.fixture
def non_existing_id():
    return '7jAdjCHbHyKKNd6ZV3Ud2b'

@pytest.fixture
def existing_user_data():
    user_kwargs = {
        'user_id': 'jAuq8nDQqXSDFw4xF3T8Rf',
        'name': 'GIL',
        'lastname': 'BROTHER',
        'birthdate': '29-07-1957',
        'phone': '21929296764',
        'email': 'gil@away.com.br',
        'status': 1
    }

    return user_kwargs
