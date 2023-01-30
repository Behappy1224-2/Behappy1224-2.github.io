const alanFree = '../music/alanWalker';

const audioData = [
    {
        author: 'AlanFree Walker',
        name: 'Faded',
        url: alanFree + '/Alan-Fade.mp3'
    },
    {
        author: 'AlanFree Walker',
        name: 'Spectre',
        url: alanFree + '/Alan-Spectre.mp3'

    },
    {
        author: 'AlanFree Walker',
        name: 'Force',
        url: alanFree + '/Alan-Force.mp3'
    },
    {
        author: 'Janji',
        name: 'Heroes Tonight',
        url: alanFree + '/Janji-Heroes-Tonight.mp3'
    }
]

let temp = {
    author: '',
    name: '',
    url: ''
}


class AudioPlayer {
    constructor(playlist) {
		this.audioPlayer = new Audio();
		
		this.playList = playlist || [];
		this.listMode = 'step';
        this.repeatMode = 'single';
		this.currentIdx = null;
		this.isPlaying = false;
        this.preVolume = 0;
        this.currentPercentTime = 0;

		this.initEvents();
		this.setCurrentMusic(); 
	}

    initEvents() {
        this.event = {
			currentEvent: new Event("currentmusicchange"),
			playModeEvent: new Event("playmodechange"),
			playListEvent: new Event("playlistchange"),
			isPlayingEvent: new Event("playstatuschange"),
		}

		this.audioPlayer.addEventListener('abort', () => this.setPlayStatus(false))
		this.audioPlayer.addEventListener('error', e => {this.setPlayStatus(false)});
		this.audioPlayer.addEventListener('stalled', () => this.setPlayStatus(false))
		

		this.audioPlayer.addEventListener('ended', () => {
            this.setPlayStatus(false);
            this.setCurrentPercentTime(0);
			const nextIdx = this.getNextMusicIdx();
			this.setCurrentMusic(nextIdx);
            this.toggleHandler();
		})
		this.audioPlayer.addEventListener('durationchange', () => {
			this.audioPlayer.dispatchEvent(this.event.currentEvent)
		})
    }
    on (event, callback) {
		this.audioPlayer.addEventListener(event, callback);
	};

	setCurrentMusic(identifier) {
        this.currentIdx = identifier;
		this.audioPlayer.setAttribute('src', this.getAudioInfo().url);
		this.audioPlayer.load();
	}
	getAudioInfo(idx = this.currentIdx) {
		if (!Number.isInteger(idx) || idx < 0 || idx >= this.playList.length) return {};
		return this.playList[this.currentIdx];
	}
	
	// play / pause
	toggleHandler() {
		if (!this.isPlaying) {
			// play
			return this.audioPlayer.play()
				.then(() => this.setPlayStatus(true))
				.catch(e => e)

		} else {
			// pause
			this.audioPlayer.pause()
			this.setPlayStatus(false);
		}
	}
    setListMode(mode) {
		let validMode = ['step', 'shuffle'];
		if (validMode.indexOf(mode) !== -1) {
			this.listMode = mode;
			this.audioPlayer.dispatchEvent(this.event.playModeEvent);
		}
	}
    setRepeatMode (mode) {
        let validMode = ['single', 'repeat-all', 'repeat-one'];
        if (validMode.indexOf(mode) !== -1) {
			this.repeatMode = mode;
			this.audioPlayer.dispatchEvent(this.event.playModeEvent);
		}
    }


	setPlayStatus(val) {
		if (typeof val !== 'boolean') return;
		this.isPlaying = val;
		this.audioPlayer.dispatchEvent(this.event.isPlayingEvent);
	}
	

	getNextMusicIdx( operation = this.repeatMode) {
		let nextIdx = null;

        switch ( operation ) {
            case 'single': {
                break;
            }
            case 'repeat-all': {
                if ( this.listMode == 'shuffle' ) {
                    nextIdx = Math.floor(Math.random() * (this.playList.length) );
                    if ( nextIdx >= this.playList.length ) nextIdx = this.playList.length - 1;
                } else {
                    nextIdx = (this.currentIdx + 1) >= this.playList.length ? 0 : (this.currentIdx + 1);
                }
                break;
            }
            case 'repeat-one': {
                nextIdx = this.currentIdx;
                break;
            }
            case 'next': {
                nextIdx = (this.currentIdx + 1) >= this.playList.length ? 0 : (this.currentIdx + 1);
                break;
            }
			case 'prev': {
                nextIdx = (this.currentIdx - 1) < 0 ? (this.playList.length - 1) : (this.currentIdx - 1);
				break;
            }
            default: {
				return;
            }
        }
		return nextIdx;
	}
	
    //set
	setVolume(vol) {
		if (typeof vol !== 'number') return;
		this.audioPlayer.volume = vol / 100;
	}
    setPreVolume(vol) {
		if (typeof vol !== 'number') return;
		this.preVolume = vol / 100;
	}
    setCurrentPercentTime(percent) {
		if (typeof percent !== 'number') return;
		this.currentPercentTime = percent;
	}
    setCurrentTime(perc) {
        this.audioPlayer.currentTime = this.audioPlayer.duration * perc / 100;
	}

    //get
	getVolume() {
		return this.audioPlayer.volume;
	}
	getCurrentTime() {
		return this.audioPlayer.currentTime;
	}
	getDuration() {
		return this.audioPlayer.duration;
	}
	getPlayMode() {
		return this.playMode;
	}
	getIsPlaying() {
		return this.isPlaying;
	}
}

const iconColor = '#fff'
const iMC = 'red'


$(document).ready(() => {
    const myAudio = new AudioPlayer(audioData);
    
    $('#audioPlayer .list-wrap i').mousedown(e => {
        $(e.target).css({'color': iMC});
    })
    $('#audioPlayer .list-wrap i').mouseup(e => {
        $(e.target).css({'color': iconColor});
    })
    $('#audioPlayer .list-wrap i').mouseout(e => {
        $(e.target).css({'color': iconColor});
    })

    //toggler
    const setTogglerUI = ( state ) => {
        if( state === 'pause' ) {
            $('#audioPlayer .play-toggler').removeClass('bi-pause-fill');
            $('#audioPlayer .play-toggler').addClass('bi-play-fill');
        } else if ( state === 'play' ) {
            $('#audioPlayer .play-toggler').removeClass('bi-play-fill');
            $('#audioPlayer .play-toggler').addClass('bi-pause-fill');
        }
    }
    $('#audioPlayer .play-toggler').click(e => {
        if(myAudio.currentIdx == null) return;
        myAudio.toggleHandler();
    })

    const getCur = () => {
        return myAudio.audioPlayer.duration ? Math.floor(myAudio.audioPlayer.currentTime/60).toString().padStart(2, '0') + ':' + Math.floor(myAudio.audioPlayer.currentTime%60).toString().padStart(2, '0') : null;
    }
    const getDur = () => {
        return myAudio.audioPlayer.duration ? Math.floor(myAudio.audioPlayer.duration/60).toString().padStart(2, '0') + ':' + Math.floor(myAudio.audioPlayer.duration%60).toString().padStart(2, '0') : null;
    }

    $('#audioPlayer .skip-start').click(e => {
        myAudio.setCurrentTime(100);
    })
    $('#audioPlayer .skip-end').click(e => {
        if ( myAudio.repeatMode != 'repeat-one' && myAudio.repeatMode != 'single' ) {
            myAudio.setPlayStatus(false);
            setTimelineUI(0);
            myAudio.setCurrentPercentTime(0);
            let nextIdx = (myAudio.currentIdx - 1) < 0 ? (myAudio.playList.length - 1) : (myAudio.currentIdx - 1);
            myAudio.setCurrentMusic(nextIdx);
            myAudio.toggleHandler();
        } else {
            myAudio.setCurrentTime(100);
        }
        
    })
    
    //timeline
    const setTimelineUI = (w) => {
        $('#audioPlayer .timeline-knob').css({'left': `${w}px`});
        $('#audioPlayer .timeline-bar').css({width: `${w}px`});
    }

    const setTimelineInfo = (cur = '00:00', dur = '00:00') => {
        $('#audioPlayer .time-info').text(`${cur}/${dur}`);
    }
    $('#audioPlayer .timeline-knob').draggable({
        axis: "x", 
        containment: '#audioPlayer .timeline-wrap',
        drag() {
            let w = $('#audioPlayer .timeline-knob').position().left;
            myAudio.setCurrentTime(w / window.innerWidth * 100);
            setTimelineUI(w);
        }
    });

    $('#audioPlayer .timeline-bg').click(e => {
        if ( myAudio.isPlaying ) {
            let w = e.clientX - e.target.getBoundingClientRect().x;
            w = w > window.innerWidth ? window.innerWidth : 
                w < 0 ? 0 : w ;

            myAudio.setCurrentTime(w / window.innerWidth * 100);
            setTimelineUI(w);
        }
    })

    myAudio.audioPlayer.addEventListener('timeupdate', () => {
        if ( myAudio.isPlaying ) {
            let dur = getDur();
            let cur = getCur();
            setTimelineInfo(cur, dur);            
            let percent = Math.floor(myAudio.audioPlayer.currentTime / myAudio.audioPlayer.duration * 100) ;

            if (percent > myAudio.currentPercentTime) {
                myAudio.setCurrentPercentTime(percent)

                let w = window.innerWidth * percent / 100;
                setTimelineUI(w);
            }
        }
    })

    //volume
    const volume_width = 70;
    const setVolumeUI = (vol, w) => {
        $('#audioPlayer .slider-knob').css({'left': `${w}px`});
        $('#audioPlayer .slider-bar').css({width: `${w}px`})
        if ( vol > 50 ) {
            $('#audioPlayer .volume').removeClass('bi-volume-down-fill')
            $('#audioPlayer .volume').removeClass('bi-volume-mute-fill')
            $('#audioPlayer .volume').addClass('bi-volume-up-fill')
        } else if ( vol > 0 ) {
            $('#audioPlayer .volume').removeClass('bi-volume-up-fill')
            $('#audioPlayer .volume').removeClass('bi-volume-mute-fill')
            $('#audioPlayer .volume').addClass('bi-volume-down-fill')
        } else if ( vol == 0 ) {
            $('#audioPlayer .volume').removeClass('bi-volume-up-fill')
            $('#audioPlayer .volume').removeClass('bi-volume-down-fill')
            $('#audioPlayer .volume').addClass('bi-volume-mute-fill')
        }
    }

    $('#audioPlayer .slider-knob').draggable({
        axis: "x", 
        containment: '#audioPlayer .slider-wrap',
        drag() {
            let w = $('#audioPlayer .slider-knob').position().left;
            let vol = w / volume_width * 100;
            //setVolume
            myAudio.setVolume(vol)

            setVolumeUI(vol, w)
        }
    });
    $('#audioPlayer .volume').click(e => {
        
        let w = $('#audioPlayer .slider-knob').position().left;
        let vol = myAudio.getVolume();

        //setVolume
        if ( w != 0 ) {
            myAudio.setPreVolume(myAudio.getVolume() * 100);
            vol = 0;
            
            setVolumeUI(vol, 0)
        } else {
            vol = myAudio.preVolume * 100;
            setVolumeUI(vol, vol / 100 * 70)
        }
        myAudio.setVolume(vol)
    })
    $('#audioPlayer .slider-bg').click(e => {
        let w = e.clientX - e.target.getBoundingClientRect().x;
        w = w > 70 ? 70 : 
            w < 0 ? 0 : w ;

        myAudio.setVolume(w / 70 * 100);
        setVolumeUI(w / 70 * 100, w);
    })
    
    const setMusic = (idx) => {
        if(myAudio.currentIdx != idx) {
            if ( myAudio.isPlaying ) {
                myAudio.toggleHandler();
            }
            myAudio.setCurrentMusic(idx);
        };
        myAudio.toggleHandler();
    }

    myAudio.audioPlayer.addEventListener('playstatuschange', () => {
        if ( myAudio.isPlaying ) {
            setTogglerUI('play');
        } else {
            setTogglerUI('pause');
        }

        let cur = getCur() ? getCur() : '00:00';
        let dur = getDur() ? getDur() : '00:00';
        setTimelineInfo(cur, dur);

        if ( myAudio.currentIdx != null ) {
            setAudioInfo(myAudio.currentIdx)
        } else {
            setAudioInfo(-1);
        }
    })

    //audio-info
    const setAudioInfo = (idx) => {
        if ( idx + 1 ) {
            $('#audioPlayer .audio-info').text(`${myAudio.getAudioInfo(idx).name}`);
            $('#audioPlayer .audio-info-phone').text(`${myAudio.getAudioInfo(idx).name}`);
        } else {
            $('#audioPlayer .audio-info').text('');
            $('#audioPlayer .audio-info-phone').text('');
        }
    }


    //mode
    $('#audioPlayer .mode-wrap .sequence').click(e => {
        if ( myAudio.listMode == 'step') {
            myAudio.setListMode('shuffle');
            $(e.target).css({'color': iMC});
        } else if ( myAudio.listMode == 'shuffle' ) {
            myAudio.setListMode('step');
            $(e.target).css({'color': iconColor});
        }
    })

    $('#audioPlayer .mode-wrap .loop').click(e => {
        if ( myAudio.repeatMode == 'single' ) {
            myAudio.setRepeatMode('repeat-all');
            $(e.target).css({'color': iMC});
        } else if ( myAudio.repeatMode == 'repeat-all' ) {
            myAudio.setRepeatMode('repeat-one');
            $(e.target).removeClass('bi-repeat');
            $(e.target).addClass('bi-repeat-1');
        } else if ( myAudio.repeatMode == 'repeat-one' ) {
            myAudio.setRepeatMode('single');

            $(e.target).removeClass('bi-repeat-1');
            $(e.target).addClass('bi-repeat');
            $(e.target).css({'color': iconColor});
        }
    })

    //ended
    myAudio.audioPlayer.addEventListener('ended', () => {
        setTimelineUI(0);
        setTimelineInfo();
        setAudioInfo(-1);
    })

    
    $('.second-row .col:nth-child(1) .box').click( e => {
        $(e.target.parentNode).attr('href', 'javascript:void(0);');
        $(e.target.parentNode).attr('target', '_self');
        setMusic(0);
    })
    $('.second-row .col:nth-child(2) .box').click( e => {
        $(e.target.parentNode).attr('href', 'javascript:void(0);');
        $(e.target.parentNode).attr('target', '_self');
        setMusic(1);
    })
    $('.second-row .col:nth-child(3) .box').click( e => {
        $(e.target.parentNode).attr('href', 'javascript:void(0);');
        $(e.target.parentNode).attr('target', '_self');
        setMusic(2);
    })
    $('.second-row .col:nth-child(4) .box').click( e => {
        $(e.target.parentNode).attr('href', 'javascript:void(0);');
        $(e.target.parentNode).attr('target', '_self');
        setMusic(3);
    })
})