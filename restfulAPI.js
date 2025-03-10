/*class Users {
  users = [
    {
      id: "1",
      username: "willowert",
      password: "wellopoplpk",
      email: "ola@gmail.com",
      role: "Intern",
    },
    {
      id: "2",
      username: "wilbrentt",
      password: "senioretopl",
      email: "olade@gmail.com",
      role: "ADMIN",
    },
    {
      id: "3",
      username: "Villart",
      password: "welq2345plpk",
      email: "olape@gmail.com",
      role: "Operation",
    },

    {
      id: "4",
      username: "wilbeert",
      password: "wel876plpk",
      email: "olaje@gmail.com",
      role: "Product",
    },
    {
      id: "5",
      username: "willveert",
      password: "poilutopibnl",
      email: "olashe@gmail.com",
      role: "Warehousers",
    },
  ];
/*
  getUserById(id) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        console.log(
          `Your id number is ${this.users[i].id} , with username ${this.users[i].username} `
        );
        break;
      } else {
        console.log("User not found");
        break;
      }
    }
  }

  getAllUser = () => {
    for (let i = 0; i < this.users.length; i++) {
      console.log(
        `id:${this.users[i].id} username: ${this.users[i].username}, password:${this.users[i].password}, role: ${this.users[i].role}, email:${this.users[i].email}`
      );
    }
  };

  updateUser = (user, updatedInfo) => {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === user) {
        this.users[i].email = updatedInfo;
        console.log(this.users[i].email + " newEmail: " + updatedInfo);
        break;
      }
    }
  };

  createUser = (id, username, password, role, email) => {
    for (let i = 0; i < this.users.length; i++) {
      if (!id || !username || !password || !role || !email) {
        console.log("input the right field");
        break;
      } else {
        const newUser = {
          id: id,
          username: username,
          password: password,
          role: role,
          email: email,
        };
        this.users[i] = newUser;
        console.table(this.users[i]);
        break;
      }
    }
  };
  deleteUser = (id) => {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        this.users.splice(i, 1);
        console.log(`the user with the id: ${id} has been deleted`);
        break;
      }
      console.log("User not found");
    }
  };
}

const check = new Users();

check.getUserById(1);
check.getAllUser();
check.updateUser("olaje@gmail.com", "olaayeni@mail.com");
check.createUser(
  "7",
  "octizzle",
  "bayumail",
  "backend Dev",
  "olaayeni@mail.com"
);
check.deleteUser(
  "7",
  "octizzle",
  "bayumail",
  "backend Dev",
  "olaayeni@mail.com"
);
*/

class User {
  users = [
    {
      id: 1,
      username: "willowert",
      password: "wellopoplpk",
      email: "ola@gmail.com",
      role: "Intern",
    },
    {
      id: 2,
      username: "wilbrentt",
      password: "senioretopl",
      email: "olade@gmail.com",
      role: "ADMIN",
    },
    {
      id: 3,
      username: "Villart",
      password: "welq2345plpk",
      email: "olape@gmail.com",
      role: "Operation",
    },

    {
      id: 4,
      username: "wilbeert",
      password: "wel876plpk",
      email: "olaje@gmail.com",
      role: "Product",
    },
    {
      id: 5,
      username: "willveert",
      password: "poilutopibnl",
      email: "olashe@gmail.com",
      role: "Warehousers",
    },
  ];

  getUserByID(id) {
    id = Number(id);
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      console.log("user does not exist");
    } else {
      console.log(user);
    }
  }
  getAllUser() {
    console.table(this.users);
  }
  createUser(id, name, username, password, email, role) {
    id = Number(id)
    let user = {
      id: id,
      name: name,
      username: username,
      password: password,
      email: email,
      role: role,
    };
     
    this.users.push(user)

    console.log(user)
 
  } 
  updateUser(email, newEmail){
    
    const user = this.users.find((user)=> user.email === email)

    if(user){
      user.email = newEmail

    console.log(`old email ${email}  has been updated to new email:...${newEmail}`)
    }
   
   
     
   
   
  }

  delUser(id){

    id = Number(id)
    const userID = this.users.findIndex((user)=> user.id === id)
 

  if(userID !== -1){
   
    let delUser = this.users.splice(userID, 1)
   
    console.log( delUser,"\n has been deleted")

  }else{
    console.log("User not found")
  }
  }
  

  

  }


const check = new User();

check.getUserByID(1);
check.getAllUser();
check.createUser(12, "willofp", "itero@gmail.com", "octivbevsser@mail.com", "Backend","rtyfguh");
check.updateUser("olaje@gmail.com", "okocha@gmail.com");
check.delUser(12);
