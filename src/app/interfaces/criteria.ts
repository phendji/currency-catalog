import { Filters } from './filters';
import { Page } from './page';

export interface Criteria {
    filters: Filters;
    page: Page;
}
