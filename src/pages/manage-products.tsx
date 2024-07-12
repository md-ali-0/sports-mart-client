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
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { LuMoreVertical } from "react-icons/lu";
import { toast } from "sonner";

const ManageProducts = () => {
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [productToEdit, setProductToEdit] = useState<IProduct | null>(null);
    const [productToDelete, setProductToDelete] = useState<IProduct | null>(
        null
    );

    const { data, isError, isLoading, isSuccess, error } =
        useGetAllProductsQuery("");

    useEffect(() => {
        if (isError) {
            toast.error("Something Went Wrong");
        }
    }, [isError, isSuccess, error]);

    const handleEditClick = (product: IProduct) => {
        setProductToEdit(product);
        setEditDialogOpen(true);
    };

    const handleDeleteClick = (product: IProduct) => {
        setProductToDelete(product);
        setDeleteDialogOpen(true);
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
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Price" />
            ),
        },
        {
            accessorKey: "stock",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Stock" />
            ),
        },
        {
            accessorKey: "category",
            header: "Category",
        },
        {
            accessorKey: "brand",
            header: "Brand",
            cell: ({ row }) => {
                return <span className="capitalize">{row.original.brand}</span>;
            },
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

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data.data} />
            <EditProductDialog
                product={productToEdit}
                open={editDialogOpen}
                onClose={() => setEditDialogOpen(false)}
            />
            <DeleteProductDialog
                product={productToDelete}
                open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
            />
        </div>
    );
};

export default ManageProducts;
