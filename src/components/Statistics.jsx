import css from "../modules/Statistics.module.css"

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
  return hexColor;
}


export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title ? title : 'Without title'}</h2>

            <ul className={css.stat_list}>
                {stats.map(({ id, label, percentage }) => (
                    <li key={id} className={css.item} style={{ backgroundColor: getRandomColor() }}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}