const SkeletonProductCard = () => {
    return (
        <div className="rounded-lg overflow-hidden border p-2.5 animate-pulse">
            <div className="w-full h-48 bg-muted rounded-xl"></div>
            <div className="py-2.5 px-2">
                <div className="h-6 bg-muted rounded-md mb-2"></div>
                <div className="flex items-center mb-2">
                    <div className="flex items-center gap-1 text-primary">
                        <div className="w-5 h-5 bg-muted rounded-full"></div>
                        <div className="w-12 h-4 bg-muted rounded-md"></div>
                    </div>
                    <div className="ml-2 w-20 h-4 bg-muted rounded-md"></div>
                </div>
                <div className="flex justify-between items-center py-1">
                    <div className="bg-muted h-4 w-16 rounded-md"></div>
                    <div className="bg-muted h-4 w-12 rounded-md"></div>
                </div>
                <div className="mt-2 h-12 bg-muted rounded-md"></div>
                <div className="flex items-center justify-between mt-2">
                    <div className="w-20 h-6 bg-muted rounded-md"></div>
                    <div className="w-24 h-8 bg-muted rounded-md"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonProductCard;
