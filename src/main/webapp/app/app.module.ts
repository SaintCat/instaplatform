import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { InstaplatformSharedModule, UserRouteAccessService } from './shared';
import { InstaplatformAppRoutingModule} from './app-routing.module';
import { InstaplatformHomeModule } from './home/home.module';
import { InstaplatformAdminModule } from './admin/admin.module';
import { InstaplatformAccountModule } from './account/account.module';
import { InstaplatformEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        InstaplatformAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        InstaplatformSharedModule,
        InstaplatformHomeModule,
        InstaplatformAdminModule,
        InstaplatformAccountModule,
        InstaplatformEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class InstaplatformAppModule {}
