import React, { useEffect, useState } from "react";
import FormStory from "./FormStory";
import ListStories from "./ListStories";

const StoriesContainer = () => {
  const [stories, setStories] = useState([]);

  // agregar logica para optener la lista de historias desde localstorage
  // utilizar useEffect
  // let dataSto;
  useEffect(() => {
    getInfo();
  }, []);

  function getInfo() {
    const dataStories = JSON.parse(localStorage.getItem("list_stories"));
    console.log("ccama cruz", dataStories);
    if (dataStories !== null) {
      setStories(dataStories);
    } else {
      console.log("sss");
    }
  }

  // const [dataList, setDataList] = useState(dataSto || []);

  const saveStory = (story) => {
    console.log("ccama", story);
    const newStory = {
      id: Date.now(),
      ...story,
    };
    const storiesList = [...stories, newStory];
    setStories(storiesList);
    // guardar lista de historias en localstorage
    localStorage.setItem("list_stories", JSON.stringify(storiesList));
  };

  return (
    <div className="stories-container">
      <FormStory saveStory={saveStory} />
      {/* utiliza el componente <ListStories /> y envia la lista de historias */}
      {<ListStories stories={stories} />}
    </div>
  );
};

export default StoriesContainer;
