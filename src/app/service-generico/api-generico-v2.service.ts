import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class Resource {
  id?: any;
}

export class ResourceService<T extends Resource> {
  defaultUrl: string = 'http://localhost:3000';

  constructor(public httpClient: HttpClient, public endpoint: string) {}

  public create(item: T): Observable<T> {
    return this.httpClient.post<T>(`${this.defaultUrl}/${this.endpoint}`, item);
  }

  public update(item: T): Observable<T> {
    return this.httpClient.put<T>(
      `${this.defaultUrl}/${this.endpoint}/${item.id}`,
      item
    );
  }

  read(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.defaultUrl}/${this.endpoint}/${id}`);
  }

  list(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.defaultUrl}/${this.endpoint}`);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.defaultUrl}/${this.endpoint}/${id}`);
  }
}
