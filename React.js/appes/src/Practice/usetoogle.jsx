import { useState } from "react";

const useToggle = (defaultVAl) => {
    const [value, setValue] = useState(defaultVAl);

    function toggleValue(val) {
        if (typeof val !== 'boolean') {
            setValue(!value);
        } else {
            setValue(val);
        }
    }

    return [value, toggleValue];
}
export default useToggle;