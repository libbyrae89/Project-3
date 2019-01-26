import React from 'react';

const NavBar = () => {
    return(
        <div>
            <header id="header">
						<div className="inner">

								<a href="index.html" className="logo">
									<span className="symbol"><img src="images/logo.svg" alt="" /></span><span className="title">Reclaiming Pink</span>
								</a>
								<nav>
									<ul>
										<li><a href="#menu">Menu</a></li>
									</ul>
								</nav>

						</div>
					</header>
        <nav id="menu"><div className="inner">
						<h2>Menu</h2>
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="generic.html">Ipsum veroeros</a></li>
							<li><a href="generic.html">Tempus etiam</a></li>
							<li><a href="generic.html">Consequat dolor</a></li>
							<li><a href="elements.html">Elements</a></li>
						</ul>
					</div><a className="close" href="#menu">Close</a></nav>
    </div>
    )
};

export default NavBar;