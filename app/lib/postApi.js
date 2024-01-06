const fetchPost = async () => {
  const result = fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");

  const data = (await result).json();

  return data;
};

export default fetchPost;
