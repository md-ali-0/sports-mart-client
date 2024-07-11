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
import { useState } from "react";

interface EditProductDialogProps {
    product: IProduct | null;
    open: boolean;
    onClose: () => void;
    onSave: (product: IProduct) => void;
}

const EditProductDialog = ({ product, open, onClose, onSave }: EditProductDialogProps) => {
    const [editedProduct, setEditedProduct] = useState<IProduct | null>(product);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (editedProduct) {
            setEditedProduct({
                ...editedProduct,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSelectChange = (name: string, value: string) => {
        if (editedProduct) {
            setEditedProduct({
                ...editedProduct,
                [name]: value,
            });
        }
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent aria-describedby={undefined} className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Product</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <Input
                        name="name"
                        placeholder="Enter product name"
                        defaultValue={product?.name}
                        onChange={handleInputChange}
                    />
                    <Textarea
                        name="description"
                        placeholder="Enter product description"
                        defaultValue={product?.description}
                        onChange={handleInputChange}
                    />
                    <Input
                        name="price"
                        type="number"
                        placeholder="Enter product price"
                        defaultValue={product?.price}
                        onChange={handleInputChange}
                    />
                    <Input
                        name="stock"
                        type="number"
                        placeholder="Enter product stock"
                        defaultValue={product?.stock}
                        onChange={handleInputChange}
                    />
                    <Select
                        defaultValue={product?.category}
                        onValueChange={(value) => handleSelectChange("category", value)}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Electronics">Electronics</SelectItem>
                            <SelectItem value="Apparel">Apparel</SelectItem>
                            <SelectItem value="Home">Home</SelectItem>
                            <SelectItem value="Accessories">Accessories</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select
                        defaultValue={product?.status}
                        onValueChange={(value) => handleSelectChange("status", value)}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Active">Active</SelectItem>
                            <SelectItem value="Draft">Draft</SelectItem>
                            <SelectItem value="Archived">Archived</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button onClick={() => onSave(editedProduct as IProduct)}>
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EditProductDialog;
