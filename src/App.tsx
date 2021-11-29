import React from 'react';

import "./global.css"
import SearchUsers from 'Components/Page/SearchUsers/SearchUsers';
import User from 'Components/Page/User/User';
function App() {
    return (
        <>
            <div className="container">
                <div className="block">
                    <SearchUsers/>
                    <User/>
                </div>
            </div>
        </>
    );
}

export default App;





