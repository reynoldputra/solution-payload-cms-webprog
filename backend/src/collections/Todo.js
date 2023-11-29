// const payload = require('payload')
import payload from 'payload'

/** @type {import('payload/types').CollectionConfig} */
const Todo = {
  slug: 'todos',
  access : {
    read : () => true,
    create : () => true,
    delete : () => true
  },
  hooks : {
    afterOperation : [
      async (args) => {
        if(["create", "update", "delete", "deleteByID"].includes(args.operation)) {
          await payload.create({
            collection: 'log',
            data : {
              collectionName : "todo",
              action : args.operation
            }
          })
        }
        if(args.operation == "find") {
          await payload.delete({
            collection : "todo"
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
