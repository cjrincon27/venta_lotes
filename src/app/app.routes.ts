import { Routes } from "@angular/router";

export const appRoutes: Routes =[
    {
        path:'',
        redirectTo:'lotes',
        pathMatch:'full',
    },
    {
        path:'lotes',
        loadChildren:()=> 
        import('./pages/lotes/lotes.routes').then(routes => routes.lotesRoutes ),
    },
]
