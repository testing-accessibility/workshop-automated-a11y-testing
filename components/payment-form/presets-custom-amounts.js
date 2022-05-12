import React, {useRef} from "react"

const PresetsCustomAmounts = ({amounts}) => {
    const customAmtRadio = useRef(null)

    const focusInCustomInput = () => {
        customAmtRadio.current.checked = true
    }
    const Radio = ({amount = 0}) => (
        <label>
            <input id={`amt_${amount}`} name="amounts" type="radio" value={amount} />
            ${amount}
        </label>
    )
    return (
        <>
            {amounts.map((amount, index)=> {
                return <Radio amount={amount} key={index} />
            })}
            <label className="custom-radio-group">
                <input id="amt_custom" name="amounts" type="radio" value="Custom" ref={customAmtRadio} />
                <input onFocus={focusInCustomInput} type="text" id="amt_custom_text" placeholder="$ Other amount" />
            </label>
        </>
    )
}

export default PresetsCustomAmounts
