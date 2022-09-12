import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <>{children}</>
        </div>
      </div>
    </div>
  );
};
