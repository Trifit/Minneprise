exports.id=0,exports.modules={"./src/schema.js":function(e,r,o){"use strict";o.r(r);var t=o("graphql-tools");r.default=Object(t.makeExecutableSchema)({typeDefs:["\n  schema {\n    query: RootQuery\n  }\n","\n  type RootQuery {\n    hello_world: String!\n   }\n"],resolvers:{RootQuery:{hello_world:function(){return"Hi from GraphQL!"}}}})}};