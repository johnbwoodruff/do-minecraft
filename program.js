#!/usr/bin/env node
const { MinecraftService } = require('./dist');

const service = new MinecraftService();

// hardcode the correct id here when testing the various methods below
const id = 235784194;

// hardcode whatever command here when testing the command endpoint
// const command = 'sample command';

// phony id to use to test error handling of the various methods below
// const idOfDropletThatDoesNotExist = 2;

// const options = {
//   name: 'minecraft-server',
//   version: '1.16.1',
//   size: 's-1vcpu-1gb',
//   region: 'nyc3',
//   flavor: 'vanilla'
// };

// service
//   .createMinecraftDroplet(options)
//   .then(droplet => {
//     console.log(JSON.stringify(droplet));
//   })
//   .catch(err => {
//     console.log(JSON.stringify(err));
//   });

// service.stopMinecraftDroplet(id).catch(err => {
//   console.log(err);
// });

// service.startMinecraftDroplet(id).catch(err => {
//   console.log(err);
// });

service.killMinecraftDroplet(id).catch(err => {
  console.log(JSON.stringify(err));
});

// service.startMinecraftRemotely(id).catch(err => {
//   console.log(JSON.stringify(err));
// });

// service.stopMinecraftRemotely(id).catch(err => {
//   console.log(JSON.stringify(err));
// });

// service.restartMinecraftRemotely(id).catch(err => {
//   console.log(JSON.stringify(err));
// });

// service.getMinecraftServerStatus(id).catch(err => {
//   console.log(JSON.stringify(err));
// });

// service.sendMinecraftCommand(id, command).catch(err => {
//   console.log(JSON.stringify(err));
// });
