import { describe, test, expect } from "@jest/globals"
import { produtos1 } from "../randomArrayValue/randomArrayValue"
import { ErrorGetValues } from "../randomArrayValue/error.enum"
import { randomArayValue } from "../randomArrayValue/classRandomArrayValue"

describe("class randomValue", () => {
    test("verificar se aceita somente numero como parametro de tamanho", () => {
        const randomObject = new randomArayValue()
        randomObject.setProducts(produtos1)
        //@ts-ignore
        randomObject.setNumberOfRandomObjects("tt")
        expect(randomObject.getRandomize()).toBe(ErrorGetValues.NOT_NUMBER)
    })
    test("verificar se recusa um valor de parametro tamanho maior que o tamanho do array", () => {
        const randomObject = new randomArayValue()
        randomObject.setProducts(produtos1)
        randomObject.setNumberOfRandomObjects(100)
        expect(randomObject.getRandomize()).toBe(ErrorGetValues.OVER_LIMIT)
    })
    test("verificar se recusa um valor de parametro tamanho menor ou igual a 0", () => {
        const randomObject = new randomArayValue()
        randomObject.setProducts(produtos1)
        randomObject.setNumberOfRandomObjects(0)
        expect(randomObject.getRandomize()).toBe(ErrorGetValues.UNDER_MIN)
    })
})