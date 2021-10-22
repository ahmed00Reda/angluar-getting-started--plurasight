import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'convertToSpaces' 

})

export class ConvertToSpacesPipe implements PipeTransform{

    transform(valu: string , character:string):string{
        return valu.replace(character,' ');
    }


}