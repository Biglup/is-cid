/**
 * Copyright 2024 Biglup Labs.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @packageDocumentation
 *
 * Utils to proper validate CIDs to remove false-positives.
 *
 * @example
 *
 * ```TypeScript
 * import * as CidValidator from '@Biglup/is-cid'
 *
 * CidValidator.validate('QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o') // true (CIDv0)
 * CidValidator.validate('bafybeiasb5vpmaounyilfuxbd3lryvosl4yefqrfahsb2esg46q6tu6y5q') // true (CIDv1 in Base32)
 * CidValidator.validate('zdj7WWeQ43G6JJvLWQWZpyHuAMq6uYWRjkBXFad11vE2LHhQ7') // true (CIDv1 in Base58btc)
 * CidValidator.validate('xxxxx') // false
 * ```
 */

import { CID } from 'multiformats/cid'

/**
 * @param {any} input
 */
const isString = (input: any): input is string => {
  return typeof input === 'string'
}

const isValid = (hash: CID | string): hash is CID => {
  try {
    if (isString(hash)) {
      return Boolean(CID.parse(hash))
    }

    return Boolean(CID.asCID(hash)) // eslint-disable-line no-new
  } catch {
    return false
  }
}

/**
 * Returns `true` if the provided string or [`CID`](https://github.com/multiformats/js-multiformats/#readme)
 * object represents a valid [CID](https://docs.ipfs.io/guides/concepts/cid/) or
 * `false` otherwise.
 */
export { isValid }
