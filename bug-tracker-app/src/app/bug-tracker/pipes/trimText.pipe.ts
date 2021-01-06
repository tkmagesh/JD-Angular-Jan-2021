import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'trimText'
})
export class TrimTextPipe implements PipeTransform {
    transform(data : string) : string {
        return data.length > 30 ? data.substr(0,30 ) + '...' : data;
    }
}