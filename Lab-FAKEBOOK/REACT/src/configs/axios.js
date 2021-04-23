import axios from "axios";
import localStorageService from "../services/localStorageService";

axios.defaults.baseURL = "http://localhost:8000/";

axios.interceptors.request.use( // ทำให้ authorization ส่งไปทุกครั้ง ไม่ต้องมาเขียนใส่แนบไปทุกครั้งที่เขียนแล้ว (ตัว request)
  config => { // เขียนแบบนี้เพื่อ ถ้ามี token ถึงจะทำการส่ง header ที่มีการแนบ tokens เข้าไปด้วย ( tokens ได้รับครั้งแรกตอน login / register )
      if (localStorageService.getToken()) {
          config.headers.Authorization = `Bearer ${localStorageService.getToken()}`
        }
        return config;  
  }, 
  err => Promise.reject(err) // ตัว Error
);

axios.interceptors.response.use(
  response => response, 
  err => { // ไม่ต้องใส่ catct err แบบยาวๆ ในทุกครั้งที่มีการเรียกใช้ axios.METHOD แล้ว
  if (err.response.status === 401) {
    localStorageService.clearToken();
    window.location.assign("/"); // เพื่อให้มีการ redirect PATH (ใช้แทน useHistory เพราะในนี้ใช้ไม่ได้ ไม่ใช่ component REACT)
    return;
  }
  return Promise.reject(err);
})

export default axios;

// ลดความ hardcode เนื่องจากมีการใช้ซำ้บ่อย 
// ลดรูปจาก axios.post('http://localhost:8000/register',  ===>>> axios.post('/register', 