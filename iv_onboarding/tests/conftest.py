import pytest
from infra.app import create_app
from unittest.mock import MagicMock

@pytest.fixture
def app(monkeypatch):
    monkeypatch.setenv("DATABASE_URL", "sqlite:///:memory:")
    mock_producer = MagicMock()
    mock_producer.produce = MagicMock(return_value=None)
    mock_producer.flush = MagicMock(return_value=None)
    def mock_producer_init(*args, **kwargs):
        return mock_producer
    monkeypatch.setattr("confluent_kafka.Producer", mock_producer_init)
    def mock_send_broker_message(*args, **kwargs):
        print("Mensagem Kafka mockada", args, kwargs)
    monkeypatch.setattr("usecases.adapters.userRepository.UserRepository.sendBrokerMessage", mock_send_broker_message)
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
def last_name():
    return 'Teste'

@pytest.fixture
def birthdate():
    return '05-08-1974'

@pytest.fixture
def phone_number():
    return '11968372700'

@pytest.fixture
def email():
    return 'joselito@semnocao.com.br'

@pytest.fixture
def correlation_id():
    return '50'

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
