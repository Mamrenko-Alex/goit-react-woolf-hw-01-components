import css from "./Statistics.module.css"
import { StatisticsItem } from "./StatisticsItem";

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
            {title ? <h2 className={css.title}>{title}</h2> : ''}
            <ul className={css.stat_list}>
                {stats.map((item) => <StatisticsItem {...item} key={item.id}/>)}
            </ul>
        </section>
    )
}