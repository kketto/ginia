import { Component, ComponentFactoryResolver, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupConfig, PopupService } from 'src/app/services/popup.service';
import { FeedItemComponent } from '../feed/item/feed-item.component';
import { FooterComponent } from '../footer/footer.component';



@Component({
    selector: 'app-popup-builder',
    templateUrl: './popup-builder.component.html'
})
export class PopupBuilderComponent implements OnInit, OnDestroy {
    config: PopupConfig;
    private subscriber: Subscription;

    constructor(private popupService: PopupService) { }

    ngOnInit(): void {
        this.subscriber = this.popupService.open$.subscribe(config => {
            this.config = config;
        });
    }

    onClose() {
        this.config = null;
    }

    ngOnDestroy(): void {
        this.subscriber.unsubscribe();
    }
}