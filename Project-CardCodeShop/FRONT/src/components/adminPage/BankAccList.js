import React, { useEffect, useState } from 'react'
import { PlusOutlined , DeleteFilled } from '@ant-design/icons';
import axios from "../../configs/axios";

function BankAccList() {
  const [bankAccList, setBankAccList] = useState();
  
  useEffect( async () => {
    await getBankAccounts();
  }, []);

  async function getBankAccounts() {
    try {
      const resProductList = await axios.get("bank-acc/in-use");
      setBankAccList(resProductList.data.availableBankAccounts);
    } catch(err) {
      console.log(err)
    }
  };  

  return (
    <div className="content-center-admin-secondBox">
      <div className="content-center-profile-admin-secondBox-inside">
        <h2>บัญชีธนาคาร</h2>
        <hr className="loginPage-form-div-hr"/>

        <table className="content-center-profile-admin-secondBox-table">
          <tbody>
            <tr>
              <th  className="content-center-profile-admin-secondBox-table-row1">
                ลำดับ
              </th>
              <th  className="content-center-profile-admin-secondBox-table-row2">
                ชื่อธนาคาร
              </th>
              <th  className="content-center-profile-admin-secondBox-table-row3">
                ชื่อบัญชี
              </th>
              <th  className="content-center-profile-admin-secondBox-table-row4">
                เลขที่บัญชี
              </th>
              <th  className="content-center-profile-admin-secondBox-table-row5">
                ปุ่ม
              </th>
            </tr>

            {bankAccList?.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td className="content-center-profile-admin-secondBox-table-row1">
                    {index + 1}
                  </td>
                  <td className="content-center-profile-admin-secondBox-table-row2">
                    {item.bankName}
                  </td>
                  <td className="content-center-profile-admin-secondBox-table-row3">
                    {item.accountName}
                  </td>
                  <td className="content-center-profile-admin-secondBox-table-row4">
                    {item.accountNumber}
                  </td>
                  <td className="content-center-profile-admin-secondBox-table-row5">
                    <div className="content-center-profile-admin-secondBox-table-btn-group">
                      <button className="content-center-profile-admin-secondBox-table-btn-delete"><DeleteFilled /> Delete</button>
                    </div>
                  </td>
                </tr>
              )
            })}
            
            
          </tbody>
        </table>

        <div className="content-center-profile-admin-secondBox-footer">
          <button className="content-center-profile-admin-secondBox-footer-btn-add"><PlusOutlined /> Add BankAccount</button>
        </div>


      </div>
    </div>
  )
}

export default BankAccList
