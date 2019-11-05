import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation, Output, EventEmitter} from "@angular/core"
//import {PaginationInstance} from 'ngx-pagination';;

@Component({
    selector: 'custom-template',
    templateUrl: './custom-template.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    //encapsulation: ViewEncapsulation.None,
    styleUrls: ['./custom-template.component.css']
})
export class CustomTemplateComponent {
    //@Input('config') config: any[] = [];  //it will show error in template Property id does not exist on type any
     @Input('config') config: any;
    
    @Output() pageChange = new EventEmitter();

    //@Input('configServer') configServer: any[] = [];
    /* public config: any = {
        id: 'custom',
        itemsPerPage: 3,
        currentPage: 1
    }; */
}
