import React from "react"


const Header = () => {

    return (

        <div className="wrapper">
            <div className="inner-wrapper-flex">
                <div className="ham-reminder">
                    <div className="hamburder">
                        
                    </div>
                    <div className="reminder">
                        <div className="logo">
                            <img className="image" alt="logo" src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"></img>
                        </div>
                        <div className="Keep">Keep</div>
                    </div>
                </div>
                <div className="search-settings">
                    <div className="search"></div>
                    <div className="refresh"></div>
                    <div className="something"></div>
                    <div className="settings"></div>
                </div>
                <div className="login-box">
                    <div className="box"></div>
                    <div className="login"></div>
                </div>
            </div>
        </div>
    );
}

export default Header