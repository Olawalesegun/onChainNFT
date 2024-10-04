import {buildModule} from "@nomicfoundation/hardhat-ignition/modules";
const OnchainNftModule = buildModule("OnchainNftModule", (m)=>{
  const save = m.contract("OnChainNFT")

  return {save}
})

export default OnchainNftModule