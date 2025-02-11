import { FormEvent, useState } from "react";
import "../styling/Account.css";
import Auth from '../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { LOGIN_USER, DELETE_USER, UPDATE_USER, GET_USER} from '../utils/mutations';


const Account = () => {
const [login] = useMutation(LOGIN_USER);
const [deleteUser] = useMutation(DELETE_USER);
const [updateUser] = useMutation(UPDATE_USER);
const getUser = useQuery(GET_USER);
  
  const [userData, setUserData] = useState({
    username: Auth.getProfile().data.username,
    email: Auth.getProfile().data.email,
    password: "",
  });

  const [editMode, setEditMode] = useState({
    username: false,
    email: false,
    password: false,
  });
    
  const [reenterPassword, setReenterPassword] = useState(""); 
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleReenterPasswordChange = (e : FormEvent) => {
    const target = e.target as HTMLInputElement;
    setReenterPassword(target.value);
  };
  const handleEditToggle = (field : "username" | "email" | "password") => {
    setEditMode({ ...editMode, [field]: !editMode[field] });
  };

  const handleChange = (e : FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setUserData({ ...userData, [name]: value });
  };

async function checkPassword() {
    const submission = {
        email: userData.email,      
        password: reenterPassword,
    };
    try {
        await login({
            variables: {...submission},
        });
        setIsPasswordValid(true)
        return true
      } catch (e) {
        console.log(e)
        setIsPasswordValid(false)
        return false
      }  
}
  const handleSubmit = async (e : FormEvent) => {
    e.preventDefault();
        if(true){
          const input = {
            originUsername: getUser.data.me.username,
            username: userData.username,
            email: userData.email,
            password: userData.password,
          };
          updateUser({ variables: { input } });
          alert("Account 1updated");
          
        }
        else{
          checkPassword()          
          alert("Wrong Account password");
        }
  };
  const handleDeleteAccount = async () => {
    try {
      if (!getUser?.data?.me?.username) {
        console.error("Username not found");
        return;
      }
  
      const confirmDelete = window.confirm(
        "Are you sure you want to delete your account? This action is irreversible!"
      );
  
      if (!confirmDelete) return;
  
      console.log(`Deleting user: ${getUser.data.me.username}`);
  
      const response = await deleteUser({ 
        variables: { username: getUser.data.me.username } 
      });
  
      console.log("User deleted:", response.data.deleteUser);
      alert("Your account has been deleted.");
      
      Auth.logout(); // Log out after account deletion
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error deleting account");
    }
  };

  return (
    <div className="account-container">
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit} className="account-form">
        {/* Username */}
        <div className="form-group">
        <label>Username</label>
          {editMode.username ? (
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
          ) : (
            <p>{userData.username}</p>
          )}
        
                <button
                    type="button"
                    className="edit-button"
                    onClick={() => handleEditToggle("username")}
                >
            {editMode.username ? "Save" : "Edit"}
            </button> 
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          {editMode.email ? (
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          ) : (
            <p>{userData.email}</p>
          )}
        <button
            type="button"
            className="edit-button"
            onClick={() => handleEditToggle("email")}
          >
            {editMode.email ? "Save" : "Edit"}
          </button>
        </div>

        {/* Password */}
        <div className="form-group">
            
          <label>New Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter new password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>

      
        <div className="form-group">
          <label>Account Password</label>
          <input
            type="password"
            value={reenterPassword}
            onChange={handleReenterPasswordChange}
            className={isPasswordValid ? "" : "error"}
          />
          {!isPasswordValid && <span className="error-message">Wrong Account password</span>}
        </div>
      
    
        {/* Update Button */}
        <button type="submit" className="update-button">
          Update Account
        </button>

        {/* Delete Account Button */}
        <button
          type="button"
          className="delete-button"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </button>
      </form>
    </div>
  );
};

export default Account;

  
