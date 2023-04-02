import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddStep, ResetStep } from "../Store/StepCounter";
const Main = () => {
    const steps = useSelector(state => state.Steps);
    const dispatch = useDispatch();
    const onStepAdd = () => dispatch(AddStep());
    const onStepReset = () => dispatch(ResetStep());
    return (
        <>
            <div className="row">
                <p>You have walked {steps} steps today!</p>
                <button className="addStep" onClick={onStepAdd}>Add a Step</button>
                <button className="resetStep" onClick={onStepReset}>Reset Steps</button>
            </div>
        </>
    );
}

export default Main;