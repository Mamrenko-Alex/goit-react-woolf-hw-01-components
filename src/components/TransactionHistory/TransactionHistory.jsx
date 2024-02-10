import css from "./TransactionHistory.module.css"
import { TransactionHistoryItem } from "./TransactionHistoryItem"

export const TransactionHistory = ({ transactions }) => {
    return (
        <div className={css.transaction_history_container}>
            <table className={css.transaction_history}>
                <thead>
                    <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map((transactions) => <TransactionHistoryItem {...transactions} key={transactions.id}/>)}
                </tbody>
            </table>
        </div>
    )
}