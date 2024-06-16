import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

const UserTable = () => {
  // State variables
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch users data on component mount
  useEffect(() => {
    axios.get('http://localhost:8080/api/usersinfo')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  // Handle click on a table row to show user details modal
  const handleRowClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  // Close the user details modal
  const handleCloseModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <h2>Users Information</h2>
      {/* Table displaying users */}
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(user)}
              className={selectedUser === user ? 'table-active' : ''}
            >
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for displaying selected user details */}
      <div
        className={`modal fade ${showModal ? 'show' : ''}`}
        style={{ display: showModal ? 'block' : 'none' }}
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="userModalLabel">
                User Details
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Display selected user details */}
              {selectedUser && (
                <div>
                  <p>
                    <strong>First Name:</strong> {selectedUser.firstName}
                  </p>
                  <p>
                    <strong>Last Name:</strong> {selectedUser.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedUser.email}
                  </p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
