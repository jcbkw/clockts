//import {ClockTextView} from "./views/ClockTextView";
//import {ClockCoolView} from "./views/ClockCoolView";
import {ClockView} from "./views/ClockView";
import {Layout} from "./views/Layout";
import { DefaultClockModel } from "./models/DefaultClockModel";
import { UtcClockModel } from "./models/UtcClockModel";

export class ClockController {
    constructor (private dom: Document) {}

    public render (): void {
        let layout = new Layout(this.dom);
        let estView = new ClockView(layout); 
        let utcView = new ClockView(layout); 
        let defaultModel = new DefaultClockModel;
        let utcModel = new UtcClockModel;
        
        function updateView () {
            estView.update(defaultModel.update(new Date()));
            utcView.update(utcModel.update(new Date()));
        }
    
        setInterval(updateView, 1000);
        updateView();
    } 
}