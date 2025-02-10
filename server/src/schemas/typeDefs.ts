const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }


  input UserInput {
    username: String!
    email: String!
    password: String!
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
    deleteUser(username: String!): User
    updateUser(input : UserInput!) : User    
  }
`;

export default typeDefs;
