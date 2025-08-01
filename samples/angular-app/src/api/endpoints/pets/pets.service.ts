/**
 * Generated by orval v7.11.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { HttpClient } from '@angular/common/http';
import type {
  HttpContext,
  HttpEvent,
  HttpHeaders,
  HttpParams,
  HttpResponse as AngularHttpResponse,
} from '@angular/common/http';

import { Injectable, inject } from '@angular/core';

import type { DeepNonNullable } from '@orval/core/src/utils/deep-non-nullable';

import { Observable } from 'rxjs';

import type {
  CreatePetsBody,
  ListPetsParams,
  Pet,
  Pets,
  SearchPetsParams,
} from '../../model';

import listPetsMutator from '../../mutator/response-type';

interface HttpClientOptions {
  headers?: HttpHeaders | Record<string, string | string[]>;
  context?: HttpContext;
  params?:
    | HttpParams
    | Record<
        string,
        string | number | boolean | ReadonlyArray<string | number | boolean>
      >;
  reportProgress?: boolean;
  withCredentials?: boolean;
  credentials?: RequestCredentials;
  keepalive?: boolean;
  priority?: RequestPriority;
  cache?: RequestCache;
  mode?: RequestMode;
  redirect?: RequestRedirect;
  referrer?: string;
  integrity?: string;
  transferCache?: { includeHeaders?: string[] } | boolean;
  timeout?: number;
}

@Injectable({ providedIn: 'root' })
export class PetsService {
  private readonly http = inject(HttpClient);
  /**
   * @summary search by query params
   */
  searchPets<TData = Pets>(
    params: DeepNonNullable<SearchPetsParams>,
    version?: number,
    options?: HttpClientOptions & { observe?: 'body' },
  ): Observable<TData>;
  searchPets<TData = Pets>(
    params: DeepNonNullable<SearchPetsParams>,
    version?: number,
    options?: HttpClientOptions & { observe: 'events' },
  ): Observable<HttpEvent<TData>>;
  searchPets<TData = Pets>(
    params: DeepNonNullable<SearchPetsParams>,
    version?: number,
    options?: HttpClientOptions & { observe: 'response' },
  ): Observable<AngularHttpResponse<TData>>;
  searchPets<TData = Pets>(
    params: DeepNonNullable<SearchPetsParams>,
    version: number = 1,
    options?: HttpClientOptions & { observe?: any },
  ): Observable<any> {
    return this.http.get<TData>(`/v${version}/search`, {
      ...options,
      params: { ...params, ...options?.params },
    });
  }
  /**
   * @summary List all pets
   */
  listPets<TData = Pets>(
    params?: DeepNonNullable<ListPetsParams>,
    version: number = 1,
  ) {
    return listPetsMutator<TData>(
      { url: `/v${version}/pets`, method: 'GET', params },
      this.http,
    );
  }
  /**
   * @summary Create a pet
   */
  createPets<TData = null>(
    createPetsBody: CreatePetsBody,
    version?: number,
    options?: HttpClientOptions & { observe?: 'body' },
  ): Observable<TData>;
  createPets<TData = null>(
    createPetsBody: CreatePetsBody,
    version?: number,
    options?: HttpClientOptions & { observe: 'events' },
  ): Observable<HttpEvent<TData>>;
  createPets<TData = null>(
    createPetsBody: CreatePetsBody,
    version?: number,
    options?: HttpClientOptions & { observe: 'response' },
  ): Observable<AngularHttpResponse<TData>>;
  createPets<TData = null>(
    createPetsBody: CreatePetsBody,
    version: number = 1,
    options?: HttpClientOptions & { observe?: any },
  ): Observable<any> {
    return this.http.post<TData>(`/v${version}/pets`, createPetsBody, options);
  }
  /**
   * @summary Info for a specific pet
   */
  showPetById<TData = Pet>(
    petId: string,
    version?: number,
    options?: HttpClientOptions & { observe?: 'body' },
  ): Observable<TData>;
  showPetById<TData = Pet>(
    petId: string,
    version?: number,
    options?: HttpClientOptions & { observe: 'events' },
  ): Observable<HttpEvent<TData>>;
  showPetById<TData = Pet>(
    petId: string,
    version?: number,
    options?: HttpClientOptions & { observe: 'response' },
  ): Observable<AngularHttpResponse<TData>>;
  showPetById<TData = Pet>(
    petId: string,
    version: number = 1,
    options?: HttpClientOptions & { observe?: any },
  ): Observable<any> {
    return this.http.get<TData>(`/v${version}/pets/${petId}`, options);
  }
  /**
   * @summary Info for a specific pet
   */
  showPetText(
    petId: string,
    version?: number,
    options?: HttpClientOptions & { observe?: 'body' },
  ): Observable<string>;
  showPetText(
    petId: string,
    version?: number,
    options?: HttpClientOptions & { observe: 'events' },
  ): Observable<HttpEvent<string>>;
  showPetText(
    petId: string,
    version?: number,
    options?: HttpClientOptions & { observe: 'response' },
  ): Observable<AngularHttpResponse<string>>;
  showPetText(
    petId: string,
    version: number = 1,
    options?: HttpClientOptions & { observe?: any },
  ): Observable<any> {
    return this.http.get(`/v${version}/pets/${petId}/text`, {
      responseType: 'text',
      ...options,
    });
  }
  /**
   * Upload image of the pet.
   * @summary Uploads an image.
   */
  uploadFile<TData = null>(
    petId: number,
    uploadFileBody: Blob,
    version?: number,
    options?: HttpClientOptions & { observe?: 'body' },
  ): Observable<TData>;
  uploadFile<TData = null>(
    petId: number,
    uploadFileBody: Blob,
    version?: number,
    options?: HttpClientOptions & { observe: 'events' },
  ): Observable<HttpEvent<TData>>;
  uploadFile<TData = null>(
    petId: number,
    uploadFileBody: Blob,
    version?: number,
    options?: HttpClientOptions & { observe: 'response' },
  ): Observable<AngularHttpResponse<TData>>;
  uploadFile<TData = null>(
    petId: number,
    uploadFileBody: Blob,
    version: number = 1,
    options?: HttpClientOptions & { observe?: any },
  ): Observable<any> {
    return this.http.post<TData>(
      `/v${version}/pet/${petId}/uploadImage`,
      uploadFileBody,
      options,
    );
  }
  /**
   * Download image of the pet.
   * @summary Download an image.
   */
  downloadFile(
    petId: number,
    version?: number,
    options?: HttpClientOptions & { observe?: 'body' },
  ): Observable<Blob>;
  downloadFile(
    petId: number,
    version?: number,
    options?: HttpClientOptions & { observe: 'events' },
  ): Observable<HttpEvent<Blob>>;
  downloadFile(
    petId: number,
    version?: number,
    options?: HttpClientOptions & { observe: 'response' },
  ): Observable<AngularHttpResponse<Blob>>;
  downloadFile(
    petId: number,
    version: number = 1,
    options?: HttpClientOptions & { observe?: any },
  ): Observable<any> {
    return this.http.get(`/v${version}/pet/${petId}/downloadImage`, {
      responseType: 'blob',
      ...options,
    });
  }
}

export type SearchPetsClientResult = NonNullable<Pets>;
export type ListPetsClientResult = NonNullable<Pets>;
export type CreatePetsClientResult = never;
export type ShowPetByIdClientResult = NonNullable<Pet>;
export type ShowPetTextClientResult = NonNullable<string>;
export type UploadFileClientResult = never;
export type DownloadFileClientResult = NonNullable<Blob>;
