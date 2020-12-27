import _ from 'lodash';

export const createReducer = (initialState, handlers) => (
  function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) return handlers[action.type](state, action);
    return state;
  }
);

export const getDiff = (object, base) => {
  const changes = (object, base) => {
    return _.transform(object, (result, value, key) => {
      if (!_.isEqual(value, base[key])) {
        result[key] = (_.isObject(value) && _.isObject(base[key]))
          ? changes(value, base[key]) : value;
      }
    });
  };

  return changes(object, base);
};

export const parseError = (err) => {
  return err.response.data.message
  // if (err.message) return err.message;
}