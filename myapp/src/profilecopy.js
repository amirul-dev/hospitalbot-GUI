import React, { useState, useEffect } from 'react'
import './static/profile.css';

//var intervalID = setInterval(Profile,1000);

function ProfileCopy() {
    const [data, setData] = useState([{}])   //data is variable, and setData is fn that manipulates state of data variable
    
    // const [listening, setListening] = useState(false)

    // useEffect(() => {
    //     fetch("/audio").then(                //fetches whatever under /members in backend
    //         res => res.json()
    //         ).then(
    //             data => {
    //                 setAudio(data)                      //sets data in res using setData
    //                 console.log(data[0])
    //             }
    //         )
    // })



    // useEffect(()=>{
    //     setInterval(()=>{
    //         setListening(!listening)
    //     },3000)
    // },[])

    useEffect(() => {
        fetch("/members").then(                //fetches whatever under /members in backend
            res => res.json()                    //converts res (return) to json
        ).then(
            data => {
                setData(data)                      //sets data in res using setData
            }
        )
    })                                       //empty array to run the fn only once

    // useEffect(() => {
    //     fetch("/audio").then(                //fetches whatever under /members in backend
    //         res => res.json()
    //         ).then(
    //             data => {
    //                 setAudio(data)                      //sets data in res using setData
    //                 console.log(data[0])
    //             }
    //         )
    // })

    return (
        <div className="profile">
            <header className="profile-header">
                <div className="wrapper">
                    <div className="profile-card js-profile-card">
                        <div className="profile-card__img">
                            <img src="https://drive.google.com/uc?export=view&amp;id=1O_vpwZddxNEOyKjDBKkpdu7NO3EIy_50  " alt="profile card"></img>
                        </div>

                        <div className="profile-card__cnt js-profile-cnt">
                            <div className="profile-card__name">{(typeof data.members === 'undefined') ? (<p>Loading...</p>) : (data.members[0])}</div>
                            <div className="profile-card__txt">ID <strong>{(typeof data.members === 'undefined') ? (<p>Loading...</p>) : (data.members[4])}</strong></div>
                            <div className="profile-card-loc">

                                <span className="profile-card-loc__txt">
                                {(typeof this.prop.audio.audio === 'undefined') ? ("Listening...") : (this.prop.audio.audio)}
                                </span>
                            </div>

                            <div className="profile-card-inf">
                                <div className="profile-card-inf__item">
                                    <div className="profile-card-inf__title">{(typeof data.members === 'undefined') ? (<p>Loading...</p>) : (data.members[1])}</div>
                                    <div className="profile-card-inf__txt">Previous checkup</div>
                                </div>

                                <div className="profile-card-inf__item">
                                    <div className="profile-card-inf__title">{(typeof data.members === 'undefined') ? (<p>Loading...</p>) : (data.members[2])}</div>
                                    <div className="profile-card-inf__txt">Scheduled checkup</div>
                                </div>

                                <div className="profile-card-inf__item">
                                    <div className="profile-card-inf__title">{(typeof data.members === 'undefined') ? (<p>Loading...</p>) : (data.members[3])}</div>
                                    <div className="profile-card-inf__txt">Status</div>
                                </div>
                            </div>

                            <div className="profile-card-ctr">
                                <button className="profile-card__button button--blue js-message-btn">Diagnostic History</button>
                                {/* <button className="profile-card__button button--orange" onClick={ListenFn}>Listen</button> */}
                                <button className="profile-card__button button--orange">Medicine</button>
                            </div>
                        </div>

                        <div className="profile-card-message js-message">
                            <form className="profile-card-form">
                                <div className="profile-card-form__container">
                                    <textarea placeholder="Say something..."></textarea>
                                </div>

                                <div className="profile-card-form__bottom">
                                    <button className="profile-card__button button--blue js-message-close">
                                        Send
                                    </button>

                                    <button className="profile-card__button button--gray js-message-close">
                                        Cancel
                                    </button>
                                </div>
                            </form>

                            <div className="profile-card__overlay js-message-close"></div>
                        </div>

                    </div>

                </div>
            </header>
        </div>
    )
}

export default ProfileCopy
