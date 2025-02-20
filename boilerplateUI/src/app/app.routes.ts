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
        loadComponent: () => {
            return import('./components/apicallpage/apicallpage.component').then(
                m => m.ApicallpageComponent
            )
        }
    }

];
