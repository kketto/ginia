import { Component, Input } from '@angular/core';

export interface Movie {
    id: number;
    title: string;
    imageSrc: string;
    director: string;
    year: number;
    cast: any;
    description: string;
    rating: number;
    rateCount?: number;
    videoSrc: string;
    categorieIds: number[];
    categories?: any[];
}


@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

    @Input()
    movies: Movie[];

}