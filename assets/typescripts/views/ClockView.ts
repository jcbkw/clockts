export class ClockView  implements IView {

    constructor(private parent: IView) {
        this.render();
    }
    
    public update(shit: IClockModel): void {
        this.el.innerHTML = `${shit.hours}:${shit.minutes}:${shit.seconds}`;
    }
    
    public getElement(): Element {
        return this.el;
    }
    
    private render(): void {
        this.el = document.createElement("div");
        
        this.el.className = "clock";
        this.parent.getElement().appendChild(this.el);
    }

    private el: Element;
    
}