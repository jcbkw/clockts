//import {ClockTextView} from "./views/ClockTextView";
//import {ClockCoolView} from "./views/ClockCoolView";
import {ClockView} from "./views/ClockView";
import {Layout} from "./views/Layout";
import { DefaultClockModel } from "./models/DefaultClockModel";
import { UtcClockModel } from "./models/UtcClockModel";
import { SpecificClockModel } from "./models/SpecificClockModel";

export class ClockController {
    constructor (private dom: Document) {}

    public render (): void {
        let layout = new Layout(this.dom);
        let estView = new ClockView(layout, ""); 
        let utcView = new ClockView(layout); 
        let specificView = new ClockView(layout,"");
        let defaultModel = new DefaultClockModel;
        let utcModel = new UtcClockModel;
        let specificModel = new SpecificClockModel;
        
        function updateView () {
            estView.update(defaultModel.update(new Date()));
            utcView.update(utcModel.update(new Date()));
            specificView.update(specificModel.update(new Date(), 2, "MST"));
        }
    
        setInterval(updateView, 1000);
        updateView();
    } 
}