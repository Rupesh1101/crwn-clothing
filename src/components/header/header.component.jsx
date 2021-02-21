import React from 'react';
import {connect} from 'react-redux';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='options' to='/shop'>SHOP</Link>
            <Link className='options' to=''>CONTACT</Link>
            {
                currentUser ?
                <div className='options' onClick={() => auth.signOut()}>SIGN OUT</div>
                : <Link className='options' to='/signin'>SIGN IN</Link>   
            }
            <CartIcon />
        </div>
    </div>
)

const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);