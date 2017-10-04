import { Clocks } from "./Clocks";

export class UtcClockModel implements IClockModel {

    public hours: string;
    public minutes: string;
    public seconds: string;
    public timeZone: string;

    public update(date: Date): UtcClockModel {
        this.hours = Clocks.formatDigits(date.getUTCHours());
        this.minutes = Clocks.formatDigits(date.getUTCMinutes());
        this.seconds = Clocks.formatDigits(date.getUTCSeconds());
        this.timeZone = "UTC";
        return this;
    }
    
} 