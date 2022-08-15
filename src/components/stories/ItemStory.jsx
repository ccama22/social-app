import React from "react";

const ItemStory = ({ story }) => {
  // modificar componente para visualizar el comentario, foto, fecha y hora
  // del prop story
  console.log("saw:", story);

  return (
    <div>
      <div
        className="item-story rounded-md shadow-md shadow-gray-300 p-5 my-5"
        style={{ color: "black", backgroundColor: "white" }}
      >
        {
          <div>
            <p style={{ color: "black" }}>{story.comment}</p>
            <img
              src={story.photo}
              width="140px"
              height="140px"
              style={{ marginTop: "13px" }}
            />
          </div>
        }
      </div>
    </div>
  );
};

export default ItemStory;
