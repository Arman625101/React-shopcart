import { useForm } from "react-hook-form";
import { productAPI } from "../../api";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { Product } from "../../types/global";

const AddProduct = () => {
  const { currentUser, updateProfile } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: Product) => {
    try {
      const newUserData: Product = {
        ...data,
        image: "aaaaabbbbcccc",
        sellerID: currentUser!.uid,
      };
      // API CALL
      productAPI
        .createNewProduct(newUserData)
        .then((res) => res && updateProfile && updateProfile());
    } catch {
      toast.error("Failed to Create Product");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Product Name"
          {...register("name", { required: "Product Name is required" })}
        />
        {errors && errors.name && <span>{errors.name.message}</span>}
        <input
          type="number"
          placeholder="Price"
          {...register("price", { required: "Product Price is required" })}
        />
        {errors && errors.price && <span>{errors.price.message}</span>}
        <textarea
          placeholder="Description"
          {...register("description", { required: "Product name is required" })}
        />
        {errors && errors.description && (
          <span>{errors.description.message}</span>
        )}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddProduct;
