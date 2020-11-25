import { Component, Input } from '@angular/core';

export interface Movie {
    id: number;
    title: string;
    imageSrc: string;
    director: string;
    year: number;
    cast: string[];
    description: string;
    rating: number;
    videoSrc: string;
    categorieIds: number[];

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