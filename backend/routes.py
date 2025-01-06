from app import app, db
from flask import request, jsonify

from utils.validations import validate_fields, validate_if_note_exists
from models import Note


@app.route('/api/notes', methods=['GET'])
def get_notes():
    notes = Note.query.all()
    notes_json = [note.to_json() for note in notes]

    return jsonify(notes_json)


@app.route('/api/notes', methods=['POST'])
def create_note():
    try:
        data = request.json

        required_fields = ["title", "category", "description", "status", "icon"]

        for field in required_fields:
            validate_fields(field, data, f'Missing required field: {field}')

        new_note = Note(
            title=data['title'],
            description=data['description'],
            status=data['status'],
            icon=data['icon'],
            category=data['category'],
        )

        db.session.add(new_note)
        db.session.commit()

        return jsonify(new_note.to_json()), 201


    except Exception as error:
        db.session.rollback()
        return jsonify({'error': str(error)}), 500


@app.route('/api/notes/<int:note_id>', methods=['DELETE'])
def delete_note(note_id):
    try:
        note = Note.query.get(note_id)

        validate_if_note_exists(note, f"Note with id {note_id} does not exist")

        db.session.delete(note)
        db.session.commit()

        return jsonify({"message": f"Note with id: {note_id} has been deleted."}), 200
    except Exception as error:
        db.session.rollback()
        return jsonify({'error': str(error)}), 404


@app.route('/api/notes/<int:note_id>', methods=['PATCH'])
def update_note(note_id):
    try:
        note = Note.query.get(note_id)

        validate_if_note_exists(note, f"Note with id {note_id} does not exist")

        data = request.json

        note.title = data.get('title', note.title)
        note.description = data.get('description', note.description)
        note.status = data.get('status', note.status)
        note.icon = data.get('icon', note.icon)
        note.category = data.get('category', note.category)

        db.session.commit()

        return jsonify(note.to_json()), 200
    except Exception as error:
        db.session.rollback()
        return jsonify({'error': str(error)}), 500
