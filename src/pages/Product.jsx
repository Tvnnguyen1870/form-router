import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/reducers/product";

const Product = () => {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            productName: '',
            price: '',
            color: false,
            describe: '',
        }
    });

    const productStore = useSelector(state => state.product);

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(addProduct(values))
    }

    return (
        <div>
            <h1>thêm sản phẩm</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>tên sản phẩm:</p>
                <Controller name="productName" control={control}
                    render={({ field }) => (
                        <input {...field} type="text" placeholder="product name" />
                    )}
                />
                <p>giá:</p>
                <Controller name="price" control={control}
                    render={({ field }) => (
                        <input {...field} type="text" placeholder="enter price" />
                    )}
                />
                <p>màu:</p>
                <Controller name="color" control={control}
                    render={({ field }) => (
                        <select {...field}>
                            <option value="green">xanh</option>
                            <option value="yellow">vàng</option>
                            <option value="violet">tím</option>
                            <option value="blue">xanh dương</option>
                        </select>
                    )}
                />
                <p>mô tả:</p>
                <Controller name="describe" control={control}
                    render={({ field }) => (
                        <textarea {...field} type="text" />
                    )}
                />
                <br />
                <button type="submit">thêm</button>
            </form>
            <ul>
                {
                    productStore.products.map((product, index) => {
                        return <li key={index}>{product.productName}</li>
                    })
                }
                {
                    productStore.products.map((product, index) => {
                        return <li key={index}>{product.price}</li>
                    })
                }
                {
                    productStore.products.map((product, index) => {
                        return <li key={index}>{product.color}</li>
                    })
                }
                {
                    productStore.products.map((product, index) => {
                        return <li key={index}>{product.describe}</li>
                    })
                }
                
            </ul>

        </div>
    )
}

export default Product
