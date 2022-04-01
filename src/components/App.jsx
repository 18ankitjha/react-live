import React from "react";
import emojipedia from "../emojipedia"
import Entry from "./entry";

function creatEmoji(EmojiTerm) {
  return (
    <Entry
      key={EmojiTerm.id}
      emoji={EmojiTerm.emoji}
      name={EmojiTerm.name}
      description={EmojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

        {emojipedia.map(creatEmoji)}
        
      </dl>
    </div>
  );
}

export default App;
