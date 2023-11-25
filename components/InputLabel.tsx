import { inputLabelType } from "@/types";

export default function InputLabel({ forInput, value, className, children } : inputLabelType) {
    return (
        <label
            htmlFor={forInput}
            className={`block font-medium text-gray-700 ` + className}
        >
            {value ? value : children}
        </label>
    );
}