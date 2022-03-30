import { useMemo } from "react"
import { Button } from "react-bootstrap"
import number_format from "../../utils/number_format"
import { activityMultiplier, heightUnitExchange, options, weightUnitExchange } from "../../variables"

const getBMR = ({ gender, weight, height, age, heightUnit, weightUnit }) => {

    height = parseFloat(height) / heightUnitExchange[heightUnit]
    weight = parseFloat(weight) / weightUnitExchange[weightUnit]

    console.log(height, weight);

    age = parseInt(age)

    switch(gender){
        // Male
        case "0":
            return 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
        // Female
        case "1": 
            return 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
        default:
            throw new Error()
    }
}

const getTDEE = ({ activity, gender, weight, height, age, heightUnit, weightUnit }) => {
    const bmr = getBMR({ gender, weight, height, age, heightUnit, weightUnit })
    return {
        bmr,
        tdee: activityMultiplier[activity] * bmr
    }
}

const calculate = ({ goal, activity, gender, weight, height, age, heightUnit, weightUnit }) => {

    const { bmr, tdee } = getTDEE({ activity, gender, weight, height, age, heightUnit, weightUnit })

    return {
        bmr: number_format(Math.round(bmr)),
        tdee: number_format(Math.round(tdee)),
        calories: number_format(Math.round(tdee + ((parseInt(goal) - 1) * 500)))
    }
}

const ResultPage = ({ values, onBack }) => {

    const { bmr, tdee, calories } = useMemo(() => (calculate(values)), [values])

    return (
        <div className="text-center">
            <b>{"Basal metabolic rate"}</b><br/>
            {bmr}{" calories per day"}
            <hr/>
            <h3>
                {options.goal[values.goal]}
            </h3>
            <div className="text-white mx-auto d-flex flex-column" style={{ width:200, height:200, borderRadius: 200, backgroundColor: "#39b70a" }}>
                <div className="m-auto text-center">
                    <h2 className="mb-0 font-weight-normal">
                        {calories}
                    </h2>
                    <span style={{ opacity: .8 }}>
                        {"calories per day"}
                    </span>
                </div>
            </div>
            <hr/>
            <b>{"Total Daily Energy Expenditure"}</b><br/>
            {tdee}{" calories per day"}
            <div className="py-5 text-center">
                <Button onClick={onBack}>Back</Button>
            </div>
        </div>
    )
}

export default ResultPage