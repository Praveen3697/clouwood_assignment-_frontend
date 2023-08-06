import React from "react";

const Light = ({ lightState, onToggle, lightNumber }) => {
  const handleToggle = () => {
    onToggle(!lightState);
  };

  return (
    <div className="toggler">
      <span className="lightLabel">{`Light ${lightNumber}`}</span>
      <label className="switch">
        <input type="checkbox" checked={lightState} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Light;
