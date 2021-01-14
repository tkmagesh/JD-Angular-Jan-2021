import { BugApiService } from './bugApi.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('Bug Api Service', () => {

    let service : BugApiService,
        httpTestingController : HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports : [ HttpClientTestingModule],
            providers : [BugApiService]
        })
        service = TestBed.inject(BugApiService);
        httpTestingController = TestBed.get(HttpTestingController);
    });


    it("instance should be created", () => {
        expect(service).toBeDefined();
    })

    it("Should return all the bugs", () => {
        const testBugs = [
            {id : 1, name : 'Bug - 1'},
            {id : 2, name : 'Bug - 2'},
        ];

        service
            .getAll()
            .subscribe(bugs => {
                expect(bugs.length).toBe(2);
            });

        const req = httpTestingController.expectOne('http://localhost:3000/bugs');

        expect(req.request.method).toEqual("GET");

        req.flush(testBugs);
    })

    
})