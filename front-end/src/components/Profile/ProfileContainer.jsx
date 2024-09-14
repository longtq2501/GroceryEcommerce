import React from "react";

const ProfileContainer = (props) => {
  return (
    <section className="max-w-[1280px] lg:mx-auto mx-[20px] flex flex-col gap-[20px]">
      {props.children}
    </section>
  );
};

export default ProfileContainer;
