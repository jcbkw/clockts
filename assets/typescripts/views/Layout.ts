export class Layout implements IView {
    
    constructor (private dom: Document) {
        this.render();
    }
    
    public getElement (): Element {
        return this.el;
    }

    public getClass (): Element {
        return this.el;
    }
    
    private render(): void {
        this.el = this.dom.createElement("div");
        
        this.el.id = "content";
        this.dom.body.appendChild(this.el);
    }
    
    private el: Element;
    
}