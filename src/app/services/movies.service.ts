import { Injectable } from '@angular/core';
import { Movie } from '../shared-components/feed/feed.component';

@Injectable({ providedIn: 'root' })
export class MoviesService {

    private movies: Movie[] = [{
        id: 1,
        title: 'Interstellar',
        director: 'Christopher Nolan',
        cast: ['Matthew McConahy', 'Ann Hat'],
        year: 2011,
        description: 'Super very good movie',
        rating: 9.2,
        imageSrc: 'http://localhost:4200/assets/interposter.jpg',
        videoSrc: 'https://s4501-l16.imovies.cc/video/imovie_hash_code/4/2017112615470346_high_geo.mp4?md5=X6kGrwj17XiKLKXDCQ8mUA&expires=1604272055&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTI6IjQ2LjQ5LjgwLjE1MSI7czoxMDoidXNlcl9hZ2VudCI7czoxMTU6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS84Ni4wLjQyNDAuMTExIFNhZmFyaS81MzcuMzYiO3M6NzoicmVmZXJlciI7czoyNjoiaHR0cHM6Ly93d3cuYWRqYXJhbmV0LmNvbS8iO30=',
        categorieIds: [1, 5, 6, 7, 25]
    },
    {
        id: 2,
        title: 'Kill Bill',
        director: 'Quentin Tarantino',
        cast: ['Uma Thurman', 'Quentin Tarantino'],
        year: 2004,
        description: 'very good movie',
        rating: 9.2,
        imageSrc: 'http://localhost:4200/assets/killposter.webp',
        videoSrc: '',
        categorieIds: [1, 5, 6, 7, 25]

    },
    {
        id: 3,
        title: 'Eat, Pray, Love',
        director: 'Quentin Tarantino',
        cast: ['Julia Roberts', 'Chavier Barden'],
        year: 2004,
        description: 'very good movie',
        rating: 9.2,
        imageSrc: 'http://localhost:4200/assets/eatpray.jpg',
        videoSrc: '',
        categorieIds: [5, 6, 7, 25]

    },
    {
        id: 4,
        title: 'Florence Foster Jenkins',
        director: 'Quentin Tarantino',
        cast: ['Meryl Streep', 'Hugh Grant'],
        year: 2004,
        description: 'very good movie',
        rating: 9.2,
        imageSrc: 'http://localhost:4200/assets/florence.jpg',
        videoSrc: '',
        categorieIds: [5, 6, 7, 25]

    },
    {
        id: 5,
        title: 'Harry Potter',
        director: 'Quentin Tarantino',
        cast: ['Daniel Radcliffe', 'Alan Rickman'],
        year: 2004,
        description: 'very good movie',
        rating: 9.2,
        imageSrc: 'http://localhost:4200/assets/harry.jpg',
        videoSrc: '',
        categorieIds: [5, 6, 7, 25]

    },
    {
        id: 6,
        title: 'Human Voice',
        director: 'Pedro Almadovar',
        cast: ['Tilda Swimpton'],
        year: 2004,
        description: 'very good movie',
        rating: 9.2,
        imageSrc: 'http://localhost:4200/assets/HumanVoice.jpeg',
        videoSrc: '',
        categorieIds: [5, 6, 7, 25]

    },
    {
        id: 7,
        title: 'We Need To Talk About Kevin',
        director: 'Quentin Tarantino',
        cast: ['Tilda Swimpton', 'Quentin Tarantino'],
        year: 2004,
        description: 'very good movie',
        rating: 9.2,
        imageSrc: 'http://localhost:4200/assets/kevin.jpg',
        videoSrc: '',
        categorieIds: [5, 6, 7, 25]

    },
    {
        id: 8,
        title: 'Pain and Glory',
        director: 'Pedro Almadovar',
        cast: ['Antonio Banderas', 'Penelope Kruz'],
        year: 2004,
        description: 'very good movie',
        rating: 9.2,
        imageSrc: 'http://localhost:4200/assets/painglory.jpg',
        videoSrc: '',
        categorieIds: [5, 6, 7, 25]

    },
    {
        id: 9,
        title: 'Moonlight',
        director: 'Barry Jenkins',
        cast: [' Mahershala Ali', 'Naomie Harris'],
        year: 2004,
        description: 'very good movie',
        rating: 9.2,
        imageSrc: 'http://localhost:4200/assets/moonlight.jpg',
        videoSrc: '',
        categorieIds: [5, 6, 7, 25]

    },
    {
        id: 10,
        title: 'Vicky Cristina Barcelona',
        director: 'Barry Jenkins',
        cast: ['Penelope Kruz', 'Chavier Barden', 'Scarllet Johanson'],
        year: 2004,
        description: 'very good movie',
        rating: 9.2,
        imageSrc: 'http://localhost:4200/assets/vicky.jpg',
        videoSrc: 'https://s4114-03.imovies.cc/video/imovie_hash_code/3/2017050402170742_high_eng.mp4?md5=Myi2OsQVsa-cylCjVsRvzw&expires=1605458951&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTI6IjQ2LjQ5LjgwLjE1MSI7czoxMDoidXNlcl9hZ2VudCI7czoxMTU6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS84Ni4wLjQyNDAuMTk4IFNhZmFyaS81MzcuMzYiO3M6NzoicmVmZXJlciI7czoyMzoiaHR0cHM6Ly93d3cuaW1vdmllcy5jYy8iO30=',
        categorieIds: [5, 6, 7, 25]

    },



    ];

    getMovies(): Movie[] {
        return this.movies;
    }

    searchMovie(searchTerm: string): Movie[] {

        searchTerm = searchTerm.toLowerCase();
        return this.movies.filter(movie => {
            return movie.title.toLowerCase().includes(searchTerm)
                || movie.director.toLowerCase().includes(searchTerm)
                || movie.cast.some(actor => actor.toLowerCase().includes(searchTerm))
        });
    }

    getMovieById(id: number): Movie {
        return this.movies.find((e) => {
            return id === e.id
        })
    }

    getMoviesByCategoryId(categoryId: number): Movie[] {

        return this.movies.filter((e) => {

            return e.categorieIds.includes(categoryId)
        })
    }

    addMovie(movie: Partial<Movie>): void {
        movie.id = this.movies.length + 1;
        movie.rating = 0;
        this.movies.push(movie as Movie)
    }

}
