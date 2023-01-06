export const Footer =()=>{
    return(
        <footer className="flex flex-col ">
            <div className="flex justify-between ">
                <a href="#home" className="flex items-center ">
                    <img src="/assets/7thfloor.png" className="h-8 mr-3" alt="7thfloor Logo"/>

                </a>

                <ul className="flex ">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">A propos</a>
                    </li>

                </ul>
            </div>

            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a
                href="#home" className="hover:underline">7th floor™</a>. Tous les droits réservés.
            </span>
        </footer>
    );
}