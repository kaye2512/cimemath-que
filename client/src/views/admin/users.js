import {AdminSidebar} from "../../components/Sidebar/AdminSidebar";
import {Search} from "../../components/forms/search/Search";
import {useState} from "react";

export const AdminUsers =()=>{
    const [search,setSearch] = useState();
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(search)
    }

    return (
        <div className="flex space-x-3 items-start py-12">

            <AdminSidebar/>
            <section className="py-6 px-20 w-full space-y-3 flex flex-col max-w-screen-desktop">
                <Search placeholder = "chercher par le nom, le prenom, l'identifiant de l'utilisateur"
                        handleSubmit={handleSubmit}
                        setSearch={setSearch}
                        search={search}
                />
                <table className="table-auto w-full text-left">
                    <thead className="uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3">Id</th>
                            <th scope="col" className="px-6 py-3">Nom</th>
                            <th scope="col" className="px-6 py-3">Prenom</th>
                            <th scope="col" className="px-6 py-3">Identifiant</th>
                            <th scope="col" className="px-6 py-3">E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td className="px-6 py-4">1</td>
                            <td className="px-6 py-4">Sarr</td>
                            <td className="px-6 py-4">El Hadji Mamadou</td>
                            <td className="px-6 py-4">gloatingorc</td>
                            <td className="px-6 py-4">gloatingorc@gmail.com</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">1</td>
                            <td className="px-6 py-4">Sarr</td>
                            <td className="px-6 py-4">El Hadji Mamadou</td>
                            <td className="px-6 py-4">gloatingorc</td>
                            <td className="px-6 py-4">gloatingorc@gmail.com</td>
                        </tr>
                         <tr>
                             <td className="px-6 py-4">1</td>
                             <td className="px-6 py-4">Sarr</td>
                             <td className="px-6 py-4">El Hadji Mamadou</td>
                             <td className="px-6 py-4">gloatingorc</td>
                             <td className="px-6 py-4">gloatingorc@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}