import React from "react";


const Footer = () => {

    return (
        <footer id="footer">
        <div className="inner">
            <section>
                <h2>Get in touch</h2>
                <form method="post" action="#">
                    <div className="fields">
                        <div className="field half">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </div>
                        <div className="field half">
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className="field">
                        <div className="textarea-wrapper"><textarea name="message" id="message" placeholder="Message" rows="1" style={{overflow: "hidden", resize: "none", height: "59px"}}></textarea></div>
                        </div>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send" className="primary" /></li>
                    </ul>
                </form>
            </section>
            <section>
                <h2>Follow</h2>
                <ul className="icons">
                    <li><a href="#" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
                </ul>
            </section>
        </div>
    </footer>
    ); 
}

export default Footer; 