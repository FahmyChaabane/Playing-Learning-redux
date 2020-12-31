import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { ListBox } from "primereact/listbox";
import { ADD_BUG, EDIT_BUG } from "../reducers/bugs";
import { v4 as uuid4 } from "uuid";

const BugForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [resolved, setResolved] = useState(false);

  const categories = [
    { name: "Blocker" },
    { name: "High" },
    { name: "Meduim" },
    { name: "Low" },
  ];

  const handleChangeTitle = ({ currentTarget: input }) => {
    console.log(input.value);
    setTitle(input.value);
  };

  const handleChangeDescription = ({ currentTarget: input }) => {
    console.log(input.value);
    setDescription(input.value);
  };

  const handleChangeCategory = ({ value }) => {
    console.log(value.name);
    setCategory(value);
  };

  const handleChangeResolved = (input) => {
    console.log(input.value);
    setResolved(input.value);
  };

  useEffect(() => {
    if (!props.bug && props.match.params.id)
      props.history.push("/NotFoundPage");
    if (props.bug) {
      setTitle(props.bug.title);
      setDescription(props.bug.description);
      setCategory({ name: props.bug.category });
      setResolved(props.bug.resolved);
    }
  }, []);

  const SubmitForm = (e) => {
    e.preventDefault();
    console.log("form submitted");
    if (props.match.params.id)
      props.dispatch(
        EDIT_BUG({
          id: props.match.params.id,
          title,
          description,
          category: category.name,
          resolved,
        })
      );
    else
      props.dispatch(
        ADD_BUG({
          id: uuid4(),
          title,
          description,
          category: category.name,
          resolved,
        })
      );
    props.history.push("/");
  };

  return (
    <div>
      <h3>Form</h3>
      <div className="p-d-flex p-jc-lg-start">
        <form onSubmit={SubmitForm}>
          <div className="p-field p-col-12 p-md-6">
            <label htmlFor="title">Title</label>
            <InputText
              id="title"
              aria-describedby="title-help"
              className="p-d-block"
              value={title}
              onChange={handleChangeTitle}
            />
          </div>
          <div className="p-field p-col-12">
            <label htmlFor="description">Description</label>
            <InputTextarea
              id="description"
              aria-describedby="description-help"
              rows="4"
              className="p-d-block"
              value={description}
              onChange={handleChangeDescription}
            />
          </div>
          <div className="p-field p-col-12 p-md-3">
            <div className="card">
              <label htmlFor="category">Category</label>
              <ListBox
                value={category}
                options={categories}
                onChange={handleChangeCategory}
                optionLabel="name"
                che
                style={{ width: "15rem" }}
              />
            </div>
          </div>
          <div className="p-field p-col-12 p-md-3">
            <span> Status </span>
            <div className="p-formgroup-inline">
              <div className="p-field-checkbox">
                <RadioButton
                  inputId="true"
                  name="resolved"
                  value={true}
                  onChange={handleChangeResolved}
                  checked={resolved === true}
                />
                <label htmlFor="true">True</label>
              </div>
              <div className="p-field-checkbox">
                <RadioButton
                  inputId="false"
                  name="resolved"
                  value={false}
                  onChange={handleChangeResolved}
                  checked={resolved === false}
                />
                <label htmlFor="false">False</label>
              </div>
            </div>
          </div>
          <div className="p-field p-col-12">
            <Button label="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const { id } = props.match.params;
  return {
    bug: state.bugs.find((bug) => bug.id.toString() === id),
  };
};

export default connect(mapStateToProps)(BugForm);
