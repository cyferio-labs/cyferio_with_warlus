// import { fromB64 } from '@mysten/bcs';
// import nacl from 'tweetnacl';
// import { IntentScope, messageWithIntent } from './intent';
// import { secp256k1 } from '@noble/curves/secp256k1';
// import { sha256 } from '@noble/hashes/sha256';
// import {
//   fromSerializedSignature,
//   SerializedSignature,
// } from '../cryptography/signature';
// import { blake2b } from '@noble/hashes/blake2b';

// export async function verifyMessage(
//   message: Uint8Array | string,
//   serializedSignature: SerializedSignature,
//   scope: IntentScope,
// ) {
//   const signature = fromSerializedSignature(serializedSignature);
//   const messageBytes = messageWithIntent(
//     scope,
//     typeof message === 'string' ? fromB64(message) : message,
//   );
//   const digest = blake2b(messageBytes, { dkLen: 32 });
//   switch (signature.signatureScheme) {
//     case 'ED25519':
//       return nacl.sign.detached.verify(
//         digest,
//         signature.signature,
//         signature.pubKey.toBytes(),
//       );
//     case 'Secp256k1':
//       return secp256k1.verify(
//         secp256k1.Signature.fromCompact(signature.signature),
//         sha256(digest),
//         signature.pubKey.toBytes(),
//       );
//     default:
//       throw new Error(
//         `Unknown signature scheme: "${signature.signatureScheme}"`,
//       );
//   }
// }