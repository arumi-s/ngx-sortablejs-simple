import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class SortablejsService {
	transfer!: ((items: any[]) => void) | null;
}
