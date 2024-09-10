import React from "react";

const UserCommentContainer = (props) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3>What our customers are saying</h3>
      {props.children}
    </div>
  );
};

export default UserCommentContainer;
