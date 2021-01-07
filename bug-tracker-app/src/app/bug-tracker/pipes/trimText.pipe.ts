import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'trimText'
})
export class TrimTextPipe implements PipeTransform {
    transform(data : string, textLength : number = 30) : string {
        return data.length > textLength ? data.substr(0,textLength) + '...' : data;
    }
}