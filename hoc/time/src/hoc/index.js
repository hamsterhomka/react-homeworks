import React from 'react';

function hoursToMs(hours) {
  return hours * 1000 * 3600;
}

function msToMinutes(ms) {
  return ms / 1000 / 60;
}

function msToHours(ms) {
  return msToMinutes(ms) / 60;
}

function msToDays(ms) {
  return msToHours(ms) / 24;
}

export function prettified(Component) {
  return class extends React.Component {
    prettifyDate(date) {
      const timeDiff = new Date() - new Date(date);
      let prettifiedDate = '';

      if(timeDiff > hoursToMs(24)) {
        const days = Math.floor(msToDays(timeDiff));
        prettifiedDate = `${days} дней назад`;
      } else if(timeDiff > hoursToMs(1)) {
        const hours = Math.floor(msToHours(timeDiff));
        prettifiedDate = `${hours} часов назад`;
      } else if(timeDiff < hoursToMs(1)) {
        const minutes = Math.floor(msToMinutes(timeDiff));
        prettifiedDate = `${minutes} минут назад`;
      }

      return prettifiedDate;
    }

    render() {
      const {date} = this.props;

      return <Component {...this.props} date={this.prettifyDate(date)}/>
    }
  }
}