import { NavSection } from './NavSection';
import { NavItem } from './NavItem';
import { NavLink } from './NavLink';
import { Nav } from './Nav';

export const AppNav = () => {

    return (
        <Nav backgroundColor= "#33ccff" color='white'>
            <NavSection jc="flex-start">
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/createflight"> Add a Flight</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/flights">Flight List</NavLink>
                </NavItem>
                
            </NavSection>
        </Nav>
    );
}