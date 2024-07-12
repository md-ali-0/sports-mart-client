import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { IProduct } from "@/interface/IProduct";
import { useDeleteProductMutation } from "@/redux/features/products/productsApi";
import { useEffect } from "react";
import { toast } from "sonner";

interface DeleteProductDialogProps {
    product: IProduct | null;
    open: boolean;
    onClose: () => void;
}

const DeleteProductDialog = ({ product, open, onClose }: DeleteProductDialogProps) => {

    const [deleteProduct, { isSuccess, isError, error }] = useDeleteProductMutation()

    useEffect(() => {
        if (isError) {
            toast.error("Something Went Wrong");
        } else if (isSuccess) {
            toast.success("Product Deleted successfully");
        }
    }, [isError, isSuccess, error]);

    const handleDelete = async (id : string)=>{
        await deleteProduct(id)
    }
    return (
        <AlertDialog open={open} onOpenChange={onClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Delete Product</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to delete the product "{product?.name}"?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={()=>handleDelete(product?._id as string)}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteProductDialog;
