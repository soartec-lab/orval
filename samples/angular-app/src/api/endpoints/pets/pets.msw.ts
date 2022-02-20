/**
 * Generated by orval v6.6.3 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import {
  rest
} from 'msw'
import faker from 'faker'

export const getListPetsMock = () => ([...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({id: faker.datatype.number(), name: (()=>faker.name.lastName())(), tag: (()=>faker.name.lastName())()})))

export const getShowPetByIdMock = () => ((()=>({id:faker.random.number({min:1,max:99}),name:faker.name.firstName(),tag:faker.helpers.randomize([faker.random.word(),void 0])}))())

export const getPetsMSW = () => [
rest.get('*/v:version/pets', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getListPetsMock()),
        )
      }),rest.post('*/v:version/pets', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/v:version/pets/:petId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getShowPetByIdMock()),
        )
      }),]
