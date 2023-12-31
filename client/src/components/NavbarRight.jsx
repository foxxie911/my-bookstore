import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/NavbarRight";
import { useState } from "react";
import { useHomeContext } from "../pages/Home";

const NavbarRight = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logout } = useHomeContext();
  return (
    <Wrapper>
      <button
        type='button'
        className='btn logout-btn'
        onClick={() => {
          setShowLogout(!showLogout);
        }}
      >
        <FaUserCircle />
        {user?.fname || "Guest"}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type='button' className='dropdown-btn' onClick={logout}>
          Logout
        </button>
      </div>
    </Wrapper>
  );
};
export default NavbarRight;
