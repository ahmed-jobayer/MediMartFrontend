/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { updateUser } from "@/services/users";
import { useUser } from "@/contexts/UserContext";
import { toast } from "sonner";
import Loading from "@/components/shared/Loading";
import { getCurrentUser } from "@/services/AuthService";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { updateUserCookie } from "@/app/actions/updateUserCookie";
import CustomButton from "@/components/shared/CustomButton";
import { Edit, Save } from "lucide-react";

const UpdateUserProfilePage = () => {
  const { user, isLoading, setUser } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: ""
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        image: user.image || ""
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    if (!user?._id) return;

    const token = localStorage.getItem("authToken");

    if (!token) {
      toast.error("Auth token not found");
      return;
    }

    try {
      const res = await updateUser(user._id, formData);
      toast.success("Profile updated");
      setEditing(false);

      //* Update the user context with the new name & await for SSR
      await updateUserCookie({
        ...user, // keep existing user fields
        name: formData.name, // update if only the changed name
        image: formData.image, // update if only the changed image
      });

      //* Re-sync context from updated cookie/server
      const updatedUser = await getCurrentUser();
      if (updatedUser) {
        setUser(updatedUser.userData);
      }
    } catch {
      toast.error("Update failed");
    }
  };

  if (isLoading || !user)
    return (
      <div className="p-8">
        <Loading />
      </div>
    );

  return (
    <div className="w-full mx-auto p-8 bg-white shadow-xl rounded-xl">
      <h1 className="text-3xl font-semibold text-center text-[#4F46E5] mb-6">
        Update {user?.name || "User"}&apos;s Profile
      </h1>

    {/* Cover image + Avatar */}
      <div className="justify-center flex items-center gap-2 relative mb-20">
        <img
          src="https://img.freepik.com/free-photo/top-view-assortment-pills-with-copy-space_23-2148533552.jpg?ga=GA1.1.1557689415.1746120644&semt=ais_hybrid&w=740"
          alt={user?.name}
          className="w-full rounded-2xl h-68 object-cover"
        />
        <Image
          src={
            user?.image || "data:image/png;base64,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"
          }
          alt={user?.name}
          width={100}
          height={100}
          className="rounded-full w-32 h-32 absolute left-4 bottom-4 border-2 border-[#4F46E5] shadow-lg"
        />
      </div>

      <div className="space-y-6">
        <ProfileField
          label="Name"
          value={formData.name}
          name="name"
          editing={editing}
          handleChange={handleChange}
        />
        <ProfileField
          label="Image URL"
          value={formData.image}
          name="image"
          editing={editing}
          handleChange={handleChange}
        />
        <ProfileField
          label="Email"
          value={formData.email}
          name="email"
          editing={false}
          handleChange={handleChange}
          disabled={true}
        />

        {!editing ? (
          <div className="flex justify-center">
            {/* <CustomButton
              textName='Edit Profile'
              handleAnything={() => setEditing(true)}

            /> */}
            <CustomButton
              textName={
                <div className="flex gap-3 justify-content-center items-center ">
                  <Edit />
                  Edit Profile
                </div>
              }
              handleAnything={() => setEditing(true)}
            />
          </div>
        ) : (
          <div className="flex justify-center gap-4">
            <CustomButton
              textName={
                <div className="flex gap-1 justify-content-center items-center ">
                  <Save />
                  Save
                </div>
              }
              handleAnything={handleSave}
            />

            <button
              onClick={() => {
                setFormData({
                  name: user.name,
                  email: user.email,
                  image: user.image || ""
                });
                setEditing(false);
              }}
              className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition duration-300 transform hover:bg-gray-400 hover:scale-105"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const ProfileField = ({
  label,
  value,
  name,
  editing,
  handleChange,
  disabled = false,
}: {
  label: string;
  value: string;
  name: string;
  editing: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-600">{label}</label>
    <input
      type={name === "email" ? "email" : "text"}
      name={name}
      value={value}
      onChange={handleChange}
      disabled={!editing || disabled}
      className={`w-full border ${
        disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"
      } px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
    />
  </div>
);

export default UpdateUserProfilePage;
