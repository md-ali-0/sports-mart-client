import { IProduct } from "@/interface/IProduct";
import { useCreateProductMutation } from "@/redux/features/products/productsApi";
import { ImageUpload } from "@/utils/image-upload";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

const AddProductDialog = () => {
    const { register, handleSubmit, control, reset } = useForm<IProduct>();
    const [addProduct, { isSuccess, isError, error }] =
        useCreateProductMutation();

    useEffect(() => {
        if (isError) {
            toast.error("Something Went Wrong");
        } else if (isSuccess) {
            reset();
        }
    }, [isError, isSuccess, error, reset]);

    const [addDialogOpen, setAddDialogOpen] = useState(false);

    const handleAddProduct = async (data: IProduct) => {
        try {
            const loadingToast = toast.loading("Product is Uploading...");
            let productData: Partial<IProduct> = { ...data };
            if (data.image[0]) {
                const imageURL = await ImageUpload(data.image[0]);
                if (imageURL) {
                    productData = {
                        ...productData,
                        image: imageURL,
                    };
                }
            }

            await addProduct(productData);
            setAddDialogOpen(false);
            toast.success("Product Added successfully", { id: loadingToast });
        } catch (error) {
            console.error("Error adding product:", error);
            toast.error("Failed to add product");
        }
    };

    return (
        <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
            <DialogTrigger asChild>
                <Button variant="default">Add Product</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                    <DialogTitle>Add Product</DialogTitle>
                </DialogHeader>
                <form
                    onSubmit={handleSubmit(handleAddProduct)}
                    className="grid grid-cols-2 gap-4"
                >
                    <Input
                        {...register("name")}
                        name="name"
                        placeholder="Enter product name"
                        required
                    />
                    <Input
                        {...register("image")}
                        name="image"
                        type="file"
                        required
                    />
                    <Textarea
                        {...register("description")}
                        name="description"
                        placeholder="Enter product description"
                        className="col-span-2"
                        required
                    />
                    <Input
                        {...register("price")}
                        name="price"
                        type="number"
                        placeholder="Enter product price"
                        required
                    />
                    <Input
                        {...register("stock")}
                        name="stock"
                        type="number"
                        placeholder="Enter product stock"
                        required
                    />
                    <Controller
                        name="category"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => (
                            <Select
                                defaultValue={field.value}
                                onValueChange={field.onChange}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="basketball">
                                        Basketball
                                    </SelectItem>
                                    <SelectItem value="fitness">
                                        Fitness
                                    </SelectItem>
                                    <SelectItem value="golf">Golf</SelectItem>
                                    <SelectItem value="yoga">Yoga</SelectItem>
                                    <SelectItem value="football">
                                        Football
                                    </SelectItem>
                                    <SelectItem value="tennis">
                                        Tennis
                                    </SelectItem>
                                    <SelectItem value="Swimming">
                                        Swimming
                                    </SelectItem>
                                    <SelectItem value="Hiking">
                                        Hiking
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    <Controller
                        name="brand"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => (
                            <Select
                                defaultValue={field.value}
                                onValueChange={field.onChange}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Brand" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="nike">Nike</SelectItem>
                                    <SelectItem value="adidas">
                                        Adidas
                                    </SelectItem>
                                    <SelectItem value="under-armour">
                                        Under Armour
                                    </SelectItem>
                                    <SelectItem value="puma">Puma</SelectItem>
                                    <SelectItem value="reebok">
                                        Reebok
                                    </SelectItem>
                                    <SelectItem value="wilson">
                                        Schwinn
                                    </SelectItem>
                                    <SelectItem value="columbia">
                                        Columbia
                                    </SelectItem>
                                    <SelectItem value="schwinn">
                                        Schwinn
                                    </SelectItem>
                                    <SelectItem value="mizuno">
                                        Mizuno
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    <DialogFooter className="col-span-2 flex justify-end">
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Add</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddProductDialog;
