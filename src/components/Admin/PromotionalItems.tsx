import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

type Product = {
  name: string;
  imageUrl: string;
  filename: string;
};

const PromotionalItems: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    image: null as File | null
  });
  const backendURL = 'https://testing-backend-9uqt.onrender.com';

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${backendURL}/api/uploads`);
      if (!res.ok) throw new Error('Failed to fetch');

      const data: { images: { name: string; imageUrl: string }[] } = await res.json();

      const withFilenames: Product[] = data.images.map((item) => ({
        name: item.name,
        imageUrl: item.imageUrl,
        filename: item.imageUrl.split('/').pop() || '',
      }));

      setProducts(withFilenames);
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (filename: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${backendURL}/api/uploads/${filename}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Delete failed');

      setProducts((prev) => prev.filter((product) => product.filename !== filename));
    } catch (err) {
      console.error('Delete error:', err);
      alert('Could not delete the product.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewProduct(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };





  const [toast, setToast] = useState<{show: boolean; message: string; type: 'success' | 'error'}>({
    show: false,
    message: '',
    type: 'success'
  });

  // Toast component
  const Toast = () => (
    <AnimatePresence>
      {toast.show && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
            toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}
        >
          {toast.message}
        </motion.div>
      )}
    </AnimatePresence>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newProduct.name || !newProduct.image) {
      setToast({
        show: true,
        message: 'Please fill all fields',
        type: 'error'
      });
      setTimeout(() => setToast(prev => ({...prev, show: false})), 3000);
      return;
    }

    const formData = new FormData();
    formData.append('name', newProduct.name);
    formData.append('image', newProduct.image);

    try {
      const res = await fetch(`${backendURL}/api/products/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed');

      // Show success message
      setToast({
        show: true,
        message: 'Product added successfully!',
        type: 'success'
      });
      
      // Reset form and close modal
      setNewProduct({ name: '', image: null });
      setShowModal(false);
      
      // Refresh the product list
      fetchProducts();

      // Hide toast after 3 seconds
      setTimeout(() => setToast(prev => ({...prev, show: false})), 3000);
    } catch (err) {
      console.error('Upload error:', err);
      setToast({
        show: true,
        message: 'Failed to add product',
        type: 'error'
      });
      setTimeout(() => setToast(prev => ({...prev, show: false})), 3000);
    }
  };

  return (
    <section className="py-12 mt-7 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Promotional Items</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-7  py-2 rounded-lg transition"
        >
          Add Product
        </button>
      </div>

      {/* Add Product Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Add New Product</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Product Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Product List */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.filename}
              className="bg-white shadow rounded-2xl overflow-hidden border border-gray-100 flex flex-col"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
                  <p className="text-sm text-gray-500 truncate">{product.filename}</p>
                </div>
                <button
                  onClick={() => handleDelete(product.filename)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <Toast />
        </div>
      )}
    </section>
  );
};

export default PromotionalItems;