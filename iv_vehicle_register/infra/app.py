from flask import render_template
import connexion
from connexion.resolver import RestyResolver
from flask_cors import CORS
from models.db import db
from domain.entities.veichle import Vehicles
import os
from infra.consumer import start_consumer

def create_app() -> connexion:
    app: connexion = connexion.App(__name__, specification_dir='../documentation/')
    app.add_api('vehicle_service.yml', resolver=RestyResolver('api'))
    CORS(app.app, resources={r'/api/*': {'origins': '*'}}, methods=['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'])

    app.app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
    app.app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.app.config["SQLALCHEMY_ECHO"] = True
    db.init_app(app.app)

    with app.app.app_context():
        db.create_all()
        start_consumer(app)
    return app