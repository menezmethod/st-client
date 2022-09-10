import React from 'react';
import {RegisterForm} from "./features/auth/components/RegisterForm";
import {LoginForm} from "./features/auth/components/LoginForm";

function App() {
    document.body.style.backgroundColor = "#f4f5f7";
    document.body.style.margin = "0";
    // const navigate = useNavigate();

    return (
        <div className="App">
            <header className="App-header">
                <LoginForm onSuccess={() => ('/')}/>
            </header>
        </div>
    );
}

export default App;
