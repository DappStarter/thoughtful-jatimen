require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad heavy arm bottom surprise'; 
let testAccounts = [
"0xd362227fa2a7b702a27dde059a429ffbe86e468a0131bad0a0a9e6b96e403929",
"0x458bbe8e6ecc7b762d4dc1cfdf3f7c6728e51eba96db60b069361df676caf70d",
"0x3eb991ac89c0a8823d1486c798b1822df9781d1fbe97a3d0a697002ecc1e839f",
"0xd6e6b6038657bab2afceca7e0f50bc4b565894d1ed4dda9a2e21f7a0b41cfc2a",
"0xf0ae6dd4b2137b928fba59527c518830cbbd4e7fda00ca99f976231847697db2",
"0xb05e08e4490581ac5ec67e3288ee654f9d77fe4b7e4e52ede74ccdecb46d068f",
"0xbc3108c12e1aa912c71309b9764051ebcca94a0a3a99d11dd59cf93f224e81b4",
"0xa932b76d4873718a34c4dfdbd6fc39893cbc9dffb1ba211fde7bf948b879b8c1",
"0x15bc80993ae285c1ebd614332e95f171b6aefa5f4d57b864b1207868e4c7889f",
"0xce1fc1465b54680ff9cfdf646cb8fe2ced4f20523743676b734facb2ef54cff8"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
