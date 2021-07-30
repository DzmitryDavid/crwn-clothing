import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './Sign.scss';

const Sign = () => (
    <div className="sign">
        <SignIn />
        <SignUp />
    </div>
)
export default Sign;