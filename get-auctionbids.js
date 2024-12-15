import { ArchwayClient } from '@archwayhq/arch3.js';
import { SigningArchwayClient } from '@archwayhq/arch3.js';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

const network = {
  chainId: 'constantine-3',
  endpoint: 'https://rpc.constantine.archway.tech',
  prefix: 'archway',
};

const marketContractAddress = 'archway1cwx58k4xew5zrc4zqs888w58fhckvn09ryh02qx03dv83g8d6fyq6kcl3s';

const client = await SigningArchwayClient.connectWithSigner(network.endpoint);

const bidsMsg = {
  "auction_bids": {
    "auction": "1691440598000",
    "pagination": {
      "limit": 10,
      "order": "ascending",
      "page": "4"
    }
  },
};

const collections = await client.queryContractSmart(
  marketContractAddress,
  bidsMsg
);

console.log(collections);