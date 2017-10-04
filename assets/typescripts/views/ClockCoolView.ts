export class ClockCoolView  implements IView {
    
    constructor(private parent: IView) {
        this.render();
    }
    
    public update(shit: IClockModel): void {
        this.setText(this.hours, shit.hours);
        this.setText(this.minutes, shit.minutes);
        this.setText(this.seconds, shit.seconds);
    }
    
    public getElement(): Element {
        return this.el;
    }

    /// -- privates
    
    private setText (element: Element, value: string): void {
        this.empty(element);
        element.appendChild(document.createTextNode(value));
    }
    
    private empty (element: Element): void {
        while(element && element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    
    private render(): void {
      this.el = document.createElement("div");
        this.el.className = "clock";
        
        this.hours = document.createElement("span");
        this.minutes = <Element>this.hours.cloneNode(true);
        this.seconds = <Element>this.hours.cloneNode(true);
        
        this.el.appendChild(this.hours);
        this.el.appendChild(document.createTextNode(":"));
        this.el.appendChild(this.minutes);
        this.el.appendChild(document.createTextNode(":"));
        this.el.appendChild(this.seconds);
        
        this.parent.getElement().appendChild(this.el);
    }

    private el: Element;
    private hours: Element;
    private minutes: Element;
    private seconds: Element;
    
}