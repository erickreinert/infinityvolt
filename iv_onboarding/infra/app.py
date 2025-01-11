from flask import render_template
import connexion
from connexion.resolver import RestyResolver
from flask_cors import CORS
from models.db import db

def create_app() -> connexion: 
    app: connexion = connexion.App(__name__, specification_dir='../documentation/')
    app.add_api('user_service.yml', resolver=RestyResolver('api'))
    CORS(app.app,resources=r'/api/*',methods=['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'])
    db.create_all()
    return app