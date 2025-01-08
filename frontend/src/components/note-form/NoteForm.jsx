import FormButton from "./FormButton";
import FormLabelInput from "./FormLabelInput";
import FormLabelTextarea from "./FormLabelTextArea";
import FormRadioGroup from "./FormRadioGroup";
import "./NoteForm.css";

function NoteForm() {
  return (
    <form className="form">
      <header className="form__header">
        <h2 className="form__title">Note details</h2>
        <FormButton
          type="button"
          label="&times;"
          className="form__button-close"
        />
      </header>
      <main className="form__body">
        <FormLabelInput
          label="Note name"
          id="note-name"
          name="note-name"
          placeholder="Enter note name"
          required
        />
        <FormLabelInput
          label="Category"
          id="category"
          name="category"
          placeholder="Enter a short category"
        />
        <FormLabelTextarea
          label="Description"
          id="description"
          name="description"
          placeholder="Enter a short description"
        />
        <FormRadioGroup
          legend="Icon"
          name="icon"
          options={[
            { value: "👩‍💻", label: "👩‍💻" },
            { value: "💬", label: "💬" },
            { value: "☕", label: "☕" },
            { value: "🏋️", label: "🏋️" },
            { value: "📚", label: "📚" },
            { value: "⏰", label: "⏰" },
          ]}
        />
        <FormRadioGroup
          legend="Status"
          name="status"
          options={[
            { value: "in-progress", label: "In Progress" },
            { value: "completed", label: "Completed" },
            { value: "wont-do", label: "Won't do", defaultChecked: true },
          ]}
        />
      </main>
      <footer className="form__footer">
        <FormButton
          type="button"
          label="Delete"
          className="form__delete-button"
        />
        <FormButton type="submit" label="Save" className="form__save-button" />
      </footer>
    </form>
  );
}

export default NoteForm;
