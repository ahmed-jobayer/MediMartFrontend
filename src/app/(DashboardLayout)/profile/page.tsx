/* eslint-disable @next/next/no-img-element */

"use client";

import Loading from "@/components/shared/Loading";
import { useUser } from "@/contexts/UserContext";
import {
  MailIcon,
  ShieldCheckIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";

const UserProfilePage = () => {
  const { user, isLoading } = useUser();

  if (isLoading || !user)
    return (
      <div className="p-8">
        <Loading />
      </div>
    );

  return (
    <div className="w-full mx-auto p-8 bg-white shadow-lg rounded-xl">
      {/* Header */}
      <h1 className="text-3xl text-[#4F46E5] font-semibold mb-6 flex justify-center items-center gap-2">
        {user?.name || "User"}&apos;s Profile
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

      {/* Profile fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <ProfileField
          label="Name"
          value={user.name}
          icon={<UserIcon className="w-5 h-5 text-blue-600" />}
        />
        <ProfileField
          label="Email"
          value={user.email}
          icon={<MailIcon className="w-5 h-5 text-emerald-600" />}
        />
        <ProfileField
          label="Role"
          value={user.role}
          icon={<ShieldCheckIcon className="w-5 h-5 text-purple-600" />}
        />
        <ProfileField
          label="Status"
          value={user.status || "Active"}
          icon={<ShieldCheckIcon className="w-5 h-5 text-gray-500" />}
        />
      </div>
    </div>
  );
};

const ProfileField = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | boolean | undefined;
  icon: React.ReactNode;
}) => (
  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center space-x-3">
      {icon}
      <p className="text-lg font-medium text-gray-700">{label}</p>
    </div>
    <p className="text-lg text-gray-800 font-semibold truncate max-w-[60%] text-right">
      {String(value)}
    </p>
  </div>
);

export default UserProfilePage;
