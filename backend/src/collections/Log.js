/** @type {import('payload/types').CollectionConfig} */
const Log = {
  slug : "log",
  timestamps: true,
  fields : [
    {
      name : "collectionName",
      type : "text",
      required : true
    },
    {
      name : "action",
      type : "text",
      required : true
    }
  ]
}

export default Log
