import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import Header from "../components/header";

const LOCAL_KEY = "user_profile";

const Profile = () => {
  // Load user data from localStorage if available
  const getInitialUser = () => {
    const saved = localStorage.getItem(LOCAL_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      name: "User",
      email: "user@example.com",
      avatar: "https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff",
    };
  };

  const [user, setUser] = useState(getInitialUser());
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(user.name);
  const [editEmail, setEditEmail] = useState(user.email);
  const [editAvatar, setEditAvatar] = useState<File | null>(null);
  const [previewAvatar, setPreviewAvatar] = useState<string>(user.avatar);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Keep user state in sync with localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(user));
  }, [user]);

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setIsEditing(false);
    setEditName(user.name);
    setEditEmail(user.email);
    setEditAvatar(null);
    setPreviewAvatar(user.avatar);
    setErrorMsg("");
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setEditAvatar(e.target.files[0]);
      setPreviewAvatar(URL.createObjectURL(e.target.files[0]));
    }
  };

  // This function uploads the image to your backend and returns the image URL
  const uploadImage = async (file: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append("files", file);

    try {
      const res = await fetch("http://localhost:1337/api/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      // Strapi returns an array of uploaded files
      if (Array.isArray(data) && data[0]?.url) {
        return data[0].url.startsWith("http")
          ? data[0].url
          : `http://localhost:1337${data[0].url}`;
      }
      return null;
    } catch (err) {
      setErrorMsg("Image upload failed.");
      return null;
    }
  };

  const handleSave = async () => {
    setLoading(true);
    setErrorMsg("");
    let avatarUrl = user.avatar;

    if (editAvatar) {
      // Upload image to backend and get the URL
      const uploadedUrl = await uploadImage(editAvatar);
      if (uploadedUrl) {
        avatarUrl = uploadedUrl;
      } else {
        setLoading(false);
        setErrorMsg("Failed to upload image.");
        return;
      }
    } else if (editName !== user.name) {
      avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(editName)}&background=0D8ABC&color=fff`;
    }

    const updatedUser = {
      ...user,
      name: editName,
      email: editEmail,
      avatar: avatarUrl,
    };
    setUser(updatedUser);
    setIsEditing(false);
    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <img
            src={previewAvatar}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500 object-cover"
          />
          {isEditing ? (
            <>
              <label className="mb-2 w-full flex flex-col items-center cursor-pointer">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors mb-2">
                  Choose Photo
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </label>
              <input
                type="text"
                value={editName}
                onChange={e => setEditName(e.target.value)}
                className="mb-2 px-4 py-2 border rounded w-full"
                placeholder="Name"
              />
              <input
                type="email"
                value={editEmail}
                onChange={e => setEditEmail(e.target.value)}
                className="mb-4 px-4 py-2 border rounded w-full"
                placeholder="Email"
              />
              {errorMsg && (
                <p className="text-red-500 text-sm mb-2">{errorMsg}</p>
              )}
              <div className="flex justify-center space-x-2">
                <button
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={handleSave}
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
                <button
                  className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition-colors"
                  onClick={handleCancel}
                  disabled={loading}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{user.email}</p>
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={handleEdit}
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;