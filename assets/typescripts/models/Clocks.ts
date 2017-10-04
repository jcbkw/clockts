export class Clocks {
    public static formatDigits (val: number): string {
        return val < 10 ? `0${val}`: String(val);
    }
}