import './Menu.css'
import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <section className='Menu'>
      <div className='Menu__options'>
        <NavLink className="Menu__option" to={"/"}>
          <div>
            Check my availability
          </div>
        </NavLink>
        <NavLink className="Menu__option" to={"/"}>
            Go to calendar view
        </NavLink>
        <NavLink className="Menu__option" to={"/"}>
          Copy my calendar link
        </NavLink>
      </div>
    </section>
  )
}
