import React from 'react';
import withHigh1 from "../High1";
import {useForm} from "react-hook-form";





const Sub1 = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
          <h1>Sub1</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type={'text'} {...register("title")}/>
                </div>

                <div>
                    <input type="submit" />
                </div>

            </form>
        </div>
    );
};

export default withHigh1(Sub1)