/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            soundName: '',
            sound : [
                'https://assets.mixkit.co/sfx/preview/mixkit-pulsating-bass-transition-2295.mp3',
                'https://assets.mixkit.co/sfx/preview/mixkit-ominous-drums-appear-228.mp3',
                'https://assets.mixkit.co/sfx/preview/mixkit-blockbuster-trailer-bass-drum-553.mp3',
                'https://assets.mixkit.co/sfx/preview/mixkit-achievement-win-drums-555.mp3',
                'https://assets.mixkit.co/sfx/preview/mixkit-drum-roll-566.mp3',
                'https://assets.mixkit.co/sfx/preview/mixkit-atmospheric-prelude-drum-roll-569.mp3',
                'https://assets.mixkit.co/sfx/preview/mixkit-tension-and-suspense-drum-roll-577.mp3',
                'https://assets.mixkit.co/sfx/preview/mixkit-drum-joke-accent-579.mp3',
                'https://assets.mixkit.co/sfx/preview/mixkit-funny-cartoon-tones-2892.mp3'
            ]
        }
        this.drumSound = this.drumSound.bind(this);
        this.keyboardEvent = this.keyboardEvent.bind(this);
        this.spanCreate = this.spanCreate.bind(this);
    }
        drumSound(e) {
            var urlValue = document.createElement('audio');
            urlValue.setAttribute('autoplay', '');
            e ? urlValue.setAttribute('id', e.target.value) : urlValue.setAttribute('id', e.target.value);
            urlValue.classList.add('clip')
            var source = document.createElement('source');
            console.log(e.target.value)
            if((e == 'q' || e == 'Q') || (e.target.value == 'q' || e.target.value == 'Q')) {
                source.setAttribute('src', this.state.sound[0]);
                urlValue.appendChild(source);
                let currentDiv = document.getElementById('pulsating-bass-transition');
                let parentDiv = currentDiv.parentNode;
                parentDiv.insertBefore(urlValue, currentDiv);
                this.spanCreate(currentDiv)
            } else if ((e == 'w' || e == 'W') || (e.target.value == 'w' || e.target.value == 'W')) {
                source.setAttribute('src', this.state.sound[1]);
                urlValue.appendChild(source);
                var currentDiv = document.getElementById('Metal-hit-drum-sound');
                let parentDiv = currentDiv.parentNode;
                parentDiv.insertBefore(urlValue, currentDiv);
                this.spanCreate(currentDiv)
            } else if ((e == 'e' || e == 'E') || (e.target.value == 'e' || e.target.value == 'E')){
                source.setAttribute('src', this.state.sound[2]);
                urlValue.appendChild(source);
                let currentDiv = document.getElementById('Achievement-win-drums');
                let parentDiv = currentDiv.parentNode;
                parentDiv.insertBefore(urlValue, currentDiv);
                this.spanCreate(currentDiv)
            } else if ((e == 'a' || e == 'A') || (e.target.value == 'a' || e.target.value == 'A')) {
                source.setAttribute('src', this.state.sound[3]);
                urlValue.appendChild(source);
                let currentDiv = document.getElementById('Drum-Roll');
                let parentDiv = currentDiv.parentNode;
                parentDiv.insertBefore(urlValue, currentDiv);
                this.spanCreate(currentDiv)
            } else if ((e == 's' || e == 'S') || (e.target.value == 's' || e.target.value == 'S')) {
                source.setAttribute('src', this.state.sound[4]);
                urlValue.appendChild(source);
                let currentDiv = document.getElementById('Atmospheric-prelude-drum-roll');
                let parentDiv = currentDiv.parentNode;
                parentDiv.insertBefore(urlValue, currentDiv);
                this.spanCreate(currentDiv)
            } else if ((e == 'd' || e == 'D') || (e.target.value == 'd' || e.target.value == 'D')) {
                source.setAttribute('src', this.state.sound[5]);
                urlValue.appendChild(source);
                let currentDiv = document.getElementById('Tension-and-suspense-drum-roll');
                let parentDiv = currentDiv.parentNode;
                parentDiv.insertBefore(urlValue, currentDiv);
                this.spanCreate(currentDiv)
            } else if ((e == 'z' || e == 'Z') || (e.target.value == 'z' || e.target.value == 'Z')) {
                source.setAttribute('src', this.state.sound[6]);
                urlValue.appendChild(source);
                let currentDiv = document.getElementById('Drum-joke-accent');
                let parentDiv = currentDiv.parentNode;
                parentDiv.insertBefore(urlValue, currentDiv);
                this.spanCreate(currentDiv)
            } else if ((e == 'x' || e == 'X') || (e.target.value == 'x' || e.target.value == 'X')) {
                source.setAttribute('src', this.state.sound[7]);
                urlValue.appendChild(source);
                let currentDiv = document.getElementById('Funny-cartoon-tones');
                let parentDiv = currentDiv.parentNode;
                parentDiv.insertBefore(urlValue, currentDiv);
                this.spanCreate(currentDiv)
            } else {
                source.setAttribute('src', this.state.sound[8]);
                urlValue.appendChild(source);
                let currentDiv = document.getElementById('mixer');
                let parentDiv = currentDiv.parentNode;
                parentDiv.insertBefore(urlValue, currentDiv);
                this.spanCreate(currentDiv)
            }
            
        }

        keyboardEvent() {
            window.addEventListener("keydown", (event) => {
            if (event.defaultPrevented) {
              return; // Do nothing if the event was already processed
            }
            switch (event.key) {
                case "q": this.drumSound(event.key)
                break;
                case "w": this.drumSound(event.key);
                break;
                case "e": this.drumSound(event.key);
                break;
                case "a": this.drumSound(event.key);
                break;
                case "s": this.drumSound(event.key);
                break;
                case "d": this.drumSound(event.key);
                break;
                case "z": this.drumSound(event.key);
                break;
                case "x": this.drumSound(event.key);
                break;
                case "c": this.drumSound(event.key);
                break;
                default:
                return; // Quit when this doesn't handle the key event.
            }
            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
          }, true);
        }
        
        spanCreate(text) {
            this.setState({
                soundName: text.id
            })
        }

    render() {
        return(
            <div id='drum-machine' 
            onClick={this.keyboardEvent}>
                <div id='display'>
                    <div className='buttons'>   
                        <button className='drum-pad' id='pulsating-bass-transition'
                            value='Q'
                        onClick={this.drumSound}>Q
                        </button>
                        <button className='drum-pad' id='ominous-drum-appaer'
                            value={'W'}
                        onClick={this.drumSound}>W
                        </button>
                        <button className='drum-pad' id='Metal-hit-drum-sound'
                            value={'E'}
                        onClick={this.drumSound}>E
                        </button>
                        <button className='drum-pad' id='Achievement-win-drums'
                            value={'A'}
                        onClick={this.drumSound}>A
                        </button>
                        <button className='drum-pad' id='Drum-Roll'
                            value={'S'}
                        onClick={this.drumSound}>S
                        </button>
                        <button className='drum-pad' id='Atmospheric-prelude-drum-roll'
                            value={'D'}
                        onClick={this.drumSound}>D
                        </button>
                        <button className='drum-pad' id='Tension-and-suspense-drum-roll'
                            value={'Z'}
                        onClick={this.drumSound}>Z
                        </button>
                        <button className='drum-pad' id='Drum-joke-accent'
                            value={'X'}
                        onClick={this.drumSound}>X
                        </button>
                        <button className='drum-pad' id='Funny-cartoon-tones'
                            value={'C'}
                        onClick={this.drumSound}>C
                        </button>
                    </div>
                    <div className='mixer' id='mixer'>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <span><p>{this.state.soundName}</p></span>
                        <input type='range' />
                        <label className="switch">
                            <input type="checkbox" id='type-of-sound' />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));