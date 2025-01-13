# @scenario('features/update.feature', 'Update non-existing user')
# def test_update_non_existing_user():
#     pass

# @when('the system attempts to update their info')
# def get_update_id(non_existing_id):
#     pass

# @given('a non-existing user in the database')
# def non_existing_user(non_existing_id):
#     pass

# @then('the system raises a warning message')
# def validate_user(non_existing_id):

#     with pytest.raises(BadRequest):
#         update(non_existing_id, None)

# @scenario('features/update.feature', 'Update existing user')
# def test_update_user():
#     pass

# @given('an existing user in the database')
# def get_existing_id(existing_user_data):
#     user_instance = User(**existing_user_data)
#     create(**user_instance)

# @when('the system attempts to update their info')
# def update_user_handler(existing_user_data):
#     pass

# @then('the system returns a success code')
# def update_existing_user(existing_user_data):
#     user_instance = User(**existing_user_data)
#     response = update(existing_user_data['id'], user_instance)

#     assert response == {'status': 200, 'user': user_instance.to_dict()}

# @scenario('features/delete.feature', 'Attempt to delete non-existing user')
# def test_delete_non_existing_user():
#     pass

# @given('a user does not exist in the database')
# def non_existing_user_to_delete(non_existing_id):
#     pass

# @when('the system attempts to delete them')
# def delete_handler():
#     pass

# @then('the system raises a warning message')
# def delete_non_existing_user(non_existing_id):
#     with pytest.raises(BadRequest):
#         delete(non_existing_id)

# @scenario('features/delete.feature', 'Delete existing user')
# def test_delete_existing_user():
#     pass

# @given('a user exists in the database')
# def existing_user():
#     assert id1 is not None

# @then('the system deletes the user')
# def delete_existing_handler():
#     pass

# @then('returns a success code')
# def delete_existing_user():
#     response = delete(id1)

#     assert response == {f"{id1} deletado com sucesso", 200}