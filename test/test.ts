import { getPlural } from "../lib/index"

test("should return Boys", () => {
  var result = getPlural("Boy")
  expect(result).toEqual("Boys")
})

test("should return Girls", () => {
  var result = getPlural("Girl")
  expect(result).toEqual("Girls")
})

test("should return Geese", () => {
  var result = getPlural("Goose")
  expect(result).toEqual("Geese")
})

test("should return Toys", () => {
  var result = getPlural("Toy")
  expect(result).toEqual("Toys")
})

test("should return Men", () => {
  var result = getPlural("Man")
  expect(result).toEqual("Men")
})
