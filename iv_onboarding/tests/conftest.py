import pytest

@pytest.fixture
def user():
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
def non_existing_id():
    return '7jAdjCHbHyKKNd6ZV3Ud2b'
