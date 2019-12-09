import React, {useState, useEffect} from 'react';

const convertClock = (date) => {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hour < 9 ? `0${hour}`: hour}:${
    minutes < 9 ? `0${minutes}`: minutes}:${
    seconds < 9 ? `0${seconds}` : seconds}`;
}

function Clock() {
  const [clock, setClock] = useState(convertClock(new Date()));

  useEffect(() => {
    var timerId = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerId);
    }
  });

  const tick = () => {
    setClock(convertClock(new Date()));
  }

  return (
    <h1>{clock}</h1>
  )
}
export default Clock;