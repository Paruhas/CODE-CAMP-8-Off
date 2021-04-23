import React, { useEffect, useState } from 'react';
import { PlusOutlined , ToolFilled , DeleteFilled } from '@ant-design/icons';
import axios from "../../configs/axios";

function ProductList() {
  const [productLists, setProductLists] = useState();
  const [PENDINGProductLists, setPENDINGProductLists] = useState();
  const [SOLDProductLists, setSOLDProductLists] = useState();

  
  useEffect( async () => {
    await getProducts();
  }, []);

  async function getProducts() {
    try {
      const resAllProductList = await axios.get("card-products/");
      // console.log(resAllProductList.data.allCardProducts)  
      setProductLists(resAllProductList.data.allCardProducts);

      const resPENDINGProductLists = await axios.get("card-products/pending");
      // console.log(resPENDINGProductLists.data.PENDINGCardProducts)    
      setPENDINGProductLists(resPENDINGProductLists.data.PENDINGCardProducts);

      const resSOLDProductLists = await axios.get("card-products/sold");
      // console.log(resSOLDProductLists.data.SOLDCardProducts)  
      setSOLDProductLists(resSOLDProductLists.data.SOLDCardProducts);

    } catch(err) {
      console.log(err);
    }
  };  
  if(productLists){
    const [data1, data2, data3, data4] = productLists

    console.log(data1)
  }
  console.log(PENDINGProductLists)
  console.log(SOLDProductLists)

  // const a = PENDINGProductLists?.map((item, index) => {
  //   console.log(item)
  //   return item.id , item.CardCodes.length
  // })

  // if(a) {
  //   console.log(a)
  // }

  return (
    <div className="content-center-admin-firstBox">
      <div className="content-center-profile-admin-firstBox-inside">
        <h2>แก้ไขสินค้า</h2>
        <hr className="loginPage-form-div-hr"/>

        <table className="content-center-profile-admin-firstBox-table">
          <tbody>
            <tr>
              <th  className="content-center-profile-admin-firstBox-table-row1">
                ลำดับ
              </th>
              <th  className="content-center-profile-admin-firstBox-table-row2">
                img
              </th>
              <th  className="content-center-profile-admin-firstBox-table-row3">
                ชื่อสินค้า
              </th>
              <th  className="content-center-profile-admin-firstBox-table-row4">
                ราคา
              </th>
              <th  className="content-center-profile-admin-firstBox-table-row5">
                สต็อค
              </th>
              <th  className="content-center-profile-admin-firstBox-table-row6">
                ปุ่ม
              </th>
            </tr>

            {productLists?.map((item, index) => {
              return (<tr key={item.id}>
              <td className="content-center-profile-admin-firstBox-table-row1" >
                {index + 1}
              </td>
              <td className="content-center-profile-admin-firstBox-table-row2">
                <div className="content-center-profile-admin-firstBox-table-row2-div">
                  <img src={item.img} alt={"item"} className="content-center-profile-admin-firstBox-table-row2-div-img" />
                </div>
              </td>
              <td className="content-center-profile-admin-firstBox-table-row3">
                {item.name}
              </td>
              <td className="content-center-profile-admin-firstBox-table-row4">
                {item.price + " บาท"}
              </td>
              <td className="content-center-profile-admin-firstBox-table-row5">
                {item.CardCodes.length}
              </td>
              <td className="content-center-profile-admin-firstBox-table-row6">
                <div className="content-center-profile-admin-firstBox-table-btn-group">
                  <button className="content-center-profile-admin-firstBox-table-btn-add"><PlusOutlined /> Add CardCode</button>
                  <button className="content-center-profile-admin-firstBox-table-btn-edit"><ToolFilled /> Edit</button>
                  <button className="content-center-profile-admin-firstBox-table-btn-delete"><DeleteFilled /> Delete</button>
                </div>
              </td>
            </tr>)
              })}
            
          </tbody>
        </table>

        <div className="content-center-profile-admin-firstBox-footer">
          <button className="content-center-profile-admin-firstBox-footer-btn-add"><PlusOutlined /> Add CardProduct</button>
        </div>

      </div>
    </div>
  )
}

export default ProductList
