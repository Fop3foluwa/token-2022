/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  combineCodec,
  getAddressDecoder,
  getAddressEncoder,
  getBooleanDecoder,
  getBooleanEncoder,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type Option,
  type OptionOrNullable,
  type WritableAccount,
} from '@solana/web3.js';
import { TOKEN_2022_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const INITIALIZE_CONFIDENTIAL_TRANSFER_MINT_DISCRIMINATOR = 27;

export function getInitializeConfidentialTransferMintDiscriminatorBytes() {
  return getU8Encoder().encode(
    INITIALIZE_CONFIDENTIAL_TRANSFER_MINT_DISCRIMINATOR
  );
}

export const INITIALIZE_CONFIDENTIAL_TRANSFER_MINT_CONFIDENTIAL_TRANSFER_DISCRIMINATOR = 0;

export function getInitializeConfidentialTransferMintConfidentialTransferDiscriminatorBytes() {
  return getU8Encoder().encode(
    INITIALIZE_CONFIDENTIAL_TRANSFER_MINT_CONFIDENTIAL_TRANSFER_DISCRIMINATOR
  );
}

export type InitializeConfidentialTransferMintInstruction<
  TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
  TAccountMint extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      ...TRemainingAccounts,
    ]
  >;

export type InitializeConfidentialTransferMintInstructionData = {
  discriminator: number;
  confidentialTransferDiscriminator: number;
  /**
   * Authority to modify the `ConfidentialTransferMint` configuration and to
   * approve new accounts.
   */
  authority: Option<Address>;
  /**
   * Determines if newly configured accounts must be approved by the
   * `authority` before they may be used by the user.
   */
  autoApproveNewAccounts: boolean;
  /** New authority to decode any transfer amount in a confidential transfer. */
  auditorElgamalPubkey: Option<Address>;
};

export type InitializeConfidentialTransferMintInstructionDataArgs = {
  /**
   * Authority to modify the `ConfidentialTransferMint` configuration and to
   * approve new accounts.
   */
  authority: OptionOrNullable<Address>;
  /**
   * Determines if newly configured accounts must be approved by the
   * `authority` before they may be used by the user.
   */
  autoApproveNewAccounts: boolean;
  /** New authority to decode any transfer amount in a confidential transfer. */
  auditorElgamalPubkey: OptionOrNullable<Address>;
};

export function getInitializeConfidentialTransferMintInstructionDataEncoder(): Encoder<InitializeConfidentialTransferMintInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['confidentialTransferDiscriminator', getU8Encoder()],
      [
        'authority',
        getOptionEncoder(getAddressEncoder(), {
          prefix: null,
          noneValue: 'zeroes',
        }),
      ],
      ['autoApproveNewAccounts', getBooleanEncoder()],
      [
        'auditorElgamalPubkey',
        getOptionEncoder(getAddressEncoder(), {
          prefix: null,
          noneValue: 'zeroes',
        }),
      ],
    ]),
    (value) => ({
      ...value,
      discriminator: INITIALIZE_CONFIDENTIAL_TRANSFER_MINT_DISCRIMINATOR,
      confidentialTransferDiscriminator:
        INITIALIZE_CONFIDENTIAL_TRANSFER_MINT_CONFIDENTIAL_TRANSFER_DISCRIMINATOR,
    })
  );
}

export function getInitializeConfidentialTransferMintInstructionDataDecoder(): Decoder<InitializeConfidentialTransferMintInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['confidentialTransferDiscriminator', getU8Decoder()],
    [
      'authority',
      getOptionDecoder(getAddressDecoder(), {
        prefix: null,
        noneValue: 'zeroes',
      }),
    ],
    ['autoApproveNewAccounts', getBooleanDecoder()],
    [
      'auditorElgamalPubkey',
      getOptionDecoder(getAddressDecoder(), {
        prefix: null,
        noneValue: 'zeroes',
      }),
    ],
  ]);
}

export function getInitializeConfidentialTransferMintInstructionDataCodec(): Codec<
  InitializeConfidentialTransferMintInstructionDataArgs,
  InitializeConfidentialTransferMintInstructionData
> {
  return combineCodec(
    getInitializeConfidentialTransferMintInstructionDataEncoder(),
    getInitializeConfidentialTransferMintInstructionDataDecoder()
  );
}

export type InitializeConfidentialTransferMintInput<
  TAccountMint extends string = string,
> = {
  /** The mint. */
  mint: Address<TAccountMint>;
  authority: InitializeConfidentialTransferMintInstructionDataArgs['authority'];
  autoApproveNewAccounts: InitializeConfidentialTransferMintInstructionDataArgs['autoApproveNewAccounts'];
  auditorElgamalPubkey: InitializeConfidentialTransferMintInstructionDataArgs['auditorElgamalPubkey'];
};

export function getInitializeConfidentialTransferMintInstruction<
  TAccountMint extends string,
>(
  input: InitializeConfidentialTransferMintInput<TAccountMint>
): InitializeConfidentialTransferMintInstruction<
  typeof TOKEN_2022_PROGRAM_ADDRESS,
  TAccountMint
> {
  // Program address.
  const programAddress = TOKEN_2022_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    mint: { value: input.mint ?? null, isWritable: true },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [getAccountMeta(accounts.mint)],
    programAddress,
    data: getInitializeConfidentialTransferMintInstructionDataEncoder().encode(
      args as InitializeConfidentialTransferMintInstructionDataArgs
    ),
  } as InitializeConfidentialTransferMintInstruction<
    typeof TOKEN_2022_PROGRAM_ADDRESS,
    TAccountMint
  >;

  return instruction;
}

export type ParsedInitializeConfidentialTransferMintInstruction<
  TProgram extends string = typeof TOKEN_2022_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** The mint. */
    mint: TAccountMetas[0];
  };
  data: InitializeConfidentialTransferMintInstructionData;
};

export function parseInitializeConfidentialTransferMintInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedInitializeConfidentialTransferMintInstruction<
  TProgram,
  TAccountMetas
> {
  if (instruction.accounts.length < 1) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      mint: getNextAccount(),
    },
    data: getInitializeConfidentialTransferMintInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
