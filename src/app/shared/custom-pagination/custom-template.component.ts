import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core"
//import {PaginationInstance} from 'ngx-pagination';;

@Component({
    selector: 'custom-template',
    templateUrl: './custom-template.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    //encapsulation: ViewEncapsulation.None,
    styleUrls: ['./custom-template.component.css']
})
export class CustomTemplateComponent {
    @Input('config') config: any[] = [];

    //@Input('configServer') configServer: any[] = [];
    /* public config: any = {
        id: 'custom',
        itemsPerPage: 3,
        currentPage: 1
    }; */
}