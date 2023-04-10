import axios from "axios";

const getData = async function (userId) {
  const { data: userData } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );
  const { data: userPosts } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId
  );

  userData.posts = userPosts;
  console.log(userData);
  return userData;
};

export default getData;
