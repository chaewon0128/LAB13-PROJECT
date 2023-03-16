import react from 'react';
import style from './LandingSlideTitle.module.css';

// eslint-disable-next-line react/prop-types
export default function LandingSlideTitle({ title, boldText, text }) {
  return (
    <div
      style={{
        marginBottom: '51px',
      }}
      className={style.message}
    >
      <h2
        style={{
          marginBottom: '20px',
        }}
        className={style.title}
      >
        {title}
      </h2>
      <p
        style={{
          marginBottom: '8px',
        }}
        className={style.boldText}
      >
        {boldText}
      </p>
      <p className={style.text}>{text}</p>
    </div>
  );
}
