import React, { useRef } from 'react'
import intro from '../../assets/intro.mp4'
import './VideoPlayer.css'

function VideoPlayer({ playState, setPlayState }) {
    const player = useRef(null)
    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false)
        }
    }

    return (
        <>
            <div className={`video-player ${playState ? '' : 'hide'} `} ref={player} onClick={closePlayer}>
                <video src={intro} autoPlay muted controls></video>
            </div>
        </>
    )
}

export default VideoPlayer
