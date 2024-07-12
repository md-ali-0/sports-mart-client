
import { DataTableColumnHeader } from "@/components/columns-header";
import { DataTable } from "@/components/data-table";
import DeleteProductDialog from "@/components/handle-delete-product";
import EditProductDialog from "@/components/handle-edit-product";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IProduct } from "@/interface/IProduct";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { LuMoreVertical } from "react-icons/lu";

async function getData(): Promise<IProduct[]> {
    // Fetch data from your API here.
    return [
        {
            _id: "asd",
            name: "Gamer Gear Pro Controller",
            description: "High-performance gaming controller",
            price: 99.99,
            stock: 50,
            category: "Electronics",
            brand: "Active",
        },
        {
            _id: "asds",
            name: "Cozy Knit Sweater",
            description: "Soft and warm winter sweater",
            price: 49.99,
            stock: 25,
            category: "Apparel",
            brand: "Draft",
        },
        {
            _id: "asdew",
            name: "Ceramic Mug Set",
            description: "Set of 4 handcrafted mugs",
            price: 29.99,
            stock: 100,
            category: "Home",
            brand: "Active",
        },
        {
            _id: "asddgf",
            name: "Leather Backpack",
            description: "Durable and stylish backpack",
            price: 79.99,
            stock: 15,
            category: "Accessories",
            brand: "Archived",
        },
        {
            _id: "asdfh",
            name: "Wireless Headphones",
            description: "High-quality wireless headphones",
            price: 149.99,
            stock: 30,
            category: "Electronics",
            brand: "Active",
        },
        {
            _id: "asddh",
            name: "Cotton T-Shirt",
            description: "Soft and comfortable t-shirt",
            price: 24.99,
            stock: 75,
            category: "Apparel",
            brand: "Active",
        },
        {
            _id: "asdhd",
            name: "Bamboo Cutting Board",
            description: "Durable and eco-friendly cutting board",
            price: 34.99,
            stock: 40,
            category: "Home",
            brand: "Active",
        },
        {
            _id: "aserd",
            name: "Leather Wallet",
            description: "Stylish and practical wallet",
            price: 39.99,
            stock: 20,
            category: "Accessories",
            brand: "Draft",
        },
        {
            _id: "a5y6sd",
            name: "Noise-Cancelling Earbuds",
            description: "Immersive audio experience",
            price: 99.99,
            stock: 45,
            category: "Electronics",
            brand: "Active",
        },
        {
            _id: "asdly",
            name: "Linen Throw Blanket",
            description: "Cozy and breathable blanket",
            price: 59.99,
            stock: 60,
            category: "Home",
            brand: "Active",
        },
        {
            _id: "asdfhd",
            name: "Leather Tote Bag",
            description: "Versatile and durable tote bag",
            price: 69.99,
            stock: 25,
            category: "Accessories",
            brand: "Active",
        },
        {
            _id: "ascgtd",
            name: "Wool Socks",
            description: "Warm and comfortable socks",
            price: 14.99,
            stock: 90,
            category: "Apparel",
            brand: "Active",
        },
    ];
}

const ManageProducts = () => {
    const [data, setData] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [productToEdit, setProductToEdit] = useState<IProduct | null>(null);
    const [productToDelete, setProductToDelete] = useState<IProduct | null>(
        null
    );

    useEffect(() => {
        async function fetchData() {
            const result = await getData();
            setData(result);
            setLoading(false);
        }

        fetchData();
    }, []);

    const handleEditClick = (product: IProduct) => {
        setProductToEdit(product);
        setEditDialogOpen(true);
    };

    const handleDeleteClick = (product: IProduct) => {
        setProductToDelete(product);
        setDeleteDialogOpen(true);
    };

    const handleSaveProduct = (product: IProduct) => {
        console.log("Saving product:", product);
        setEditDialogOpen(false);
        // Perform your save logic here.
    };

    const handleConfirmDeleteProduct = async () => {
        if (productToDelete) {
            console.log("Deleting product:", productToDelete);
            // Perform your delete logic here.
            setDeleteDialogOpen(false);
        }
    };

    const columns: ColumnDef<IProduct>[] = [
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "description",
            header: "Description",
        },
        {
            accessorKey: "price",
            header: ({ column }) => <DataTableColumnHeader column={column} title="Price"/>
        },
        {
            accessorKey: "stock",
            header: ({ column }) => <DataTableColumnHeader column={column} title="Stock"/>
        },
        {
            accessorKey: "category",
            header: "Category",
        },
        {
            accessorKey: "brand",
            header: "Brand"
        },
        {
            accessorKey: "action",
            header: "Action",
            cell: ({ row }) => {
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <LuMoreVertical size={20} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                                onClick={() => handleEditClick(row.original)}
                            >
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => handleDeleteClick(row.original)}
                            >
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
            <EditProductDialog
                product={productToEdit}
                open={editDialogOpen}
                onClose={() => setEditDialogOpen(false)}
                onSave={handleSaveProduct}
            />
            <DeleteProductDialog
                product={productToDelete}
                open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                onConfirm={handleConfirmDeleteProduct}
            />
        </div>
    );
};

export default ManageProducts;
