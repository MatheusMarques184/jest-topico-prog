import { describe, test, expect } from "@jest/globals"
import { getRandomObjects, produtos1 } from "../randomArrayValue/randomArrayValue"
import { ErrorGetValues } from "../randomArrayValue/error.enum"

describe("randomValue", () => {
    test("verificar se aceita somente numero como parametro de tamanho", () => {
        expect(getRandomObjects(produtos1, "tsteg")).toBe(ErrorGetValues.NOT_NUMBER)
    })
    test("verificar se recusa um valor de parametro tamanho maior que o tamanho do array", () => {
        expect(getRandomObjects(produtos1, 100)).toBe(ErrorGetValues.OVER_LIMIT)
    })
    test("verificar se recusa um valor de parametro tamanho menor ou igual a 0", () => {
        expect(getRandomObjects(produtos1, 0)).toBe(ErrorGetValues.UNDER_MIN)
    })
})