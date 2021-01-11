import { NgModule } from "@angular/core";

import { ElapsedPipe } from './pipes/elapsed.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TrimTextPipe } from './pipes/trimText.pipe';

const ALL_PIPES = [
    ElapsedPipe,
    SortPipe,
    TrimTextPipe
];

@NgModule({
    declarations: [
        ...ALL_PIPES
    ],
    exports : [
        ...ALL_PIPES
    ],
    providers: [],
    imports : [],
})
export class UtilsModule{

}