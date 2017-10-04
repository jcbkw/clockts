import { Clocks } from "./Clocks";

export class DefaultClockModel implements IClockModel {

    public hours: string;
    public minutes: string;
    public seconds: string;
    public timeZone: string;

    public update(date: Date): DefaultClockModel {
        this.hours = Clocks.formatDigits(date.getHours());
        this.minutes = Clocks.formatDigits(date.getMinutes());
        this.seconds = Clocks.formatDigits(date.getSeconds());
        this.timeZone = "EST"; 
        return this;
    }
    
} 