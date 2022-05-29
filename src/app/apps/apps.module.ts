import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppsRoutingModule } from './apps-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppsComponent } from './apps.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';

import { ServiceblogService } from './blog/blog-service.service';
import { RelayOnComponent } from './about/About-Components/relay-on/relay-on.component';
import { TopContentComponent } from './about/About-Components/top-content/top-content.component';

import { FullComponent } from './layout/full/full.component';

import { BannerComponent } from './shared/banner/banner.component';
import { BannerNavigationComponent } from './shared/banner-navigation/banner-navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SolutionComponent } from './solution/solution.component';
import { EstudioCasoDerivacionComponent } from './estudio-caso-derivacion/estudio-caso-derivacion.component';
import { IntroduccionDiferenciacionComponent } from './introduccion-diferenciacion/introduccion-diferenciacion.component';
import { SolucionDiferenciacionComponent } from './solucion-diferenciacion/solucion-diferenciacion.component';
import { ReferenciasComponent } from './referencias/referencias.component';
import { IntroduccionIntegracionComponent } from './introduccion-integracion/introduccion-integracion.component';
import { EstudioCasoIntroduccionComponent } from './estudio-caso-introduccion/estudio-caso-introduccion.component';
import { SolucionIntroduccionComponent } from './solucion-introduccion/solucion-introduccion.component';

@NgModule({
  declarations: [
    AppsComponent,
    BlogComponent,
    AboutComponent,
    BlogDetailComponent,
    RelayOnComponent,
    TopContentComponent,
    FullComponent,
    BannerComponent,
    // BannerContentComponent,
    BannerNavigationComponent,
    FooterComponent,
    SolutionComponent,
    EstudioCasoDerivacionComponent,
    IntroduccionDiferenciacionComponent,
    SolucionDiferenciacionComponent,
    ReferenciasComponent,
    IntroduccionIntegracionComponent,
    EstudioCasoIntroduccionComponent,
    SolucionIntroduccionComponent,
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ServiceblogService],
})
export class AppsModule {}
