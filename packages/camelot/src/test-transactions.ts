import type { Address, Hash } from 'viem'
import type { ActionParams, SwapActionParams } from '@rabbitholegg/questdk'
import { GreaterThanOrEqual } from '@rabbitholegg/questdk'
import { parseEther } from 'viem'
import { ARBITRUM_CHAIN_ID } from './chain-ids'
import { CAMELOT_ROUTER, ETH_ADDRESS } from './contract-addresses'

interface Transaction {
  chainId: number
  from: Address
  hash?: Hash
  input: string
  to: Address
  value: string
}

type TestParams<T extends ActionParams> = {
  transaction: Transaction
  params: T
}

interface TestCase<T extends ActionParams> {
  transaction: Transaction
  params: T
  description: string
}

function createTestCase<T extends ActionParams>(
  testParams: TestParams<T>,
  description: string,
  overrides: Partial<T> = {},
): TestCase<T> {
  return {
    transaction: testParams.transaction,
    params: { ...testParams.params, ...overrides },
    description,
  }
}

export const SWAP_ETH: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    from: '0x2a73fa7bc21d580c01f9d983e37e15e777a73b0b',
    hash: '0x659233e044e47a604aebd6f8dc20c385a77ed62294d8724fc98850c8ec3d7d6e',
    input:
      '0xb4822be3000000000000000000000000000000000000000000000000822f628b80d92acf00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000002a73fa7bc21d580c01f9d983e37e15e777a73b0b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000065284bfa000000000000000000000000000000000000000000000000000000000000000200000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab1000000000000000000000000bfbcfe8873fe28dfa25f1099282b088d52bbad9c',
    to: '0xc873fecbd354f5a56e00e710b90ef4201db2448d',
    value: '550000000000000',
  },
  params: {
    chainId: ARBITRUM_CHAIN_ID,
    contractAddress: CAMELOT_ROUTER,
    tokenIn: ETH_ADDRESS,
    tokenOut: '0xBfbCFe8873fE28Dfa25f1099282b088D52bbAD9C',
    amountIn: GreaterThanOrEqual(parseEther('0.0005'))
  },
}

export const SWAP_TOKENS: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    from: '0x1a185e25636306a13d3164a511f7c610f3930caa',
    hash: '0x44ccdf21a54f5b2ea92358fedf88da067d4b05a3f9546bfa1d3c02f006be7f13',
    input:
      '0xac3893ba000000000000000000000000000000000000000000000028cf73e0389658000000000000000000000000000000000000000000000000000000000000010cb66400000000000000000000000000000000000000000000000000000000000000c00000000000000000000000001a185e25636306a13d3164a511f7c610f3930caa0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006528487400000000000000000000000000000000000000000000000000000000000000020000000000000000000000005190f06eacefa2c552dc6bd5e763b81c73293293000000000000000000000000fd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
    to: '0xc873fecbd354f5a56e00e710b90ef4201db2448d',
    value: '0',
  },
  params: {
    chainId: ARBITRUM_CHAIN_ID,
    tokenIn: '0x5190F06EaceFA2C552dc6BD5e763b81C73293293', // WOMBEX
    tokenOut: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', // TETHER
    amountIn: GreaterThanOrEqual(parseEther('750')),
  },
}

export const passingTestCases = [
  createTestCase(SWAP_ETH, 'when swapping ETH for tokens'),
  createTestCase(SWAP_TOKENS, 'when swapping tokens for tokens'),
]
