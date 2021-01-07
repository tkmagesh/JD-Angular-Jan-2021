import { Pipe, PipeTransform } from '@angular/core'

interface Comparer{
    (item1 : any, item2 : any) : number
}

@Pipe({ 
    name : 'sort'
})
export class SortPipe implements PipeTransform{
    private getDescComparerFor(comparer : Comparer) : Comparer {
        return function(item1 : any, item2 : any) : number {
            return comparer(item1, item2) * -1;
        }
    }
    private getComparerFor(attrName : string, isDesc : boolean) : Comparer {
        const comparer = function(item1 : any, item2 : any) : number { 
            if (item1[attrName] < item2[attrName]) return -1;
            if (item1[attrName] > item2[attrName]) return 1;
            return 0;
        }
        if (isDesc) return this.getDescComparerFor(comparer);
        return comparer;
    }
    transform(list: any[], sortAttr : string, isDesc : boolean = false) {
        if (!list || !list.length || !sortAttr) return list;
        const comparer = this.getComparerFor(sortAttr, isDesc);
        return list.sort(comparer);
    }

}