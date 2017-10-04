interface IClockModel {

    hours: string;
    minutes: string;
    seconds: string;
    timeZone: string;
    
    
    update(date: Date, offset?: number, timeZone?: string): IClockModel;

}