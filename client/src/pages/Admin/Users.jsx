import React from "react";
import FetchComponent from "../../components/FetchComponent";
import { API_URL_USERS } from "../../Data/Admin/APIvars";

export default function Users() {
  return (
    <div>
      <h4>User list</h4>
      <table>
        <tr>
          <th>NAME</th>
          <th>AMOUNT</th>
          <th>USAGE</th>
          <th>START DATE</th>
          <th>EXPIRY DATE</th>
        </tr>
        <FetchComponent
          url={API_URL_USERS}
          render={(data) => (
            <>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.amountPayed}</td>
                  <td>{item.networkUsage}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                </tr>
              ))}
            </>
          )}
        />
      </table>
    </div>
  );
}
