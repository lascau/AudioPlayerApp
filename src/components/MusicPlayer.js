import React, { useState, useRef } from "react";
import {
    Stack,
    Slider,
    LinearProgress,
    Typography,
    Box,
    Card,
    Grid,
} from "@mui/material";
import { VolumeDown, VolumeUp } from "@mui/icons-material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ReplayIcon from "@mui/icons-material/Replay";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import vinile from "../assets/vinile.png";
import "./css/rotating.css";

const cardStyle = {
    width: "500px",
    height: "80px",
    margin: "25px 50px",
    padding: "25px 25px 25px 25px",
    backgroundColor: "#ACDEEE",
};

export const MusicPlayer = (props) => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(
        props.isAutoPlayAtStartTurnedOn
    );
    const [currentTime, setCurrentTime] = useState("00:00");
    const [_volume, setVolume] = useState(50);
    const audioRef = useRef(new Audio(props.musicUrl));
    const [audioDuration, setAudioDuration] = useState(null);
    const [audioProgress, setAudioProgress] = useState(0);
    const [isVolumeBarVisible, setIsVolumeBarVisible] = useState(true);

    // timers
    const [timerCoundDown, setTimerCountDown] = useState(5);
    const [istimerCountDownVisible, setIstimerCountDownVisible] =
        useState(false);
    const [timerObject, setTimerObject] = useState(null);
    const [notificationTimer, setNotificationTimer] = useState(null);

    const display = (time) => {
        if (time) {
            const seconds = Math.floor(time % 60);
            const minutes = Math.floor(time / 60);
            const stringMinutes =
                minutes >= 0 && minutes <= 9 ? `0${minutes}` : `${minutes}`;
            const stringSeconds =
                seconds >= 0 && seconds <= 9 ? `0${seconds}` : `${seconds}`;
            return stringMinutes + ":" + stringSeconds;
        }
        return "00:00";
    };

    const updateCurrentTime = (time) => {
        setCurrentTime(display(time));
    };

    audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current.currentTime.toFixed(0));
        updateCurrentTime(audioRef.current.currentTime);
        setAudioProgress((audioRef.current.currentTime * 100) / audioDuration);
    };

    audioRef.current.onloadedmetadata = () => {
        setAudioDuration(audioRef.current.duration.toFixed(0));
    };

    const startAudio = () => {
        audioRef.current.play();
        setIsAudioPlaying(!isAudioPlaying);
    };

    const pauseAudio = () => {
        audioRef.current.pause();
        setIsAudioPlaying(!isAudioPlaying);
    };

    const replayAudio = () => {
        setIstimerCountDownVisible(false);

        // destroy timers from memory(stop the next song play in the track)
        clearTimeout(timerObject);
        clearInterval(notificationTimer);

        // replay the audio
        setIsAudioPlaying(false);
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    };

    const changeVolume = (event, value) => {
        setVolume(value);
        audioRef.current.volume = value / 100;
    };

    const fastForwardUpdate = (time) => {
        setCurrentTime(time.toFixed(0));
        updateCurrentTime(time);
        setAudioProgress((time * 100) / audioDuration);
    };
    const rightFastForward = () => {
        audioRef.current.currentTime += 10;
        fastForwardUpdate(audioRef.current.currentTime);
    };

    const leftFastForward = () => {
        audioRef.current.currentTime -= 10;
        fastForwardUpdate(audioRef.current.currentTime);
    };

    const changeVolumeBarVisibility = () => {
        setIsVolumeBarVisible(!isVolumeBarVisible);
    };

    const startTimerBeforePlayingNextSong = (delay) => {
        const oneSec = 1000;
        delay += oneSec;
        const startTime = Date.now();
        setTimerCountDown((delay - oneSec) / 1000);
        let notificationEverySecond = setInterval(() => {
            setTimerCountDown(
                Math.floor((delay - (Date.now() - startTime)) / 1000)
            );
        }, 1000);
        setNotificationTimer(notificationEverySecond);
        let timerObject = setTimeout(() => {
            setIsAudioPlaying(false);
            props.nextSong();
            clearInterval(notificationEverySecond);
            setIstimerCountDownVisible(false);
            //setTimerCountDown((delay - oneSec) / 1000);
        }, delay);
        setTimerObject(timerObject);
    };

    const audioEndedHandler = () => {
        // make visible the count down timer
        setIstimerCountDownVisible(true);
        // play next song in x seconds
        startTimerBeforePlayingNextSong(3000);
    };

    return (
        <>
            <Card style={cardStyle}>
                <audio
                    ref={audioRef}
                    src={props.musicUrl}
                    preload="metadata"
                    autoPlay={true}
                    onEnded={audioEndedHandler}
                />
                {audioDuration && (
                    <>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Stack direction="row">
                                    <Typography
                                        variant="h6"
                                        color="text.secondary"
                                        component="div"
                                        fontSize="small"
                                    >
                                        {props.author}
                                    </Typography>
                                    <Box style={{ marginLeft: "3px" }}>
                                        <div
                                            className={
                                                isAudioPlaying
                                                    ? "stopRotating"
                                                    : "rotating"
                                            }
                                            style={{
                                                width: "26px",
                                                height: "26px",
                                            }}
                                        >
                                            <img
                                                src={vinile}
                                                style={{
                                                    width: "26px",
                                                    heigth: "26px",
                                                }}
                                                alt="logo"
                                            />
                                        </div>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    flexDirection="column"
                                >
                                    <Typography component="div" variant="h6">
                                        {currentTime}/{display(audioDuration)}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs>
                                <Box textAlign="right" marginRight="6px">
                                    {istimerCountDownVisible && (
                                        <Typography
                                            component="div"
                                            variant="h6"
                                            color="red"
                                            className="counter-down-current-number"
                                        >
                                            {timerCoundDown}
                                        </Typography>
                                    )}
                                </Box>
                            </Grid>
                        </Grid>
                        <LinearProgress
                            variant="determinate"
                            value={audioProgress}
                        />
                    </>
                )}
                <Stack direction="row" spacing={1.2}>
                    <div onClick={changeVolumeBarVisibility}>
                        {_volume === 0 ? (
                            <VolumeOffIcon />
                        ) : _volume >= 50 ? (
                            <VolumeUp />
                        ) : (
                            <VolumeDown />
                        )}
                    </div>
                    <Stack sx={{ width: 900 }}>
                        {isVolumeBarVisible && (
                            <Slider
                                className="volume-bar"
                                aria-label="Volume"
                                value={_volume}
                                onChange={changeVolume}
                            />
                        )}
                    </Stack>
                    <Stack spacing={2} sx={{ width: 300 }}></Stack>
                    <ReplayIcon onClick={replayAudio} />
                </Stack>
                <Box display="flex" alignItems="center" flexDirection="column">
                    <Stack spacing={2} direction="row">
                        <KeyboardDoubleArrowLeftIcon
                            onClick={leftFastForward}
                        />
                        {isAudioPlaying ? (
                            <PlayArrowIcon onClick={startAudio} />
                        ) : (
                            <PauseIcon onClick={pauseAudio} />
                        )}
                        <KeyboardDoubleArrowRightIcon
                            onClick={rightFastForward}
                        />
                    </Stack>
                </Box>
            </Card>
        </>
    );
};
