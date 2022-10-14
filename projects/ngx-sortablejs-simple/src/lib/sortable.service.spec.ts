import { TestBed } from '@angular/core/testing';

import { SortablejsService } from './sortable.service';

describe('NgxSortablejsSimpleService', () => {
	let service: SortablejsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(SortablejsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
