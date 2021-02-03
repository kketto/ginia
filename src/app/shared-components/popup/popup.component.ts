import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ComponentFactoryResolver,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    SimpleChanges,
    Type,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { Subscription } from 'rxjs';



@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnChanges, AfterViewInit, OnDestroy {
    @ViewChild('container', { read: ViewContainerRef, static: false })
    container: ViewContainerRef;

    @Input()
    title: string;

    @Input()
    width: string;

    @Input()
    height: string;

    @Input()
    component: Type<unknown>;

    @Input()
    additionalInputs: any;

    @Output()
    close = new EventEmitter<void>();

    private subscriber: Subscription;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.component?.previousValue && changes.component?.currentValue !== changes.component?.previousValue) {
            this.renderComponent();
        }
    }

    ngAfterViewInit(): void {
        this.renderComponent();
    }

    onClose(): void {
        this.close.emit();
    }

    private renderComponent(): void {
        if (!this.container) {
            return;
        }
        this.unsubscribe();
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);

        const viewContainerRef = this.container.createComponent(componentFactory);
        (viewContainerRef.instance as any).additionalInputs = this.additionalInputs;
        viewContainerRef.changeDetectorRef.detectChanges();
        this.subscriber = (viewContainerRef.instance as any).close.subscribe(() => { this.onClose(); });
    }

    private unsubscribe(): void {
        if (this.subscriber) {
            this.subscriber.unsubscribe();
        }
    }

    ngOnDestroy(): void {
        this.unsubscribe();
    }
}