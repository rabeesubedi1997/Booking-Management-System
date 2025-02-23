import React from 'react';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Cancelled Bookings</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>© 2023 Your Company</p>
            </footer>
        </div>
    );
};

export default Layout;