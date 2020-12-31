import React, { useEffect } from "react";
import { Fieldset } from "primereact/fieldset";
import { connect } from "react-redux";
import { Button } from "primereact/button";
import { REMOVE_BUG } from "../reducers/bugs";

const Bug = (props) => {
  useEffect(() => {
    console.log("BUG PROPS", props.bug);
    if (!props.bug) {
      props.history.push("/NotFoundPage");
    }
  }, []);

  const redirectToForm = () => {
    props.history.push(`/bug/form/${bug.id}`);
  };

  const deleteBug = () => {
    console.log("deleted");
    props.dispatch(REMOVE_BUG({ id: props.bug.id }));
    props.history.push("/");
  };
  const { bug } = props;
  return (
    <div>
      <Fieldset className="p-d-flex " legend={bug && bug.id}>
        <p>title : {bug && bug.title}</p>
        <p>description : {bug && bug.description} </p>
        <p>resolved : {bug && bug.resolved.toString()}</p>
        <Button
          className="p-button-rounded p-button-info"
          label="Modify"
          onClick={() => redirectToForm()}
        />
        <Button
          className="p-button-rounded p-button-danger"
          label="Delete Bug"
          onClick={() => deleteBug()}
        />
      </Fieldset>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    bug: state.bugs.find((bug) => bug.id.toString() === props.match.params.id),
  };
};
export default connect(mapStateToProps)(Bug);
