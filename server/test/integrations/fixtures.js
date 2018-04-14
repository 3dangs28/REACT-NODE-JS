const Thread = require('../../src/models/Thread');

const seedThreads = async () => {
  await Thread.create([

    {
      title: 'El sistema de matricula esta dañado',
      body: 'bar',
      slug: 'el-sistema-de-matricula-esta-danado',

    },
    {
      title: 'El problema de transporte en Panama',
      body: 'bar',
      slug: 'el-problema-de-transporte-en-panama',
    },
  ]);
};

//const seed2Threads = async () => {
//};

module.exports = {

  seedThreads,
 // seed2Threads,
};
