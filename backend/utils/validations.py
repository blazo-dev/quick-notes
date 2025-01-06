from models import Note


def validate_fields(field: str, fields: list[str] | dict, error_message: str) -> None:
    if field not in fields or not fields.get(field):
        raise ValueError(error_message)


def validate_if_note_exists(note: Note, error_message: str) -> None:
    if note is None:
        raise ValueError(error_message)

