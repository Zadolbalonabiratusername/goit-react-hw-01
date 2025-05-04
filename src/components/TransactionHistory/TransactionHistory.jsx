// import React from "react";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <>
      <p>task 3</p>
      <table className={s.transactionHistory}>
        <thead className={s.transactionTopic}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={s.transactionData}>
          {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
