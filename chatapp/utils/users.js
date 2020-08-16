const users = [];

// Join user to chat
function userJoin(id, username, gender, user_image_path, animal_type, room) {
  const user = { id, username, gender, user_image_path, animal_type, room };

  users.push(user);

  return user;
}

// Get current user
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}


//////////////////////////////////////////////////// 이름이 같으면..?
function getCurrentUserByName(username) {
  return users.find(user => user.username === username);
}

// User leaves chat
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);
  // if (index !== -1) {
  //   return users.splice(index, 1)[0];
  // }
  return users[index];
}

// Get room users
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
  getCurrentUserByName
};
