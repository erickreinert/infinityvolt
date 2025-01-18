import pytest
from infra.app import create_app

@pytest.fixture
def app(monkeypatch):
    monkeypatch.setenv("DATABASE_URL", "sqlite:///:memory:")
    app = create_app()
    with app.app.app_context():
        yield app

@pytest.fixture
def vehicle():
    return {}

@pytest.fixture
def brand():
    return 'Honda'

@pytest.fixture
def model():
    return 'Civic'

@pytest.fixture
def model_year():
    return 2015

@pytest.fixture
def vehicle_autonomy():
    return 400

@pytest.fixture
def correlation_id(): 
    return "123123123"

@pytest.fixture
def non_existing_id():
    return 'gcWp3RSAkpjVzDiRe59DXn'
