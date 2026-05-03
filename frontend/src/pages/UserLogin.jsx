import React from 'react';

const UserLogin = () => {
    return (
        <div>
            <form>
                <h3>What's your email</h3>
                <input required type="email" placeholder="email@example.com" />
                <h3>Enter Password</h3>
                <input required type="password" placeholder="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default UserLogin;
