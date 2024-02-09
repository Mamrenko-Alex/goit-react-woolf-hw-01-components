import css from "./Statistics.module.css"
import { getRandomColor } from "./getRandomColor"

export const StatisticsItem = ({ stats }) => {
    return (
        stats.map(({ id, label, percentage }) => (
            <li key={id} className={css.item} style={{ backgroundColor: getRandomColor() }}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
            </li>
        )))
}