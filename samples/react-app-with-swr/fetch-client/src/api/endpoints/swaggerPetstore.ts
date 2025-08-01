/**
 * Generated by orval v7.11.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import useSwr from 'swr';
import type { Key, SWRConfiguration } from 'swr';

import useSWRMutation from 'swr/mutation';
import type { SWRMutationConfiguration } from 'swr/mutation';

import type {
  CreatePetsBody,
  Error,
  ListPetsParams,
  Pet,
  Pets,
} from '../models';

/**
 * @summary List all pets
 */
export const getListPetsUrl = (params?: ListPetsParams) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString());
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0
    ? `http://localhost:8000/pets?${stringifiedParams}`
    : `http://localhost:8000/pets`;
};

export const listPets = async (
  params?: ListPetsParams,
  options?: RequestInit,
): Promise<Pets> => {
  const res = await fetch(getListPetsUrl(params), {
    ...options,
    method: 'GET',
  });

  const body = [204, 205, 304].includes(res.status) ? null : await res.text();
  const data: Pets = body ? JSON.parse(body) : {};

  return data;
};

export const getListPetsKey = (params?: ListPetsParams) =>
  [`http://localhost:8000/pets`, ...(params ? [params] : [])] as const;

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsQueryError = Promise<Error>;

/**
 * @summary List all pets
 */
export const useListPets = <TError = Promise<Error>>(
  params?: ListPetsParams,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof listPets>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
    fetch?: RequestInit;
  },
) => {
  const { swr: swrOptions, fetch: fetchOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false;
  const swrKey =
    swrOptions?.swrKey ?? (() => (isEnabled ? getListPetsKey(params) : null));
  const swrFn = () => listPets(params, fetchOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    swrOptions,
  );

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Create a pet
 */
export const getCreatePetsUrl = () => {
  return `http://localhost:8000/pets`;
};

export const createPets = async (
  createPetsBody: CreatePetsBody,
  options?: RequestInit,
): Promise<Pet> => {
  const res = await fetch(getCreatePetsUrl(), {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(createPetsBody),
  });

  const body = [204, 205, 304].includes(res.status) ? null : await res.text();
  const data: Pet = body ? JSON.parse(body) : {};

  return data;
};

export const getCreatePetsMutationFetcher = (options?: RequestInit) => {
  return (_: Key, { arg }: { arg: CreatePetsBody }): Promise<Pet> => {
    return createPets(arg, options);
  };
};
export const getCreatePetsMutationKey = () =>
  [`http://localhost:8000/pets`] as const;

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof createPets>>
>;
export type CreatePetsMutationError = Promise<Error>;

/**
 * @summary Create a pet
 */
export const useCreatePets = <TError = Promise<Error>>(options?: {
  swr?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    Key,
    CreatePetsBody,
    Awaited<ReturnType<typeof createPets>>
  > & { swrKey?: string };
  fetch?: RequestInit;
}) => {
  const { swr: swrOptions, fetch: fetchOptions } = options ?? {};

  const swrKey = swrOptions?.swrKey ?? getCreatePetsMutationKey();
  const swrFn = getCreatePetsMutationFetcher(fetchOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Info for a specific pet
 */
export const getShowPetByIdUrl = (petId: string) => {
  return `http://localhost:8000/pets/${petId}`;
};

export const showPetById = async (
  petId: string,
  options?: RequestInit,
): Promise<Pet> => {
  const res = await fetch(getShowPetByIdUrl(petId), {
    ...options,
    method: 'GET',
  });

  const body = [204, 205, 304].includes(res.status) ? null : await res.text();
  const data: Pet = body ? JSON.parse(body) : {};

  return data;
};

export const getShowPetByIdKey = (petId: string) =>
  [`http://localhost:8000/pets/${petId}`] as const;

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
export type ShowPetByIdQueryError = Promise<Error>;

/**
 * @summary Info for a specific pet
 */
export const useShowPetById = <TError = Promise<Error>>(
  petId: string,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof showPetById>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
    fetch?: RequestInit;
  },
) => {
  const { swr: swrOptions, fetch: fetchOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false && !!petId;
  const swrKey =
    swrOptions?.swrKey ?? (() => (isEnabled ? getShowPetByIdKey(petId) : null));
  const swrFn = () => showPetById(petId, fetchOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    swrOptions,
  );

  return {
    swrKey,
    ...query,
  };
};
