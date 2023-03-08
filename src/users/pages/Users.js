import React from 'react';
import UserList from '../components/UsersList';

const Users = () => {
    const USERS = [
      {
        id: "u1",
        name: "Ugurcan",
        image:
          "https://iasbh.tmgrup.com.tr/8f9cae/650/344/0/12/1280/684?u=https://isbh.tmgrup.com.tr/sbh/2022/12/13/avatar-filmi-1670932751007.jpg",
        places: 3,
      },
    ];

    return <UserList items={USERS} />;
};

export default Users;