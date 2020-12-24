export default function apiMiddleware(api) {
    return ({dispatch, getState}) => {
        return next => action => {
            if (!action) return; // This should never happen
            if (typeof action === 'function') {
                return action(dispatch, getState);
            }

            const {promise, types, ...rest} = action; // eslint-disable-line no-redeclare

            if (!promise) {
                return next(action);
            }

            const [REQUEST, SUCCESS, FAILURE] = types;

            const actionPromise = promise(api);

            next({...rest, type: REQUEST});

            actionPromise.then(
                (result) => next({...rest, result, type: SUCCESS}),
                (error) => {
                    console.log(error);

                    next({...rest, error, type: FAILURE});
                }
            ).catch((error) => {
                console.log(error);

                next({...rest, error, type: FAILURE});
            });

            return actionPromise;
        };
    };
}
