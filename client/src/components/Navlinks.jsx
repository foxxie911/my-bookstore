import { useHomeContext } from "../pages/Home";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const Navlinks = ({isBigSidebar}) => {
    const {toggleSidebar, user} = useHomeContext();
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className='nav-link'
            onClick={isBigSidebar? null : toggleSidebar}
            end
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default Navlinks;