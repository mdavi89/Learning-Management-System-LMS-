import { User } from '../models/index.js';
import { signToken, AuthenticationError } from '../utils/auth.js'; 

// Define types for the arguments
interface AddUserArgs {
  input:{
    username: string;
    email: string;
    password: string;
  }
}

interface LoginUserArgs {
  email: string;
  password: string;
}

interface UserArgs {
  username: string;
}


const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_parent: any, { username }: UserArgs) => {
      return User.findOne({ username });
    },
    // Query to get the authenticated user's information
    // The 'me' query relies on the context to check if the user is authenticated
    me: async (_parent: any, _args: any, context: any) => {
      // If the user is authenticated, find and return the user's information along with their thoughts
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      // If the user is not authenticated, throw an AuthenticationError
      throw new AuthenticationError('Could not authenticate user.');
    },
  },
  Mutation: {
    addUser: async (_parent: any, { input }: AddUserArgs) => {
      // Create a new user with the provided username, email, and password
      const user = await User.create({ ...input });
    
      // Sign a token with the user's information
      const token = signToken(user.username, user.email, user._id);
    
      // Return the token and the user
      return { token, user };
    },
    
    login: async (_parent: any, { email, password }: LoginUserArgs) => {
      // Find a user with the provided email
      const user = await User.findOne({ email });
    
      // If no user is found, throw an AuthenticationError
      if (!user) {
        throw new AuthenticationError('Could not authenticate user.');
      }
    
      // Check if the provided password is correct
      const correctPw = await user.isCorrectPassword(password);
    
      // If the password is incorrect, throw an AuthenticationError
      if (!correctPw) {
        throw new AuthenticationError('Could not authenticate user.');
      }
    
      // Sign a token with the user's information
      const token = signToken(user.username, user.email, user._id);
    
      // Return the token and the user
      return { token, user };
    },
    deleteUser: async (_: any, { username }: { username: string }) => {
      try {
        const deletedUser = await User.findOneAndDelete({ username });
        if (!deletedUser) {
          throw new Error("User not found");
        }
        return deletedUser;
      } catch (err) {
        console.error("Error deleting User:", err);
        throw new Error("Error deleting User");
      }
    },
    updateUser: async (_: any, { input }: { input: any }) => {
      try {
        // Remove the password field from the input object to prevent updating it
        const { password, ...updateFields } = input;
    
        const updatedUser = await User.findOneAndUpdate(
          { username: input.username },  // Find user by username
          { $set: updateFields },         // Only update fields excluding password
          { new: true, runValidators: true }
        );
    
        return updatedUser;
      } catch (err) {
        console.error("Error updating User:", err);
        throw new Error("Error updating User");
      }
    }  
  },
};

export default resolvers;
