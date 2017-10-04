interface IClockModel {

    hours: string;
    minutes: string;
    seconds: string;
    
    update(date: Date, offset?: number): IClockModel;

}