import React from "react";

import UsersList from "../components/UsersList";

import { MOCK_USERS as users } from "../../util/mocks";

const Users = () => {
  return <UsersList items={users} />;
};

export default Users;
