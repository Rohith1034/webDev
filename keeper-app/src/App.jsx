import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note.jsx";
import notes from "./note.js";

function createContent(noteItems) {
    return <Note key={noteItems.key} heading = {noteItems.title} content = {noteItems.content}/>;
}

function App() {
    return <div>
        <Header></Header>
        {notes.map(createContent)};
        <Footer></Footer>
    </div>
}

export default App;