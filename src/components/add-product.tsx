import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
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

const AddProductDialog = () => {
    const [addDialogOpen, setAddDialogOpen] = useState(false);

    const [newProduct, setNewProduct] = useState<IProduct>({
        id: Math.floor(Math.random() * 1000), // Temporary ID
        name: "",
        description: "",
        price: 0,
        stock: 0,
        category: "Electronics",
        status: "Active",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelectChange = (name: string, value: string) => {
        setNewProduct({
            ...newProduct,
            [name]: value,
        });
    };
    const handleAddProduct = (product: IProduct) => {
        console.log("Adding product:", product);
        setAddDialogOpen(false);
    };
    return (
        <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
            <DialogTrigger asChild>
                <Button variant="default">Add Product</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Product</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <Input
                        name="name"
                        placeholder="Enter product name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                    />
                    <Textarea
                        name="description"
                        placeholder="Enter product description"
                        value={newProduct.description}
                        onChange={handleInputChange}
                    />
                    <Input
                        name="price"
                        type="number"
                        placeholder="Enter product price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                    />
                    <Input
                        name="stock"
                        type="number"
                        placeholder="Enter product stock"
                        value={newProduct.stock}
                        onChange={handleInputChange}
                    />
                    <Select
                        defaultValue={newProduct.category}
                        onValueChange={(value) =>
                            handleSelectChange("category", value)
                        }
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Electronics">
                                Electronics
                            </SelectItem>
                            <SelectItem value="Apparel">Apparel</SelectItem>
                            <SelectItem value="Home">Home</SelectItem>
                            <SelectItem value="Accessories">
                                Accessories
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    <Select
                        defaultValue={newProduct.status}
                        onValueChange={(value) =>
                            handleSelectChange("status", value)
                        }
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
                    <Button onClick={() => handleAddProduct(newProduct)}>
                        Add
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddProductDialog;
