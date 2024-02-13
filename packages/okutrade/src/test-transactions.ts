import type { SwapActionParams } from '@rabbitholegg/questdk'
import { GreaterThanOrEqual } from '@rabbitholegg/questdk'
import {
  createTestCase,
  type TestParams,
} from '@rabbitholegg/questdk-plugin-utils'
import { parseEther, parseUnits, zeroAddress } from 'viem'

export const V3_NATIVE_TO_TOKENS: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 10,
    to: '0xb555edF5dcF85f42cEeF1f3630a52A108E55A654',
    from: '0x765a16ca391a6b9249cfa65bf2d14c38722198e3',
    hash: '0x36dc2eab9f5d7fe827a5c62bf3546257737d6b8ec956c0fd690093651e82d0f8',
    input:
      '0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000655aad0700000000000000000000000000000000000000000000000000000000000000020b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000005a981d69c5c0000000000000000000000000000000000000000000000000000000000000000120000000000000000000000000765a16ca391a6b9249cfa65bf2d14c38722198e3000000000000000000000000000000000000000000000000005a981d69c5c000000000000000000000000000000000000000000000000000000000000308ee3200000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004242000000000000000000000000000000000000060001f4da10009cbd5d07dd0cecc66161fc93d7c9000da10000647f5c764cbc14f9669b88837ca1490cca17c31607000000000000000000000000000000000000000000000000000000000000',
    value: '25500000000000000',
  },
  params: {
    chainId: 10,
    tokenIn: zeroAddress,
    tokenOut: '0x7f5c764cbc14f9669b88837ca1490cca17c31607', // USDC.e
    amountIn: GreaterThanOrEqual(parseEther('0.0255')),
    amountOut: GreaterThanOrEqual(parseUnits('50', 6)),
    recipient: '0x765a16ca391a6b9249cfa65bf2d14c38722198e3',
  },
}

export const V3_TOKENS_TO_NATIVE: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x4c60051384bd2d3c01bfc845cf5f4b44bcbe9de5',
    from: '0x908dd8ff33214f98d125307e3a4fd32e4bd1dc18',
    hash: '0x3561710ac94167647185332c1838664ee963778de6520f07928f03dbe5410238',
    input:
      '0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000006540ac3000000000000000000000000000000000000000000000000000000000000000040a000c0400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000032000000000000000000000000000000000000000000000000000000000000003800000000000000000000000000000000000000000000000000000000000000160000000000000000000000000fc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a00000000000000000000000000000000000000000000000005368b850abbde6b000000000000000000000000000000000000000000000000000000006568321e00000000000000000000000000000000000000000000000000000000000000010000000000000000000000004c60051384bd2d3c01bfc845cf5f4b44bcbe9de5000000000000000000000000000000000000000000000000000000006568321e00000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000004161aa5702f8d993ecd21c47be1eeb7313f5d90d555c05f4d8b5de42d43e4a758933d3510ac09413577ad849354d5d6bd9eda91dc07dfd8169f590c95c63ce889f1c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000005368b850abbde6b000000000000000000000000000000000000000000000000001c3e24ba8ff24c00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002bfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a00271082af49447d8a07e3bd95bd0d56f35241523fbab10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000fc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000',
    value: '0',
  },
  params: {
    chainId: 42161,
    tokenIn: '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a', // GMX
    tokenOut: zeroAddress,
    amountIn: GreaterThanOrEqual(parseUnits('0.375', 18)),
    amountOut: GreaterThanOrEqual(parseEther('0.007949')),
    recipient: '0x908dd8ff33214f98d125307e3a4fd32e4bd1dc18',
  },
}

export const V3_TOKENS_TO_TOKENS: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 324,
    to: '0x28731bcc616b5f51dd52cf2e4df0e78dd1136c06',
    from: '0x12ea9b753fe5ca77d43f3ace144fdd6b9c45bad6',
    hash: '0x7027dcbc48a4827948b448ac4021cc66bae51e6b94f651737b29f5592c6a67dd',
    input:
      '0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000655fa13d00000000000000000000000000000000000000000000000000000000000000020a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000001600000000000000000000000005aea5775959fbc2557cc8789bc1bf90a239d9a910000000000000000000000000000000000000000000000000334afd4103961d500000000000000000000000000000000000000000000000000000000655fa13d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000028731bcc616b5f51dd52cf2e4df0e78dd1136c0600000000000000000000000000000000000000000000000000000000655fa13d00000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000041ae8026952358d21283b0039baa6e2f7a99ce8fb3f89842c01ec68ad80383f28402c422aa571e20c21635e10442e16dba72553c156781e11b7087c0a8562384071b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000012ea9b753fe5ca77d43f3ace144fdd6b9c45bad60000000000000000000000000000000000000000000000000334afd4103961d5000000000000000000000000000000000000000000000000000000001c0fc1b800000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002b5aea5775959fbc2557cc8789bc1bf90a239d9a91000bb83355df6d4c9c3035724fd0e3914de96a5a83aaf4000000000000000000000000000000000000000000',
    value: '0',
  },
  params: {
    chainId: 324,
    tokenIn: '0x5aea5775959fbc2557cc8789bc1bf90a239d9a91', // WETH
    tokenOut: '0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4', // USDC
    amountIn: GreaterThanOrEqual(parseUnits('0.23', 18)),
    amountOut: GreaterThanOrEqual(parseUnits('470', 6)),
    recipient: '0x12ea9b753fe5ca77d43f3ace144fdd6b9c45bad6',
  },
}

export const BASE_V3_TOKENS_TO_TOKENS: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 8453,
    to: '0x198ef79f1f515f02dfe9e3115ed9fc07183f02fc',
    from: '0xa0a9d6fdb5190adc0aa448d821739400246816fc',
    hash: '0xaa7f17a98303690bd4d82cd26bb54527b9a2c692ef1118c803f4bb922b6c2940',
    input:
      '0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000659fc28100000000000000000000000000000000000000000000000000000000000000030a000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000160000000000000000000000000833589fcd6edb6e08f4c7c32d4f71b54bda02913000000000000000000000000ffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000065c74e4b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000198ef79f1f515f02dfe9e3115ed9fc07183f02fc00000000000000000000000000000000000000000000000000000000659fc85300000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000000413e13097bf41620c571c5aaf6fd64b00b1b7fa93481409121fa17ee479384abad74493013a90eebfd505788b814551b8baa603b4d996ecce11b852475c45848061c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000004fa97600000000000000000000000000000000000000000000000000070d9c80da2ea900000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002b833589fcd6edb6e08f4c7c32d4f71b54bda02913000bb842000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000070d9c80da2ea9',
    value: '0',
  },
  params: {
    chainId: 8453,
    tokenIn: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', // USDC
    tokenOut: zeroAddress, // ETH
    amountIn: GreaterThanOrEqual(parseUnits('5.220726', 6)),
    amountOut: GreaterThanOrEqual(parseEther('0.001985290664')),
    recipient: '0xa0a9d6fdb5190adc0aa448d821739400246816fc',
  },
}

export const passingTestCases = [
  createTestCase(V3_NATIVE_TO_TOKENS, 'swapping native to tokens on V3'),
  createTestCase(V3_TOKENS_TO_NATIVE, 'swapping tokens to native on V3'),
  createTestCase(V3_TOKENS_TO_TOKENS, 'swapping tokens to tokens on V3'),
  createTestCase(
    BASE_V3_TOKENS_TO_TOKENS,
    'swapping tokens to tokens on V3 (base)',
  ),
  createTestCase(
    V3_NATIVE_TO_TOKENS,
    'swapping tokenIn is set to "any" (using ETH)',
    { tokenIn: undefined },
  ),
  createTestCase(
    V3_TOKENS_TO_TOKENS,
    'swapping tokenIn is set to "any" (using tokens)',
    { tokenIn: undefined },
  ),
  createTestCase(
    V3_TOKENS_TO_NATIVE,
    'swapping tokenOut is set to "any" (using ETH)',
    { tokenOut: undefined },
  ),
  createTestCase(
    V3_TOKENS_TO_TOKENS,
    'swapping tokenOut is set to "any" (using tokens)',
    { tokenOut: undefined },
  ),
  createTestCase(V3_TOKENS_TO_TOKENS, 'swapping tokens are set to "any/any', {
    tokenIn: undefined,
    tokenOut: undefined,
  }),
]

export const failingTestCases = [
  createTestCase(V3_NATIVE_TO_TOKENS, 'when chainId is incorrect', {
    chainId: 1,
  }),
  createTestCase(V3_TOKENS_TO_NATIVE, 'when contract address is incorrect', {
    contractAddress: '0xEf1c6E67703c7BD7107eed8303Fbe6EC2554BF6B',
  }),
  createTestCase(V3_TOKENS_TO_TOKENS, 'when tokenIn is incorrect', {
    tokenIn: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  }),
  createTestCase(V3_NATIVE_TO_TOKENS, 'when tokenOut is incorrect', {
    tokenOut: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  }),
  createTestCase(V3_TOKENS_TO_NATIVE, 'when amountIn is insufficient', {
    amountIn: GreaterThanOrEqual(parseEther('100000')),
  }),
  createTestCase(V3_TOKENS_TO_TOKENS, 'when amountOut is insufficient', {
    amountOut: GreaterThanOrEqual(parseEther('100000')),
  }),
]
