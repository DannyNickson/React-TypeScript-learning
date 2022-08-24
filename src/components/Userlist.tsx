import React, { useTransition } from "react";
import { FC } from "react";
import { IUser } from "../types/types";
import UsetItem from "./UsetItem";

interface UserListProps {
  users: IUser[];
}

const Userlist: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UsetItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Userlist;
