import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { IProduct } from "@/interface/IProduct";
import { useUpdateProductMutation } from "@/redux/features/products/productsApi";
import { ImageUpload } from "@/utils/image-upload";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

interface EditProductDialogProps {
    product: IProduct | null;
    open: boolean;
    onClose: () => void;
}

const EditProductDialog = ({
    product,
    open,
    onClose,
}: EditProductDialogProps) => {
    const { register, control, handleSubmit, reset } = useForm<IProduct>({
        defaultValues: product || {
            name: "",
            description: "",
            price: 0,
            stock: 0,
            category: "",
            brand: "",
            image: undefined,
        },
    });

    const [updateProduct, { isSuccess, isError, error }] =
        useUpdateProductMutation();

    useEffect(() => {
        if (isError) {
            toast.error("Something Went Wrong");
        } else if (isSuccess) {
            reset()
        }
    }, [isError, isSuccess, error, reset]);

    useEffect(() => {
        reset(
            product || {
                name: "",
                description: "",
                price: 0,
                stock: 0,
                category: "",
                brand: "",
                image: "",
            }
        );
    }, [product, reset]);
    
    const onSubmit = async (data: IProduct) => {

        const loadingToast = toast.loading("Product is Updating...");
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

        if (product) {
            await updateProduct({ productData, id: product._id });
        }
        onClose();
        toast.success("Product Added successfully", { id: loadingToast });
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent
                aria-describedby={undefined}
                className="sm:max-w-[425px]"
            >
                <DialogHeader>
                    <DialogTitle>Edit Product</DialogTitle>
                </DialogHeader>
                <form
                    onSubmit={handleSubmit(onSubmit)}
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
                                    <SelectItem value="swimming">
                                        Swimming
                                    </SelectItem>
                                    <SelectItem value="hiking">
                                        Hiking
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    <Controller
                        name="brand"
                        control={control}
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
                                        Wilson
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
                    <DialogFooter className="col-span-2">
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditProductDialog;
