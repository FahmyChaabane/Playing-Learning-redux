import React from "react";
import { DataScroller } from "primereact/datascroller";
import { Button } from "primereact/button";
import { connect } from "react-redux";
import "./feed.css";

const Feed = (props) => {
  const itemTemplate = (data) => {
    return (
      <div className="product-item ">
        <div className="product-detail">
          <div className="product-name">{data.id}</div>
          <p>
            <span className="product-name custom-title">{data.title}</span>
          </p>
          <i className="pi pi-file"></i>
          <span className="product-category custom-category">
            {data.category}
          </span>
        </div>
        <div className="product-action">
          <Button
            label="View Details"
            icon="pi pi-angle-double-right"
            className="p-button-raised p-button-warning p-button-text p-button-rounded"
            onClick={() => {
              props.history.push(`/bug/${data.id}`);
            }}
          />
          <span
            className={`p-tag p-tag-rounded badge-custom p-tag-${
              data.resolved ? "success" : "danger"
            }`}
          >
            {data.resolved ? "resolved" : "not resolved"}
          </span>
        </div>
      </div>
    );
  };

  if (!props.bugs.length)
    return <span> there is bug, you can still add one</span>;

  return (
    <div>
      <h3>FEED</h3>
      <div className="card">
        <DataScroller
          value={props.bugs}
          itemTemplate={itemTemplate}
          rows={5}
          inline
          scrollHeight="500px"
          header="List of Bugs"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { bugs: state.bugs };
};
export default connect(mapStateToProps)(Feed);
