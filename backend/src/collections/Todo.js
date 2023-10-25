const payload = require('payload')

/** @type {import('payload/types').CollectionConfig} */
const Todo = {
  slug: 'todos',
  access : {
    read : () => true,
    create : () => true
  },
  hooks : {
    afterOperation : [
      async (args) => {
        if(["create", "update", "delete"].includes(args.operation)) {
          await payload.create({
            collection: 'log',
            data : {
              collectionName : "todo",
              action : args.operation
            }
          })
        }
      }
    ]
  },
  fields : [
    {
      name: "task",
      type: "text",
      required: true,
    },
    {
      name: "category",
      required: true,
      type : "relationship",
      relationTo: "category"
    }
  ]
}

export default Todo
