import React from "react";
import Card from "../../components/Card";

export default function Overview() {
  const RankedUsers = () => {
    return (
      <div className="RankedUsers">
        <h3>Ranking users</h3>
        <ol>
          <li>Alloyce</li>
          <li>Abed</li>
          <li>Room3</li>
        </ol>
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
