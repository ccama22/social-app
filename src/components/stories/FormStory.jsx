import React, { useEffect, useState } from "react";
import { useRef } from "react";

const FormStory = ({ saveStory }) => {
  const [form, setForm] = useState({
    comment: "",
    photo: "",
  });
  const [error, setError] = useState(null);
  const ref = useRef();
  const clearForm = () => {
    setForm({
      comment: "",
      photo: "",
    });
    setError("");
    ref.current.value = "";
    // limpiar el input file
    // puedes utilizar cualquier metodo
  };

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileInput = (event) => {
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      setForm({
        ...form,
        photo: e.target.result,
      });
    };
  };

  const submitForm = () => {
    // validar que al menos se ingrese el comentario
    //
    console.log("dat paisana", form.comment);
    if (form.comment === "" && form.photo !== "") {
      setError("Ingrese el comentario porfacor");
    } else if (form.photo === "" && form.comment !== "") {
      setError("Ingrese una imagen porfavor");
    } else if (form.comment !== "" && form.photo !== "") {
      console.log("FORM CCAMA", form);
      saveStory(form);
      clearForm();
    } else if (form.comment == "" && form.photo == "") {
      setError("Ingrese todos los datos");
      console.log("Error");
    }
  };

  return (
    <form>
      <div className="form-story rounded-md shadow-md shadow-gray-300 p-5">
        <div className="flex mb-3">
          <textarea
            className="input-story rounded-md p-3 border-solid border-2 border-slate-200"
            rows="3"
            placeholder="Qué estas pensando?"
            value={form.comment}
            onChange={handleInputChange}
            name="comment"
          ></textarea>
        </div>
        <div className="flex">
          <div>
            <input
              type="file"
              accept="image/*"
              name="photo"
              onChange={handleFileInput}
              ref={ref}
            />
          </div>
          <button
            onClick={() => {
              submitForm();
            }}
            type="button"
            className="ml-auto w-96 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Publicar
          </button>
        </div>
        {error && (
          <div
            style={{
              backgroundColor: "red",
              marginTop: "5px",
              color: "white",
              padding: "6px",
              paddingLeft: "19px",
              borderRadius: "5px",
            }}
          >
            Error: {error}
          </div>
        )}
      </div>
    </form>
  );
};

export default FormStory;
