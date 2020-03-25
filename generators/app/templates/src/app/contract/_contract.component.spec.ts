import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
<% if (props.ui === 'ionic') { -%>
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
<% } else if (props.ui === 'material') { -%>
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
<% } -%>
<% if (props.angulartics) { -%>
import { RouterTestingModule } from '@angular/router/testing';
import { Angulartics2Module } from 'angulartics2';
<% } -%>

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
<% if (props.ui === 'material') { -%>
import { MaterialModule } from '@app/material.module';
<% } -%>
import { ContractComponent } from './contract.component';
import { QuoteService } from './quote.service';

describe('ContractComponent', () => {
  let component: ContractComponent;
  let fixture: ComponentFixture<ContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
<% if (props.ui === 'ionic') { -%>
          IonicModule.forRoot(),
<% } else if (props.ui === 'material') { -%>
          BrowserAnimationsModule,
          FlexLayoutModule,
          MaterialModule,
<% } -%>
<% if (props.angulartics) { -%>
          RouterTestingModule,
          Angulartics2Module.forRoot(),
<% } -%>
          CoreModule,
          SharedModule,
          HttpClientTestingModule
        ],
<% if (props.ui === 'ionic') { -%>
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
<% } -%>
        declarations: [ContractComponent],
        providers: [QuoteService]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
