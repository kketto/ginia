import { Component, Input } from '@angular/core';
import { Movie } from '../feed.component';


@Component({
    selector: 'app-feed-item',
    templateUrl: './feed-item.component.html',
    styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent {

    @Input()
    movie: Movie;

}