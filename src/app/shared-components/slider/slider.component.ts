import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

export interface Slide {
    src: string;
    alt: string;
    path: string;
}
@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnChanges, OnInit, OnDestroy {


    @Input()
    slides: Slide[];

    activeSlide: Slide;

    private timeout: any;

    ngOnInit(): void {
        this.autoSlide();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.slides?.currentValue !== changes.slides?.previousValue) {
            this.activeSlide = this.slides[0];
        }

    }

    onNext(): void {
        let slideIndex = this.slides.indexOf(this.activeSlide) + 1;
        if (slideIndex === this.slides.length) {
            slideIndex = 0;
        }

        this.activeSlide = this.slides[slideIndex];
        this.autoSlide();
    }

    onPrevious(): void {

        let slideIndex = this.slides.indexOf(this.activeSlide) - 1;
        if (slideIndex === -1) {
            slideIndex = this.slides.length - 1;
        }

        this.activeSlide = this.slides[slideIndex];
        this.autoSlide();
    }

    private autoSlide(): void {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => {
            this.onNext();
        }, 3000)
    }



    ngOnDestroy(): void {
        clearTimeout(this.timeout);
    }
}