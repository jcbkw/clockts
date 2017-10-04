export class ClockTextView implements IView {

    constructor(private parent: IView) {
        this.render();
    }

    public update(shit: IClockModel): void {
        console.log(`${shit.hours}:${shit.minutes}:${shit.seconds} ${shit.timeZone}`);
    }
    
    public getElement(): Element {
        return null;
    }
    
    private render(): void {}
    
}