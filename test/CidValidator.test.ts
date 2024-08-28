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
 */

import * as CidValidator from '../dist/index.js'

describe('CidValidator', () => {
  it('isValid should match a valid CIDv0 (multihash)', () => {
    const actual = CidValidator.isValid('QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o')
    expect(actual).toEqual(true)
  })

  it('isValid should not match an invalid CIDv0 (multihash with a typo)', () => {
    const actual = CidValidator.isValid('QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE70')
    expect(actual).toEqual(false)
  })

  it('isValid should match a valid CIDv1 in Base58btc', () => {
    const actual = CidValidator.isValid('zdj7WWeQ43G6JJvLWQWZpyHuAMq6uYWRjkBXFad11vE2LHhQ7')
    expect(actual).toEqual(true)
  })

  it('isValid should match a valid CIDv1 in Base32', () => {
    const actual = CidValidator.isValid('bafybeie5gq4jxvzmsym6hjlwxej4rwdoxt7wadqvmmwbqi7r27fclha2va')
    expect(actual).toEqual(true)
  })

  it('isValid should not match an invalid CIDv1 (with a typo)', () => {
    const actual = CidValidator.isValid('zdj7WWeQ43G6JJvLWQWZpyHuAMq6uYWRjkBXFad11vE2LHhQ')
    expect(actual).toEqual(false)
  })

  it('isValid should not match an invalid CID', () => {
    const actual = CidValidator.isValid('noop')
    expect(actual).toEqual(false)
  })

  it('isValid should not match an invalid CID data type', () => {
    // @ts-expect-error invalid input
    const actual = CidValidator.isValid(4)
    expect(actual).toEqual(false)
  })
})
