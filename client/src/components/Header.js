import React from "react";

function Header ({handleToggleDarkMode}) {
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <span class="navbar-text"> Profile pic and sign out link </span>
                    {/* change color of navbar */}
                </div>
            </nav>
        </div>
    )
}

export default Header;