import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [productImg, setProductImg] = useState('')
  const [file, setFile] = useState(null);

  const handlerFileChange = e => {
    console.log(e);
    setFile(e.target.files[0]);
  }

  const handlerUpload = e => {
    e.preventDefault();
    const formData = new FormData(); // ทำให้เป็น multipart from data เพื่อให้ axios ตรวจจับได้ง่ายๆ
    formData.append('name', name); // key, value 1 อัน แต่ 1 คู่เท่านั้น
    formData.append('image', file);
    axios.post('http://localhost:8000/', formData)
    .then(res => {
      setProductImg(res.data.product.imgUrl);
    })
    .catch(err => {})
  }

  return (
    <div>
      <form onSubmit={handlerUpload}>
        <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
        <input type="file" onChange={handlerFileChange}/>
        <button>Upload</button>
      </form>
      {productImg && <img src={productImg} alt="product"/>}
    </div>
  );
}

export default App;
