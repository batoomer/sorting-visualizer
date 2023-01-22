import SortModel from "../../../models/SortModel";
import ToggleButton from "../toogle_button/ToggleButton";
import playIcon from '../../../images/play-icon.svg';
import stopIcon from '../../../images/pause-icon.svg';
import shuffleIcon from '../../../images/shuffle-icon.svg';
import './inplace-visualizer.css';


class InPlaceVisualizer{

    constructor(algorithm){
        this.algorithm = algorithm;
        this.sortModel = new SortModel()
        this.running = false;
        this.speed = 1;
        
        
        this.visualizerContainer = document.createElement('section');
        this.visualizerContainer.classList.add('inplace-visualizer__container');
        this.promises = [];
    }


    create(){ 
        const arrayBarContainer = this.#createArrayBarsContainer();
        this.#createSettings(arrayBarContainer);
          
        return this.visualizerContainer;
    };

    #createArrayBarsContainer() {
        const arrayBarContainer = document.createElement('div');
        arrayBarContainer.classList.add('array-bar__container');

        this.#createArrayBars(arrayBarContainer);

        this.visualizerContainer.appendChild(arrayBarContainer);

        return arrayBarContainer;
    };

    #createArrayBars(arrayBarContainer) {
        const data = this.sortModel.getData();
        data.forEach((element, index) => {
            const arrayBar = document.createElement('div');
            arrayBar.dataset.arrayBarIndex = index;
            arrayBar.style.height = `${100 * element / Math.max(...data)}%`;
            arrayBar.style.width = `${100 / data.length}%`;
            arrayBarContainer.appendChild(arrayBar);
            
        });
    };

    #createSettings(arrayBarContainer){
        const settingsContainer = document.createElement('div');
        settingsContainer.classList.add('inplace-visualizer__settings');

        // Shuffle Button
        let settingsWrapper = document.createElement('div');
        settingsWrapper.classList.add('array-bars__setting-wrapper');
        const shuffleButtonLabel = document.createElement('label');
        shuffleButtonLabel.htmlFor = 'inplace-visualizer__shuffle-btn';
        shuffleButtonLabel.textContent = 'Shuffle';
        const suffleButton = document.createElement('button');
        suffleButton.classList.add('inplace-visualizer__shuffle-btn');
        suffleButton.innerHTML = `<img class='icon' src=${shuffleIcon} alt='Shuffle Array' />`;
        suffleButton.onclick = () => {this.#shuffleArrayBars(arrayBarContainer)}
        settingsWrapper.append(suffleButton, shuffleButtonLabel);
        settingsContainer.appendChild(settingsWrapper);

        // Size Slider
        settingsWrapper = document.createElement('div');
        settingsWrapper.classList.add('array-bars__setting-wrapper');
        const sizeSliderLabel = document.createElement('label');
        sizeSliderLabel.htmlFor = 'array-bars__size-slider';
        sizeSliderLabel.textContent = 'Array Size: ';
        const sizeSliderValueDisplay = document.createElement('span');
        sizeSliderValueDisplay.textContent = `${this.sortModel.getData().length}`;
        sizeSliderLabel.appendChild(sizeSliderValueDisplay);
        const sizeSlider = document.createElement('input');
        sizeSlider.id = 'array-bars__size-slider';
        sizeSlider.type = 'range';
        sizeSlider.min = '50';
        sizeSlider.max = '1000';
        sizeSlider.value = this.sortModel.getData().length;
        sizeSlider.oninput = (e) => {this.#resizeArrayBars(e, arrayBarContainer, sizeSliderValueDisplay)};
        sizeSlider.onchange = (e) => {sizeSliderValueDisplay.innerHTML = e.target.value};
        settingsWrapper.append(sizeSlider, sizeSliderLabel);
        settingsContainer.appendChild(settingsWrapper);

        // Speed Slider
        settingsWrapper = document.createElement('div');
        settingsWrapper.classList.add('array-bars__setting-wrapper');
        const delaySliderLabel = document.createElement('label');
        delaySliderLabel.htmlFor = 'array-bars__delay-slider';
        delaySliderLabel.textContent = 'Speed: ';
        const delaySliderValueDisplay = document.createElement('span');
        delaySliderValueDisplay.textContent = `${this.speed}`;
        delaySliderLabel.appendChild(delaySliderValueDisplay);
        const delaySlider = document.createElement('input');
        delaySlider.id = 'array-bars__delay-slider';
        delaySlider.type = 'range';
        delaySlider.min = '1';
        delaySlider.max = '10';
        delaySlider.value = 1;
        delaySlider.oninput = (e) => {delaySliderValueDisplay.innerHTML = e.target.value; this.speed=e.target.value};
        delaySlider.onchange = (e) => {delaySliderValueDisplay.innerHTML = e.target.value};
        settingsWrapper.append(delaySlider , delaySliderLabel);
        settingsContainer.appendChild(settingsWrapper);

        // Start Stop Button
        settingsWrapper = document.createElement('div');
        settingsWrapper.classList.add('array-bars__setting-wrapper');
        const startStopButtonLabel = document.createElement('label');
        startStopButtonLabel.htmlFor =  'array-bars__start-stop-btn';
        startStopButtonLabel.textContent = 'Start';
        const firstIcon = {src: playIcon, alt:'Start Sort'};
        const secondIcon = {src: stopIcon, alt:'Stop Sort'};
        const startStopButton = new ToggleButton(
            'array-bars__start-stop-btn',
            firstIcon,
            secondIcon,
            () => {this.#handleStartStopButton(startStopButtonLabel);}
        ).create();
        settingsWrapper.append(startStopButton, startStopButtonLabel);
        settingsContainer.appendChild(settingsWrapper);

        this.visualizerContainer.appendChild(settingsContainer);
    };

    async #handleStartStopButton(startStopButtonLabel) {
        
        if (this.running){
            this.#enableSettings();
            this.running = false;
            startStopButtonLabel.textContent = 'Start';
        }else{  
            this.#disableSettings();
            this.running = true;
            startStopButtonLabel.textContent = 'Stop';
            await this.#startSort();
            if (!this.sortModel.animation.length){
                document.querySelector('.array-bars__start-stop-btn').click();
                
            };
        }
        
    }

    async #startSort(){
        if (!this.sortModel.animation.length){
            this.sortModel.sort(this.algorithm);
        };

        while (this.sortModel.animation.length && this.running === true){
           
            const swapIdxs = this.sortModel.animation.shift();
            await this.#swapArrayBars(...swapIdxs);
            await this.sleep(10);

        };
    };

    #disableSettings(){
        const shuffleBtn = document.querySelector('.inplace-visualizer__shuffle-btn');
        shuffleBtn.disabled = true;
        shuffleBtn.parentElement.classList.add('disabled');
        const sizeSlider = document.querySelector('#array-bars__size-slider')
        sizeSlider.disabled = true;
        sizeSlider.parentElement.classList.add('disabled');
    };

    #enableSettings(){
        const shuffleBtn = document.querySelector('.inplace-visualizer__shuffle-btn');
        shuffleBtn.disabled = false;
        shuffleBtn.parentElement.classList.remove('disabled');
        const sizeSlider = document.querySelector('#array-bars__size-slider')
        sizeSlider.disabled = false;
        sizeSlider.parentElement.classList.remove('disabled');
    }

    async #swapArrayBars(i,j){
        let delay = (1000)/(10**this.speed);

        const bar1 = document.querySelector(`[data-array-bar-index="${i}"]`);
        const bar2 = document.querySelector(`[data-array-bar-index="${j}"]`);

        let initBackGround = bar1.style.background;
        
        bar1.style.background = 'red';
        bar2.style.background = 'greenyellow'
        await this.sleep(delay/10);

        let temp = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = temp;

        bar1.style.background = 'greenyellow';
        bar2.style.background = 'red';
        await this.sleep(delay/10);
        bar1.style.background = initBackGround;
        bar2.style.background = initBackGround;
        
    };

     
    #resizeArrayBars(e, arrayBarContainer, sizeSliderValueDisplay){
        this.sortModel.set_size(e.target.value);
        sizeSliderValueDisplay.innerHTML = e.target.value;
        arrayBarContainer.innerHTML = '';
        this.#createArrayBars(arrayBarContainer)
    ;}

    #shuffleArrayBars(arrayBarContainer){
        this.sortModel.shuffle();
        const data = this.sortModel.getData();
        const arrayBars = arrayBarContainer.children
        
        for (let i =0; i<arrayBars.length; i++){
            const arrayBar = arrayBars[i];
            arrayBar.style.height = `${100 *  data[arrayBar.dataset.arrayBarIndex]/ Math.max(...data)}%`
        };
    };

    sleep(ms){
        let promise = new Promise((resolve, reject) => setTimeout(resolve, ms))
        this.promises.push(promise);
        return promise;
    };

    cancelPromises(){
        this.running = false;
    };
};

export default InPlaceVisualizer;