import axios from 'axios';

interface Client {
  id: number;
  fullname: string;
  phone: string;
  serverId: number;
  orgId: number;
}

interface Server {
  id: number;
  name: string;
  site: number;
  ip: string;
  port: Date;
  status: 'up' | 'down';
}

interface VPN {
  id: number;
  name: string;
  type: string;
  server: Server['name'];
  status: 'up' | 'down';
}

export const getServers = async () => {
  let servers = [1, 2, 3, 4, 5];
  servers.map((server, id) => {
    return { id, name: server, ip: server, port: 443, status: 'up' };
  });
};

let config = {
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.API_TOKEN },
};

const api = axios.create(config);

export async function getServersFromAPI() {
  // const { data } = await axios.request({
  //   // url: process.env.API_BASE_URL + id,
  //   url: '/servers/' + id,
  //   headers: {
  //     Accept: 'application/json',
  //     Authorization: 'Bearer ' + env.PSK_TOKEN,
  //   },
  //   method: 'GET',
  // });

  // const deals: Server[] = data.map((deal) => ({
  //   id: deal.id,
  //   name: deal.name,
  //   customer: deal.customer,
  //   date: new Date(deal.date),
  //   stage: deal.stage,
  //   price: deal.price,
  // }));

  // const dealsJSON = JSON.stringify(deals);
  // await fs.writeFile('deals.json', dealsJSON);

  return { data: [] };
}
