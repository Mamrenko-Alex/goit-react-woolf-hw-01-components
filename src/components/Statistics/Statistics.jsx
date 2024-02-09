import css from "./Statistics.module.css"
import { StatisticsItem } from "./StatisticsItem";

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title ? title : 'Without title'}</h2>

            <ul className={css.stat_list}>
                <StatisticsItem stats={stats}/>
            </ul>
        </section>
    )
}