import OnlineUsers from "./users/onlineUsers";
import Users from "./users/users";
import { useUsers } from "../hooks/getUsers";
import { useAppSelector } from "../store/hooks";
import { selectUsers } from "../store/usersSlice";

import { selectSearchUsers } from "../store/usersSlice";
import Pagination from "./pagination";
import { useState } from "react";

function Main() {
  const { onlineUsers, users, error, loading } = useUsers();

  const [currentPage, setCurrentPage] = useState(1);
  //for exemple pagination
  const usersForPage: number = 5;

  const lastUsersIndex: number = currentPage * usersForPage;
  const firstUsersIndex: number = lastUsersIndex - usersForPage;
  const currentUsers: object[] = users.slice(firstUsersIndex, lastUsersIndex);

  const serachFilter: object[] = useAppSelector(selectSearchUsers);
  const filterUsers: string = useAppSelector(selectUsers);

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <main className='main_wrapper'>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        <OnlineUsers onlineUsers={onlineUsers} />
        <Users
          filterUsers={filterUsers}
          users={serachFilter ? serachFilter : users}
          currentUsers={currentUsers}
        />
        <Pagination
          usersForPage={usersForPage}
          totalUsers={users.length}
          paginate={paginate}
        />
      </main>
    </>
  );
}

export default Main;
