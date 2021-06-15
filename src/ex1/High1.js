import React, {useEffect} from 'react';
import { useHistory, useLocation } from "react-router-dom";

const withHigh1 = WrappedComponent => {

    const Component = props => {

        let history = useHistory()
        const location = useLocation()

        useEffect(() => {

            console.log(history, location)



        },[])

        return (
            <div>
                <h1>High1</h1>
                <WrappedComponent {...props} />
            </div>);
    };
    return Component;
};

export default withHigh1;

