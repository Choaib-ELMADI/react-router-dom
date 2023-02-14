import { NavLink, Outlet } from 'react-router-dom';

const HelpLayout = () => {
  return (
    <div className='app__help-layout'>
        <h2>Website Help</h2>
        <p>Occaecat dolore culpa sit dolor duis eu qui anim culpa veniam.</p>

        <nav>
            <NavLink to='faq' >View the FAQ</NavLink>
            <NavLink to='contact' >Contact Us</NavLink>
        </nav>

        <Outlet />
    </div>
  );
};

export default HelpLayout;