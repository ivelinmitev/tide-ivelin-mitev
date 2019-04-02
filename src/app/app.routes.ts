import { Routes, RouterModule } from '@angular/router';

import {AccountsComponent} from './components/accounts/accounts.component';

export const routes: Routes = [
    {
        path: '',
        component: AccountsComponent,
    }
];
export const routing = RouterModule.forRoot(routes);