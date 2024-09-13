import { React } from "react";
import { Link } from "react-router-dom";
import EditIcon from "../../assets/shipping/edit-icon.svg";

const ButtonEdit = () => {
  return (
    <Link to="/check-out" className="flex flex-row items-center">
      <img src={EditIcon} alt="edit-icon" />
      <span className="text-[18px] leading-[144.444%] text-[#1a162e] font-[400]">
        Edit
      </span>
    </Link>
  );
};

export default ButtonEdit;
