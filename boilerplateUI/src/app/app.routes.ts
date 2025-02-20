import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./components/homepage/homepage.component').then(
                m => m.HomepageComponent
            )
        }
    },
    {
        path: 'apicallpage',
        loadChildren: () => {
            return import('./components/apicallpage/apicallpage.module').then(
                m => m.ApicallpageModule
            )
        }
    }

];
