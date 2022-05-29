import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';


import { FullComponent } from './layout/full/full.component';
import { SolutionComponent } from './solution/solution.component';
import { EstudioCasoDerivacionComponent } from './estudio-caso-derivacion/estudio-caso-derivacion.component';
import { IntroduccionDiferenciacionComponent } from './introduccion-diferenciacion/introduccion-diferenciacion.component';
import { SolucionDiferenciacionComponent } from './solucion-diferenciacion/solucion-diferenciacion.component';
import { ReferenciasComponent } from './referencias/referencias.component';
import { IntroduccionIntegracionComponent } from './introduccion-integracion/introduccion-integracion.component';
import { EstudioCasoIntroduccionComponent } from './estudio-caso-introduccion/estudio-caso-introduccion.component';
import { SolucionIntroduccionComponent } from './solucion-introduccion/solucion-introduccion.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', component: BlogComponent },
      { path: 'blogDetail/:id', component: BlogDetailComponent },
      { path: 'referencias', component: AboutComponent },
      { path: 'solucion', component:SolutionComponent},
      { path: 'introduccion-diferenciacion',component:IntroduccionDiferenciacionComponent},
      { path: 'introduccion-integracion',component:IntroduccionIntegracionComponent},
      { path: 'estudio-caso-diferenciacion',component:EstudioCasoDerivacionComponent},
      { path: 'estudio-caso-integracion',component:EstudioCasoIntroduccionComponent},
      { path: 'solucion-diferenciacion/:n',component:SolucionDiferenciacionComponent},
      { path: 'solucion-integracion/:n', component:SolucionIntroduccionComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
