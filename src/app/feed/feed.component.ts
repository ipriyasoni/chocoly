import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  template: `
  <ngb-accordion #a="ngbAccordion" activeIds="custom-panel-1">
  <ngb-panel id="custom-panel-1">
    <ng-template ngbPanelHeader let-opened="opened">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="m-0">First panel - {{ opened ? 'opened' : 'collapsed' }}</h5>
        <button ngbPanelToggle class="btn btn-link p-0">Toggle first</button>
      </div>
    </ng-template>
    <ng-template ngbPanelContent>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
      labore sustainable VHS.
    </ng-template>
  </ngb-panel>
  <ngb-panel>
    <ng-template ngbPanelHeader>
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="m-0">Second panel</h5>
        <div>
          <button ngbPanelToggle class="btn btn-sm btn-outline-primary ml-2">Toggle second</button>
          <button type="button" class="btn btn-sm btn-outline-secondary ml-2" (click)="disabled = !disabled">
            {{ disabled ? 'En' : 'Dis' }}able third
          </button>
          <button type="button" class="btn btn-sm btn-outline-danger ml-2" (click)="a.collapseAll()">Collapse all</button>
        </div>
      </div>
    </ng-template>
    <ng-template ngbPanelContent>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
      labore sustainable VHS.
    </ng-template>
  </ngb-panel>
  <ngb-panel [disabled]="disabled" [cardClass]="disabled ? 'disabled' : ''">
    <ng-template ngbPanelHeader>
      <div class="d-flex align-items-center justify-content-between">
        <button ngbPanelToggle class="btn btn-link container-fluid text-left pl-0">Third panel</button>
        <p *ngIf="disabled" class="text-muted m-0 small">[I'm&nbsp;disabled]</p>
      </div>
    </ng-template>
    <ng-template ngbPanelContent>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
      labore sustainable VHS.
    </ng-template>
  </ngb-panel>
</ngb-accordion>
  `,
  styles: [`
  .card.disabled {
    opacity: 0.5;
  }
`
  ]
})
export class FeedComponent implements OnInit {
  disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
