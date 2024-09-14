import React from "react";

const ProfileContainer = (props) => {
  return (
    <section className="max-w-[1280px] lg:mx-auto mx-[20px] grid grid-cols-1 md:grid-cols-6 gap-y-[20px] md:gap-x-[20px]">
      {props.children}
    </section>
  );
};

export default ProfileContainer;
