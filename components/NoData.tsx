import { INoDataProps } from "@/types";
import { Database } from "lucide-react";

export default function NoData({notFoundMessage}: INoDataProps) {
    return (
        <div className="text-lg font-medium text-gray-700 dark:text-gray-400 flex flex-col justify-center items-center gap-1
            w-full rounded-md col-span-3 h-[250px]">
            <Database className="w-7 h-7 text-gray-500" />
            <h3 className="font-light">{notFoundMessage}</h3>
        </div>
    )
}
