const addButton = document.getElementById("add");
const notes = JSON.parse(localStorage.getItem("notes"));

const updateLocalStorage = () => {
    const notesText = document.querySelectorAll("textarea");
    const notes = [];