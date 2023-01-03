export const TextFieldMedium = (props)=>{
    const {label, placeholder } = props;
    return(
        <div className="mb-7 ">
            <label  htmlFor={label}
                    className="block mb-2 text-sm font-medium ">
                {label}
            </label>
            <input type="text" id={label}
                   className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-2.5"
                   placeholder={placeholder} required/>
        </div>
    );
}