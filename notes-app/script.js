const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

/* LOAD NOTES */

function loadNotes() {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  notesContainer.innerHTML = "";

  savedNotes.forEach((text) => {
    createNote(text);
  });
}

/* SAVE NOTES */

function saveNotes() {
  const notes = document.querySelectorAll(".input-box");
  const data = Array.from(notes).map((note) => note.innerText);
  localStorage.setItem("notes", JSON.stringify(data));
}

/* CREATE NOTE */

function createNote(text = "") {
  const inputBox = document.createElement("p");
  inputBox.className = "input-box";
  inputBox.contentEditable = true;
  inputBox.innerText = text;

  const img = document.createElement("img");
  img.src = "images/delete.png";

  img.addEventListener("click", () => {
    inputBox.remove();
    saveNotes();
  });

  inputBox.addEventListener("input", saveNotes);

  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
}

/* BUTTON */

createBtn.addEventListener("click", () => {
  createNote();
  saveNotes();
});

/* START */

loadNotes();
