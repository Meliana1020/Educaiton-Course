import { useState, useEffect } from "react";

const initialDataProduct = JSON.parse(localStorage.getItem('products')) || [
    {
        id: 0,
        name: "product 1",
        price: 200000,
    }
];

const DashboardAdmin = () => {
    const [products, setProducts] = useState(initialDataProduct);
    const [currentProduct, setCurrentProduct] = useState({ id: null, name: "", price: "" });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const handleAddProduct = () => {
        if (isEditing) {
            setProducts(products.map(product => 
                product.id === currentProduct.id ? { ...currentProduct } : product
            ));
            setIsEditing(false);
        } else {
            const nextId = products.length ? products[products.length - 1].id + 1 : 0;
            setProducts([
                ...products,
                {
                    id: nextId,
                    name: currentProduct.name,
                    price: currentProduct.price,
                }
            ]);
        }

        setCurrentProduct({ id: null, name: "", price: "" });
    };

    const handleEditProduct = (product) => {
        setCurrentProduct(product);
        setIsEditing(true);
    };

    const handleDeleteProduct = (id) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
            setProducts(products.filter(product => product.id !== id));
            alert("Produk berhasil dihapus.");
        }
    };

    return (
        <div className="">
            <div className="flex flex-row ml-2 h-screen bg-gray-100">
                <div className="p-5 bg-white text-gray-600 font-medium w-48 border-r-4 border-green-400 rounded-r-xl">
                    <ul>
                        <li className="mb-3">Dashboard</li>
                        <li>Product</li>
                    </ul>
                </div>

                <div className="p-5 bg-white text-gray-600 font-medium flex-1">
                    <h1 className="text-3xl font-bold mb-5">Product</h1>

                    <label
                        htmlFor="productName"
                        className='block text-slate-700 text-base font-medium mb-2 text-left'>
                        {isEditing ? "Edit Produk" : "Tambah Produk"}
                    </label>
                    <input
                        type="text"
                        id="productName"
                        className="mb-2 text-xs border rounded w-1/3 py-2 px-3 text-slate-500 border-slate-300"
                        placeholder="tambah produk baru"
                        name="name"
                        value={currentProduct.name}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
                    />

                    <label
                        htmlFor="productPrice"
                        className='block text-slate-700 text-base font-medium mb-2 text-left'>
                        Harga Produk
                    </label>
                    <input
                        type="number"
                        id="productPrice"
                        className="mb-2 text-xs border rounded w-1/3 py-2 px-3 text-slate-500 border-slate-300"
                        name="price"
                        value={currentProduct.price}
                        onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
                    />

                    <div className="flex mt-3 justify-start items-center">
                        <button onClick={handleAddProduct}
                            className="bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-600 transition-all duration-300">
                            {isEditing ? "Edit Produk" : "Tambah Produk"}
                        </button>
                    </div>

                    <div className="mt-8">
                        <h1 className="text-xl font-semibold rounded-lg mb-4">Product List</h1>

                        <div className="bg-white border-[0.1px] w-full rounded-lg p-6 border-gray-300">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Produk</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga Produk</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {products.map(product => (
                                            <tr key={product.id} className="">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.price}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    <button onClick={() => handleEditProduct(product)} className="text-blue-600 hover:text-blue-800">Edit</button>
                                                    <button onClick={() => handleDeleteProduct(product.id)} className="text-red-600 hover:text-red-800 ml-2">Hapus</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardAdmin;