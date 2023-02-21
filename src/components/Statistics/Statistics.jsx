import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsSection, StatList, Title } from './Statistics.styled';
import StatsMarkup from './StatsMarkup';

export default function Statistics({ title, stats }) {
  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <>
      <StatisticsSection>
        {title && <Title>{title}</Title>}
        <StatList>
          {stats.map(stat => (
            <li
              key={stat.id}
              className="item"
              style={{ backgroundColor: randomColor() }}
            >
              <StatsMarkup label={stat.label} percentage={stat.percentage} />
            </li>
          ))}
        </StatList>
      </StatisticsSection>
    </>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

// export default function Statistics({ title, stats }) {
//   const randomColor = () => {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
//   };

//   return (
//     <>
//       <section className="statistics">
//         <h2 className="title">{title}</h2>

//         <ul className="stat-list">
//           {stats.map(stat => (
//             <li
//               key={stat.id}
//               className="item"
//               style={{ backgroundColor: randomColor() }}
//             >
//               <span className="label">{stat.label}</span>
//               <span className="percentage">{stat.percentage}</span>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </>
//   );
// }
