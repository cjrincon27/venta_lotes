import { Routes } from "@angular/router";
import { LoteaddComponent } from "./loteadd/loteadd.component";
import { LoteeditComponent } from "./loteedit/loteedit.component";
import { LotelistComponent } from "./lotelist/lotelist.component";


export const lotesRoutes: Routes =[
    {path:'',title:'lotes list',component: LotelistComponent},
    {path:'add',title:'lote add',component: LoteaddComponent},
    {path:'edit',title:'lote edit',component: LoteeditComponent},
]
