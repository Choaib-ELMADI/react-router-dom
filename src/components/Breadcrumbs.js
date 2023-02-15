import { useLocation, Link } from 'react-router-dom';

import './Breadcrumbs.css';



function Breadcrumbs() {
    const location = useLocation();

    let currentLink = '';
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${ crumb }`

            return (
                <div className='crumb' key={ crumb }>
                    <Link className='crumb-link' to={ currentLink }>{ crumb }</Link>
                </div>
            )
        })

    return (
        <div className='app__crumbs'>
            { crumbs }
        </div>
    );
};

export default Breadcrumbs;