const qs = require('qs')

const stringifiedQuery = qs.stringify({
  where: {
    task: {
      contains: "",
    },
  },
},{ addQueryPrefix: true });

console.log(stringifiedQuery)
