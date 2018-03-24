const Thread = require('../../src/models/Thread');


const seedThreads = async () => {
  await Thread.create([

    {
      title: 'foo',
      body: 'bar',
      slug: '',

    },
    {
      title: 'foo',
      body: 'bar',
      slug: '',
    },
  ]);
};

module.exports = {
  seedThreads,
};
