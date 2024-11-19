import React from "react";
import Card from "../../components/Card";
import FetchComponent from "../../components/FetchComponent";
import { API_URL_USERS } from "../../Data/Admin/APIvars";

export default function Overview() {
  const RankedUsers = () => {
    return (
      <div className="RankedUsers">
        <h3>Ranked users</h3>
        <FetchComponent
          url={API_URL_USERS}
          render={(data) => (
            <ol>
              {data.map((user, index) => (
                <li key={index}>{user.name}</li>
              ))}
            </ol>
          )}
        />
      </div>
    );
  };
  return (
    <div>
      <Card title="Amount payed" content="2000" />
      <Card title="Amount earned" content="1600" />
      <Card title="Profits" content="10%" />
      <Card title="Total users" content="12" />
      <Card title="Pending notifications" content="3" />
      <RankedUsers />
    </div>
  );
}
