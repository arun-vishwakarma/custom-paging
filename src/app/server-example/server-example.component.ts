import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, map, tap } from "rxjs/operators";

interface IServerResponse {
  items: string[];
  total: number;
}

@Component({
  selector: "server-example",
  templateUrl: "./server-example.component.html",
  styleUrls: ["server-example.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServerExampleComponent {
  @Input("meals") meals: string[] = [];
  asyncMeals: Observable<string[]>;
  p: number = 1;
  total: number;
  loading: boolean;

  ngOnInit() {
    this.getPage(1);
  }

  getPage(page: number) {
    this.loading = true;
    this.asyncMeals = serverCall(this.meals, page).pipe(
      tap(res => {
        this.total = res.total;
        this.p = page;
        this.loading = false;
      }),
      map(res => res.items)
    );
  }
}

/**
 * Simulate an async HTTP call with a delayed observable.
 */
function serverCall(
  meals: string[],
  page: number
): Observable<IServerResponse> {
  const perPage = 2;
  const start = (page - 1) * perPage;
  const end = start + perPage;

  console.log(start, end);

  console.log(meals);

  console.log(meals.slice(start, end));

  return of({
    items: meals.slice(start, end),
    total: 20
  }).pipe(delay(1000));
}
