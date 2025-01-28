import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { addMenuApi, getAllMenuApi } from '../services/allAPI';

function AddItems() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [menudata, setMenudata] = useState({
        menuName: '',
        menuDiscription: ''
    })
    console.log(menudata);

    const [menus, setMenus] = useState([]);


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleMenuUpdate = async () => {
        const { menuName, menuDiscription } = menudata;

        if (!menuName || !menuDiscription) {
            alert('Please fill all the fields');
        } else {
            const result = await addMenuApi(menudata);
            console.log(result);

            if (result.status === 201) {
                alert('Menu added');
                setMenudata({
                    menuName: '',
                    menuDiscription: ''
                });
            } else {
                alert(result.error || 'Something went wrong');
            }
        }
    }

    const getAllMenu = async () => {
        try {
            const result = await getAllMenuApi()

            if (result.status === 200) {
                setMenus(result.data)
            } else {
                alert(result.error || 'Failed to fetch menus');
            }
        } catch (error) {
            console.error('Error fetching menus:', error);
            alert('Failed to fetch menus');
        }
    };

    useEffect(() => {
        getAllMenu();
    }, [menus]);


    return (
        <div className="bg-black text-white min-h-screen">
            <Header />

            <div>
                {/* add menu */}
                <div className="max-w-4xl mx-auto mt-14 p-5 bg-gray-800 shadow-md text-secondary rounded-lg relative z-1">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="flex flex-col gap-2 grow">
                            <input onChange={(e) => setMenudata({ ...menudata, menuName: e.target.value })} value={menudata.menuName}
                                type="text"
                                placeholder="Enter menu name"
                                className="add-menu-input w-full px-4 py-2 border border-dark_grey rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input onChange={(e) => setMenudata({ ...menudata, menuDiscription: e.target.value })} value={menudata.menuDiscription}
                                type="text"
                                placeholder="Enter menu description"
                                className="add-description-input w-full px-4 py-2 border border-dark_grey rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <button onClick={handleMenuUpdate}
                            className="add-menu-btn mt-4 sm:mt-0 sm:px-6 py-2 bg-primary hover:bg-primary_hover text-white text-sm font-semibold rounded-lg shadow-md focus:outline-none"
                        >
                            Add Menu
                        </button>
                    </div>
                </div>

                {/* menu section */}
                <div className="max-w-4xl mx-auto mt-10 p-2 sm:p-5 bg-gray-800 shadow-md text-white rounded-lg relative z-10 capitalize">
                    <h1 className="text-2xl font-bold mb-5 text-center">Menus</h1>
                    <ul className="space-y-4">
                        {menus.map((menu) => (
                            <li key={menu.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg shadow-md">
                                <div className='w-75'>
                                    <span className="block text-lg font-medium">{menu.menu_name}</span>
                                    <span className="text-sm hidden sm:block">{menu.menu_description}</span>
                                </div>

                                <div className="flex gap-2">
                                    <button onClick={toggleModal}
                                        className="edit-permission-btn px-4 py-2 bg-primary text-sm font-semibold rounded-lg shadow-md hover:bg-primary_hover"
                                    >
                                        Add item
                                    </button>
                                    <button onClick={toggleSidebar}
                                        className="delete-permission-btn px-4 py-2 bg-gray-600 text-sm font-semibold rounded-lg shadow-md hover:bg-gray-800"
                                    >
                                        Open Menu
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* add item model */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white text-black p-8 rounded-lg w-full sm:w-96">
                            <h3 className="text-2xl font-bold mb-4">Add New Menu Item</h3>
                            <input
                                type="text"
                                placeholder="Enter item name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
                            />
                            <input
                                type="text"
                                placeholder="Enter description"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
                            />
                            <input
                                type="text"
                                placeholder="Enter amount"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-6"
                            />
                            <div className="flex justify-end gap-4">
                                <button
                                    onClick={toggleModal}
                                    className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                                    Add Item
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* side bar */}
                {isSidebarOpen && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-end z-20">
                        <div className="bg-black text-white w-80 h-full p-5 rounded-l-lg shadow-md transition-transform transform translate-x-0">
                            <button
                                onClick={toggleSidebar}
                                className="absolute top-5 left-5 text-white text-3xl font-bold"
                            >
                                &times;
                            </button>
                            <h2 className="text-xl font-bold mb-4 mt-4">Menu Details</h2>
                            <ul>
                                <li className="mb-4">
                                    <span className="block font-medium">Item Name: Example Item</span>
                                    <span className="text-sm">Description: This is an example description of the item.</span>
                                    <span className="block text-lg font-bold mt-2">Amount: $20.00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default AddItems