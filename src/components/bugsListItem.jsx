const { NavLink } = require("react-router-dom");

const BugsListItem = ({ bug }) => {
  return (
    <div>
      <NavLink to={`/bug/${bug.id}`}>{bug.id}</NavLink>
      <p>{bug.description}</p>
      <p>{bug.resolved.toString()}</p>
    </div>
  );
};

export default BugsListItem;
