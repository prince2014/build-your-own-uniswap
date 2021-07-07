// const UniswapV2Factory = artifacts.require("UniswapV2Factory");
const UniswapV2Router02 = artifacts.require("UniswapV2Router02");
// const feeToSetter = '设置手续费账户的管理员地址';
const feeToSetter = '0xd16a8A4Aa8d0f901C549405F999A930574A89de0';
const WETH = {
    mainnet:'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    ropsten:'0xc778417E063141139Fce010982780140Aa0cD5Ab',
    rinkeby:'0xc778417E063141139Fce010982780140Aa0cD5Ab',
    goerli:'0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    kovan:'0xd0A1E359811322d97991E03f863a0C30C2cF029C'
};
// module.exports = (deployer, network, accounts) => {
//     deployer.deploy(UniswapV2Factory, feeToSetter).then((FactoryInstance)=>{
//         return deployer.deploy(UniswapV2Router02,FactoryInstance.address,WETH[network]);
//     });
// };

// module.exports = (deployer, network, accounts) => {
//     deployer.deploy(UniswapV2Factory, feeToSetter).then((FactoryInstance)=>{
//         return FactoryInstance
//     });
// };

module.exports = (deployer, network, accounts) => {
    console.log("the list of accounts: =====> ")
    console.log(accounts)
    return deployer.deploy(UniswapV2Router02,"0x450830e0b190ffbc8a73db7d2889cf4816da9c65",WETH[network]);
};
