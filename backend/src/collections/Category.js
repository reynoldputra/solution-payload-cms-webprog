const payload = require('payload')

/** @type {import('payload/types').CollectionConfig} */
const Category = {
  slug: 'category',
  access : {
    read : () => true
  },
  hooks : {
    afterOperation : [
      async (args) => {
        if(["create", "update", "delete", "deleteByID"].includes(args.operation)) {
          await payload.create({
            collection: 'log',
            data : {
              collectionName : "category",
              action : args.operation
            }
          })
        }
      }
    ]
  },
  admin : {
    useAsTitle : "nama"
  },
  fields : [
    {
      name: "nama",
      type: "text",
      required: true,
    }
  ]
}

export default Category
