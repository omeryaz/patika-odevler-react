import axios from "axios";
// Datalar axios yardımı ve async bir fonksiyon ile "userData" ve "userPosts" adlı iki ayrı variable'a atandı.
const getData = async function (userId) {
  const { data: userData } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );
  const { data: userPosts } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId
  );

  // Ödevde tek bir obje istendiği için postları içeren userPosts'u userData objesinin "posts" property'sine atandı.
  userData.posts = userPosts;
  // console.log yardımı ile istenilen çıktı alındı.
  console.log(userData);
  return userData;
};

export default getData;
