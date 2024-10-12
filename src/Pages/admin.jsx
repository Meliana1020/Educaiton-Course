import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputForm from "../Components/Elements/Input/Index";

const API_URL =
  "https://67070bb5a0e04071d228fc63.mockapi.io/education/course/product";

const DashboardAdmin = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    id: null,
    image: "",
    title: "",
    description: "",
    avatar: "",
    price: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    if (isEditing) {
      try {
        await axios.put(`${API_URL}/${currentProduct.id}`, currentProduct);
        fetchProducts();
        setIsEditing(false);
      } catch (error) {
        console.error("Error editing product:", error);
      }
    } else {
      try {
        await axios.post(API_URL, currentProduct);
        fetchProducts();
      } catch (error) {
        console.error("Error adding product:", error);
      }
    }

    setCurrentProduct({
      id: null,
      image: "",
      title: "",
      description: "",
      avatar: "",
      price: "",
    });
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };
  
  const handleDeleteProduct = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchProducts();
        alert("Produk berhasil dihapus.");
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };

  const handleProductClick = () => {
    navigate("/admin");
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <aside className="flex flex-col w-full md:w-64 bg-white shadow-md p-4 md:fixed md:h-full md:overflow-y-auto">
          <div className="flex items-center justify-center mb-8">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 cursor-pointer"
              onClick={handleLogoClick}
            />
          </div>
          <nav>
            <ul>
              <li className="mb-4">
                <a
                  className="block text-gray-700 hover:bg-gray-200 rounded-md p-3"
                  onClick={handleProductClick}
                >
                  Products
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>

      <div className="p-5 bg-white text-gray-600 font-medium flex-1 md:ml-64">
        <h1 className="text-3xl font-bold mb-5">
          {isEditing ? "Edit Produk" : "Tambah Produk"}
        </h1>
        
        <InputForm
          label="Product Image"
          type="text"
          name="productImage"
          value={currentProduct.image}
          onChange={(e) =>
            setCurrentProduct({ ...currentProduct, image: e.target.value })
          }
        />
        <InputForm
          label="Title"
          type="text"
          name="productTitle"
          value={currentProduct.title}
          onChange={(e) =>
            setCurrentProduct({ ...currentProduct, title: e.target.value })
          }
        />
        <InputForm
          label="Product Description"
          type="text"
          name="productDescription"
          value={currentProduct.description}
          onChange={(e) =>
            setCurrentProduct({
              ...currentProduct,
              description: e.target.value,
            })
          }
        />
        <InputForm
          label="Avatar"
          type="text"
          name="productAvatar"
          value={currentProduct.avatar}
          onChange={(e) =>
            setCurrentProduct({ ...currentProduct, avatar: e.target.value })
          }
        />
        <InputForm
          label="Product Price"
          type="text"
          name="productPrice"
          value={currentProduct.price}
          onChange={(e) =>
            setCurrentProduct({ ...currentProduct, price: e.target.value })
          }
        />

        <div className="flex mt-3 justify-start items-center">
          <button
            onClick={handleAddProduct}
            className="bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-600 transition-all duration-300"
          >
            {isEditing ? "Edit Produk" : "Tambah Produk"}
          </button>
        </div>

        <div className="mt-10">
          <h1 className="text-3xl font-semibold rounded-lg mb-4">
            Product List
          </h1>

          <div className="bg-white border-[0.1px] w-full rounded-lg p-6 border-gray-300">
            <div className="overflow-x-auto">
              
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Avatar
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {product.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-10 w-10 object-cover"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {product.title}
                      </td>
                      <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 max-w-xs break-words">
                        {product.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <img
                          src={product.avatar}
                          alt={product.title}
                          className="h-10 w-10 object-cover"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {product.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <button
                          onClick={() => handleEditProduct(product)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-red-600 hover:text-red-800 ml-2"
                        >
                          Hapus
                        </button>
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
  );
};

export default DashboardAdmin;
