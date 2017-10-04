import { Clocks } from "./Clocks";

export class SpecificClockModel implements IClockModel {

    public hours: string;
    public minutes: string;
    public seconds: string;

    public update(date: Date, offset: number = 0): SpecificClockModel {
        if(offset !== 0){
            date = this.calcTime(offset, date);
        }
        
        this.hours = Clocks.formatDigits(date.getHours());
        this.minutes = Clocks.formatDigits(date.getMinutes());
        this.seconds = Clocks.formatDigits(date.getSeconds());
        
        return this;
    }
    
    /** 
     * function to calculate local time
     * in a different city
     * given the city's UTC offset
     * 
     * @param offset the timezone offset in hours.
     * @param d the date to add the offset to
     */
    private calcTime(offset: number, d: Date) {
    
        // convert to msec
        // add local time offset
        var utc: number = d.getTime() + 
            // get UTC time offset in msec
            (d.getTimezoneOffset() * 60 * 1000);
    
        // create new Date object for different city
        // using supplied offset
        return new Date(utc + (3600000 * offset));
    
    }
        
} 