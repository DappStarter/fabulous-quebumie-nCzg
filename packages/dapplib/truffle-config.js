require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind concert grace beauty forget spot'; 
let testAccounts = [
"0xf4c6fbf26a2871febae79db69d672f41e6ff64a064b2d2f076a669b706daf21c",
"0x5202b7050bb67c4d84fd55aae39ae14f49d3bb9e7fa2a17264d73fd41893b6e8",
"0xe54190835d2b7a5ab228ab9b792c362e7b583efafa425087fc3a8c77ad3ec803",
"0x1455028b90797617c6ea3c888e434371aa4a2c28554f07edd6e34c8f3fa6ee2c",
"0xfc4ff023b7d5573c96d5a120c34d418a39ecdc4200502146ef4dadce593a3362",
"0x70f761ef17fba822004ee6821b7c4b0befe0075deca5fda7972d0b869f757d9a",
"0x3e7e90e8b5cfd47346e5ab20862041b0ea945ac2fc4fd0e4ed2886e88e6efe82",
"0x7f03c6bcb464132093949841bd0ba9a989e4b0d5dcf34209a87289123a2a60ac",
"0x4149400c0fb397b79bd7d13cff20cd4b7b0c9946e9adfaf6b1fd8cb5efb08365",
"0xdbac41e114050d83bbe421c81b9340ec17d5fe2b48ae44ebb8e4ec9d276f6a30"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

