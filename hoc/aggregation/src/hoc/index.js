import React from 'react';

function sortList(list) {
  list.sort((day, nextDay) => {
    const dayDate = new Date(day.date);
    const nextDayDate = new Date(nextDay.date);
    if(dayDate < nextDayDate) {
      return 1;
    }
    if(dayDate > nextDayDate) {
      return -1;
    }
    return 0;
  });
}

export function withSort(Component,sortFunction) {
  return class extends React.Component {
    render() {
      const {list} = this.props;

      sortList(list);
      const newList = sortFunction ? sortFunction(list) : list;

      return <Component {...this.props} list={newList}/>
    }
  }
}