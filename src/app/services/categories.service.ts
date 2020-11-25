import { Injectable } from '@angular/core';
import { Category } from '../shared-components/feed/categories/categories.component';

@Injectable({ providedIn: 'root' })

export class CategoriesService {

    private categories: Category[] = [{
        id: 1,
        label: 'ანიმაციური',
        slug: 'animation'
    },

    {
        id: 2,
        label: 'ბიოგრაფიული',
        slug: '#'
    },
    {
        id: 3,
        label: 'დეტექტივი',
        slug: '#'
    },
    {
        id: 4,
        label: 'დოკუმენტური',
        slug: '#'
    },
    {
        id: 5,
        label: 'დრამა',
        slug: '#'
    },
    {
        id: 6,
        label: 'ეროტიკული',
        slug: '#'
    },
    {
        id: 7,
        label: 'ვესტერნი',
        slug: '#'
    },
    {
        id: 8,
        label: 'ისტორიული',
        slug: '#'
    },
    {
        id: 9,
        label: 'კომედია',
        slug: '#'
    },
    {
        id: 10,
        label: 'მელოდრამა',
        slug: '#'
    },
    {
        id: 11,
        label: 'მიუზიკლი',
        slug: '#'
    },
    {
        id: 12,
        label: 'მოკლემეტრაჟიანი',
        slug: '#'
    },
    {
        id: 16,
        label: 'მისტიკა',
        slug: '#'
    },
    {
        id: 13,
        label: 'მუსიკალური',
        slug: '#'
    },
    {
        id: 14,
        label: 'მძაფრ-სიუჟეტიანი',
        slug: '#'
    },
    {
        id: 15,
        label: 'სათავგადასავლო',
        slug: '#'
    },
    {
        id: 17,
        label: 'ფანტასტიკა',
        slug: '#'
    },
    {
        id: 18,
        label: 'საომარი',
        slug: '#'
    },
    {
        id: 19,
        label: 'საოჯახო',
        slug: '#'
    },
    {
        id: 20,
        label: 'საშინელებათა ფილმი',
        slug: '#'
    },
    {
        id: 21,
        label: 'სერიალი',
        slug: '#'
    },
    {
        id: 22,
        label: 'სპორტული',
        slug: '#'
    },
    {
        id: 23,
        label: 'თრილერი',
        slug: '#'
    },
    {
        id: 24,
        label: 'ზღაპრული (ფენტეზი)',
        slug: '#'
    },
    {
        id: 25,
        label: 'ანიმე',
        slug: '#'
    }
    ];

    getCategories(): Category[] {
        return this.categories;
    }

    getCategoryBySlug(slug: string): Category {

        return this.categories.find(e => e.slug === slug);


    }


}
