export const CheckBoxField = (props)=>{
    const {checked, formError, handleChecked} = props;
    return(
        <div className="flex flex-col mb-6">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="agreement" type="checkbox"
                           className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                           checked={checked}
                           onChange={handleChecked}
                    />
                </div>

                <label htmlFor="agreement" className="ml-2 text-sm font-medium text-white ">
                    <span>J'accépte les </span>
                    <a href="https://discord.gg/hndmR5Ns" className="text-red-600 hover:underline ">
                        termes et les conditions d'utilisation.
                    </a>
                </label>

            </div>
            <div>
                {formError && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formError}</p>}
            </div>
        </div>

    );
}