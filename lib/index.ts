import * as pluralize from "pluralize"

/**
 * @Method: Returns the plural form of any noun.
 * @Param {string}
 * @Return {string}
 */
export function getPlural(str: string): string {
  return pluralize.plural(str)
}
