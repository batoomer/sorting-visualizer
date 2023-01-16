class Main {
    constructor(){
        this.main = document.createElement('main');
    };

    create(){
        this.main.innerHTML = `
            <div>MAIN AREA</div>
        `

        return this.main;
    };
};

export default Main;