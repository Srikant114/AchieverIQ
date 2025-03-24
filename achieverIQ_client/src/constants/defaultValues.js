// export const apiUrl = `http://localhost:5000/api/`;
export const apiUrl = `https://achieveriq.onrender.com`;

export const apiSecret = `registeruser`;

export const getToken = async () => {
  let token = await localStorage.getItem('data');
  token = token ? JSON.parse(token).token : '';
  return token;
};
