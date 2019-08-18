import React from 'react';
import New from '../components/New';
import Popular from '../components/Popular';

export function withWrap(Component) {
  const NEW_VIEWS_COUNT = 100,
    POPULAR_VIEWS_COUNT = 1000;

  return class extends React.Component {
    render() {
      const {views} = this.props,
        componentWithProps = <Component {...this.props}/>;

      if(views < NEW_VIEWS_COUNT) {
        return (
          <New>
            {componentWithProps}
          </New>
        )
      } else if(views > POPULAR_VIEWS_COUNT) {
        return (
          <Popular>
            {componentWithProps}
          </Popular>
        )
      } else {
        return componentWithProps;
      }
    }
  }
}