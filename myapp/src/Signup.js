import React from 'react'
import './static/signup.css';

function Signup() {
    return (
            <div className="container">
                <div className="navigation">
                    <ol>
                        <li><a href="#" data-ref="name">Name</a></li>
                        <li><a href="#" data-ref="uname">Username</a></li>
                        <li><a href="#" data-ref="email">Email</a></li>
                        <li><a href="#" data-ref="viewpswd">Password</a></li>
                        <li><a href="#" data-ref="phone">Phone</a></li>
                    </ol>
                </div>
                <form id="sign-form" className="sign-form">
                    <ol className="questions">
                        <li>
                            <span><label htmlFor="name">Hi, What is your Name?</label></span>
                            <input className="active" id="name" name="name" type="text" placeholder="Enter your full name" autoFocus />
                        </li>
                        <li>
                            <span><label htmlFor="uname">& what shall we call you?</label></span>
                            <input id="uname" name="username" type="text" placeholder="Enter a username" autoFocus />
                        </li>
                        <li>
                            <span><label htmlFor="email">Enter you email</label></span>
                            <input id="email" name="email" type="text" placeholder="Email" autoFocus />
                        </li>
                        <li>
                            <span><label htmlFor="password">Choose a password</label></span>
                            <input id="viewpswd" name="password" type="text" placeholder="this your password" />
                            <input id="password" name="password" type="password" placeholder="make sure you dont forget" autoFocus />
                            <span id="show-pwd" className="view"></span>
                        </li>
                        <li>
                            <span><label htmlFor="phone">Enter your phone number</label></span>
                            <select name="countrycode" className="country"  >
                                <option data-countrycode="GB" value="91">(+91) INDIA </option>
                                <option data-countrycode="GB" value="44">(+44) UK </option>
                                <option data-countrycode="US" value="1">(+1) USA </option>
                                <optgroup label="Other countries">
                                    <option data-countrycode="DZ" value="213"> (+213)Algeria</option>
                                    <option data-countrycode="AD" value="376"> (+376) Andorra</option>
                                    <option data-countrycode="AO" value="244">(+244) Angola </option>
                                    <option data-countrycode="AI" value="1264"> (+1264) Anguilla</option>
                                    <option data-countrycode="AG" value="1268">(+1268) Antigua &amp; Barbuda </option>
                                    <option data-countrycode="AR" value="54">(+54) Argentina </option>
                                    <option data-countrycode="AM" value="374"> (+374) Armenia</option>
                                    <option data-countrycode="AW" value="297">(+297) Aruba </option>
                                    <option data-countrycode="AU" value="61"> (+61) Australia</option>
                                    <option data-countrycode="AT" value="43">(+43) Austria </option>
                                    <option data-countrycode="AZ" value="994"> (+994) Azerbaijan</option>
                                    <option data-countrycode="BS" value="1242">(+1242)Bahamas </option>
                                </optgroup>
                            </select>
                            <input id="phone" name="phone" type="text" autoFocus />
                        </li>
                        <li><p style={{marginTop:"45px", fontSize: "32pt",float:"right"}}>
                            <a style={{color:"white", textDecoration:"none", id:"signup"}}>sign up</a></p>    </li>


                    </ol>
                    <div id="next-page" alt="Kiwi standing on oval"></div>
                    <div className="error-message"></div>

                </form>
                <h1 id="wf" style={{opacity:"0",width: "600px", marginTop:"1.1em", display:"none", marginBottom:"1em"}}>Thank you</h1>
            </div>
            )
}

            export default Signup