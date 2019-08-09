export default function postData(type) {
  let baseURL = "https://randomuser.me/api/";

  return new Promise((resolve, reject) => {
    fetch(`${baseURL}${type}`)
      .then(res => res.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
