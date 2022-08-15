import React from "react";
import ItemStory from "./ItemStory";

const ListStories = ({ stories }) => {
  return (
    <div className="list-stories">
      {
        // imprimir la lista de historias utilizando el componente
        stories.length !== 0 &&
          stories.map((story) => <ItemStory story={story} />)
      }
    </div>
  );
};

export default ListStories;
