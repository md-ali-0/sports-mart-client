import { DataTableColumnHeader } from "@/components/pages/manage-products/columns-header";
import { DataTable } from "@/components/pages/manage-products/data-table";
import DeleteProductDialog from "@/components/pages/manage-products/handle-delete-product";
import EditProductDialog from "@/components/pages/manage-products/handle-edit-product";
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
            id: 1,
            name: "Gamer Gear Pro Controller",
            description: "High-performance gaming controller",
            price: 99.99,
            stock: 50,
            category: "Electronics",
            status: "Active",
        },
        {
            id: 2,
            name: "Cozy Knit Sweater",
            description: "Soft and warm winter sweater",
            price: 49.99,
            stock: 25,
            category: "Apparel",
            status: "Draft",
        },
        {
            id: 3,
            name: "Ceramic Mug Set",
            description: "Set of 4 handcrafted mugs",
            price: 29.99,
            stock: 100,
            category: "Home",
            status: "Active",
        },
        {
            id: 4,
            name: "Leather Backpack",
            description: "Durable and stylish backpack",
            price: 79.99,
            stock: 15,
            category: "Accessories",
            status: "Archived",
        },
        {
            id: 5,
            name: "Wireless Headphones",
            description: "High-quality wireless headphones",
            price: 149.99,
            stock: 30,
            category: "Electronics",
            status: "Active",
        },
        {
            id: 6,
            name: "Cotton T-Shirt",
            description: "Soft and comfortable t-shirt",
            price: 24.99,
            stock: 75,
            category: "Apparel",
            status: "Active",
        },
        {
            id: 7,
            name: "Bamboo Cutting Board",
            description: "Durable and eco-friendly cutting board",
            price: 34.99,
            stock: 40,
            category: "Home",
            status: "Active",
        },
        {
            id: 8,
            name: "Leather Wallet",
            description: "Stylish and practical wallet",
            price: 39.99,
            stock: 20,
            category: "Accessories",
            status: "Draft",
        },
        {
            id: 9,
            name: "Noise-Cancelling Earbuds",
            description: "Immersive audio experience",
            price: 99.99,
            stock: 45,
            category: "Electronics",
            status: "Active",
        },
        {
            id: 10,
            name: "Linen Throw Blanket",
            description: "Cozy and breathable blanket",
            price: 59.99,
            stock: 60,
            category: "Home",
            status: "Active",
        },
        {
            id: 11,
            name: "Leather Tote Bag",
            description: "Versatile and durable tote bag",
            price: 69.99,
            stock: 25,
            category: "Accessories",
            status: "Active",
        },
        {
            id: 12,
            name: "Wool Socks",
            description: "Warm and comfortable socks",
            price: 14.99,
            stock: 90,
            category: "Apparel",
            status: "Active",
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
            accessorKey: "status",
            header: ({ column }) => <DataTableColumnHeader column={column} title="Status"/>
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
