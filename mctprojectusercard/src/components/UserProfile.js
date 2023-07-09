// Profile component for displaying a user profile

import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import axios from 'axios'
import { MdFavorite, MdEdit, MdDelete } from 'react-icons/md';
import Modal from 'react-modal';
const API_ROOT_URL = 'https://avatars.dicebear.com/v2';


const UserProfile = ({ user }) => {

const { users, setUsers } = useContext(UserContext);


  const [liked, setLiked] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  // Function to handle the like button click
  const handleLikeClick = () => {
    setLiked(!liked);
  };

  // Function to open the edit modal
  const openEditModal = () => {
    setEditModalOpen(true);
  };

  // Function to close the edit modal
  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  // Function to handle changes in the edit modal form
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };


  // Function to handle the edit form submission
  const handleSave= async (e) => {

    //for avoid refresh of page on submission of form
    e.preventDefault(); 
  
    //name and value extracted from e.target, e.target define edited
    //field and new value from user

    const { name, value } = e.target;

    //setEditedUser called to update editedUser state with new value
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));

//axios.put method used to update user profile with new data
    try {
        
        //editUser.id passed as request payload contains updated data
        await axios.put(`https://jsonplaceholder.typicode.com/users/${editedUser.id}`, editedUser);
        
        //on success of Api request we need Update the users array with the edited user data
              const updatedUsers = users.map(u => (u.id === editedUser.id ? editedUser : u));
              setUsers(updatedUsers);
    
              // Close the modal 
              closeEditModal();

            } catch (error) {
              console.error('Error updating user:', error);
            }
  };

  // Function to handle the delete button click
  const handleDeleteClick = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this profile?');
    if (confirmDelete) {
        try {
            // performed API request to delete the user
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${editedUser.id}`);
      
            // Filter out the deleted user from the users array
            const updatedUsers = users.filter(u => u.id !== editedUser.id);
            setUsers(updatedUsers);
      

          } catch (error) {
            console.error('Error deleting user:', error);
          }
    }
  };

  return (
    <div className="profile-card">
      <img src={`${API_ROOT_URL}/avataaars/${user.name}.svg?options[mood][]=happy`} alt="Avatar" className="avatar" />
      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {`${user.address.street}, ${user.address.city}`}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <div className="actions">
        <button className={`action-button ${liked ? 'liked' : ''}`} onClick={handleLikeClick}>
          <MdFavorite />
        </button>
        <button className="action-button" onClick={openEditModal}>
          <MdEdit />
        </button>
        <button className="action-button" onClick={handleDeleteClick}>
          <MdDelete />
        </button>
      </div>
      <Modal
        isOpen={editModalOpen}
        onRequestClose={closeEditModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Edit Profile</h2>
        <form onSubmit={handleSave}>
          <label>
            Name:
            <input type="text" name="name" value={editedUser.name} onChange={handleEditChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={editedUser.email} onChange={handleEditChange} />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" value={editedUser.phone} onChange={handleEditChange} />
          </label>
          <label>
            Website:
            <input type="text" name="website" value={editedUser.website} onChange={handleEditChange} />
          </label>
          <button type="submit">Save</button>
        </form>
      </Modal>
    </div>
  );
};

export default UserProfile;