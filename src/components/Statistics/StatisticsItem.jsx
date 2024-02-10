import css from "./Statistics.module.css"
import { getRandomColor } from "../helpers/getRandomColor"

export const StatisticsItem = ({ label, percentage }) => {
    return (
            <li className={css.item} style={{ backgroundColor: getRandomColor() }}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
            </li>
        )
}