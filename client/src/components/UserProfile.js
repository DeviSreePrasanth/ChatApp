import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState(() => {
    const savedUserInfo = localStorage.getItem('userInfo');
    return savedUserInfo
      ? JSON.parse(savedUserInfo)
      : {
          name: 'John Doe',
          username: 'john_doe',
          email: 'john@example.com',
          location: 'New York, USA',
          bio: 'Web developer, tech enthusiast, and coffee lover.',
          profilePicture: 'https://via.placeholder.com/150',
        };
  });
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => {
      const updatedInfo = { ...prevInfo, [name]: value };
      localStorage.setItem('userInfo', JSON.stringify(updatedInfo));
      return updatedInfo;
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedInfo = { ...userInfo, profilePicture: reader.result };
        setUserInfo(updatedInfo);
        localStorage.setItem('userInfo', JSON.stringify(updatedInfo));
        setIsImageModalOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    const updatedInfo = { ...userInfo, profilePicture: 'https://via.placeholder.com/150' };
    setUserInfo(updatedInfo);
    localStorage.setItem('userInfo', JSON.stringify(updatedInfo));
    setIsImageModalOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Logic to handle logout (e.g., clearing user data or redirecting)
    alert('Logging out...');
  };

  useEffect(() => {
    const savedUserInfo = localStorage.getItem('userInfo');
    if (savedUserInfo) {
      setUserInfo(JSON.parse(savedUserInfo));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar with Profile Image */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">User Profile</div>
        <div className="relative">
          <img
            src={userInfo.profilePicture}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40">
              <button
                onClick={() => alert('Go to Settings')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Settings
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Profile Info Section */}
      <main className="flex-grow bg-white p-6 md:flex md:flex-row md:space-x-6 rounded-lg m-4 shadow-lg">
        {/* Left Column (Profile Info) */}
        <div className="w-full flex flex-col items-center">
          <img
            src={userInfo.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4 cursor-pointer border-2 border-gray-300"
            onClick={() => setIsImageModalOpen(true)}
          />
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white py-2 px-4 rounded-full mb-6 hover:bg-blue-600"
          >
            {isEditing ? 'Save' : 'Edit Profile'}
          </button>
          {isEditing ? (
            <div className="w-full text-center space-y-4">
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border border-gray-300"
                placeholder="Full Name"
              />
              <input
                type="text"
                name="username"
                value={userInfo.username}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border border-gray-300"
                placeholder="Username"
              />
              <input
                type="text"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border border-gray-300"
                placeholder="Email"
              />
              <input
                type="text"
                name="location"
                value={userInfo.location}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border border-gray-300"
                placeholder="Location"
              />
              <textarea
                name="bio"
                value={userInfo.bio}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border border-gray-300"
                placeholder="Bio"
              />
            </div>
          ) : (
            <div className="text-center space-y-4">
              <h2 className="text-xl font-bold">{userInfo.name}</h2>
              <p className="text-gray-600">@{userInfo.username}</p>
              <p className="text-gray-600">{userInfo.email}</p>
              <p className="text-gray-600">{userInfo.location}</p>
              <p className="text-gray-600">{userInfo.bio}</p>
            </div>
          )}
        </div>
      </main>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 max-w-md w-full">
            <img
              src={userInfo.profilePicture}
              alt="Profile"
              className="w-full h-auto max-h-96 object-cover mb-4"
            />
            <div className="flex justify-between">
              {userInfo.profilePicture === 'https://via.placeholder.com/150' ? (
                <button
                  onClick={() => document.getElementById('fileInput').click()}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                >
                  Add Image
                </button>
              ) : (
                <button
                  onClick={handleDeleteImage}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg"
                >
                  Delete Image
                </button>
              )}
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                className="hidden"
                onChange={handleImageChange}
              />
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
