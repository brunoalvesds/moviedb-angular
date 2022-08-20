import { HttpUrlEncodingCodec } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GetMoviesService } from './get-movies.service';

describe('GetMoviesService', () => {
  let service: GetMoviesService;
  let http: HttpTestingController;
  const urlCodec = new HttpUrlEncodingCodec();
  const mockResponse = {
    id: '5'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetMoviesService]
    });
    service = TestBed.inject(GetMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate proper GET request for Search', function () {
    expect(service).toBeTruthy();
    service.searchMovies('Batman').subscribe((res: any) => {
      expect(res.results[0]).toEqual(
        { id: '414906' }
      );
    });
  });

  it('should generate proper GET request for Details', function () {
    expect(service).toBeTruthy();
    service.getDetails('414906').subscribe((res: any) => {
      expect(res).toEqual(
        { id: '414906' }
      );
    });
  });
});
