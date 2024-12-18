"use client";

import { SellProductAction } from "@/actions";
import { initalState } from "@/constants";
import { JSONContent } from "@tiptap/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import SelectCategory from "../SelectCategory";
import { Textarea } from "../ui/textarea";
import { TipTapEditor } from "../Editor";
import { UploadDropzone } from "@/lib/uploadthing";
import SubmitButton from "../SubmitButton";

export default function SellForm() {
    const [state, formAction] = useFormState(SellProductAction, initalState);

    const [json, setJson] = useState<null | JSONContent>(null);
    const [images, setImages] = useState<null | string[]>(null);
    const [productFile, setProductFile] = useState<null | string>(null)

    useEffect(() => {
        if (state.status === "success") {
            toast.success(state.message);
            redirect(
                process.env.NODE_ENV === "development" ? 'http://localhost:3000' : "https://marketplace-8hzy.vercel.app/"
            );
        } else if (state.status === "error") {
            toast.error(state.message);
        }
    }, [state.status, state.message, state.errors])

    return (
        <form action={formAction}>
            <CardHeader>
                <CardTitle>Sell your product with ease</CardTitle>
                <CardDescription>
                    Please describe your product here in detail so that it can be sold!
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-2">
                    <Label>Name</Label>
                    <Input
                        type="text"
                        placeholder="Name of your Product"
                        name="name"
                        required
                        minLength={3}
                    />
                    {state?.errors?.["name"]?.[0] && (
                        <p className="text-destructive">{state?.errors?.["name"]?.[0]}</p>
                    )}
                </div>
                <div className="flex flex-col gap-y-2">
                    <Label>Category</Label>
                    <SelectCategory />
                    {state?.errors?.["category"]?.[0] && (
                        <p className="text-destructive">{state?.errors?.["category"]?.[0]}</p>
                    )}
                </div>
                <div className="flex flex-col gap-y-2">
                    <Label>Price</Label>
                    <Input
                        placeholder="29$"
                        type="number"
                        name="price"
                        required
                        min={1}
                    />
                    {state?.errors?.["price"]?.[0] && (
                        <p className="text-destructive">{state?.errors?.["price"]?.[0]}</p>
                    )}
                </div>
                <div className="flex flex-col gap-y-2">
                    <Label>Small Summary</Label>
                    <Textarea
                        placeholder="Please describe your product shortly righ here..."
                        name="smallDescription"
                        required
                        minLength={10}
                    />
                    {state?.errors?.["smallDescription"]?.[0] && (
                        <p className="text-destructive">{state?.errors?.["smallDescription"]?.[0]}</p>
                    )}
                </div>
                <div className="flex flex-col gap-y-2">
                    <input
                        type="hidden"
                        name="description"
                        value={JSON.stringify(json)}
                    />
                    <Label>Description</Label>
                    <TipTapEditor
                        json={json}
                        setJson={setJson}
                    />
                    {state?.errors?.["description"]?.[0] && (
                        <p className="text-destructive">{state?.errors?.["description"]?.[0]}</p>
                    )}
                </div>
                <div className="flex flex-col gap-y-2">
                    <input
                        type="hidden"
                        name="images"
                        value={JSON.stringify(images)}
                    />
                    <Label>Product Images</Label>
                    <UploadDropzone
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            setImages(res.map(item => item.url));
                            toast.success("Your images have been uploaded!");
                        }}
                        onUploadError={() => {
                            toast.error("Something went wrong, try again");
                        }}
                    />
                    {state?.errors?.["images"]?.[0] && (
                        <p className="text-destructive">{state?.errors?.["images"]?.[0]}</p>
                    )}
                </div>
                <div className="flex flex-col gap-y-2">
                    <input
                        type="hidden"
                        name="productFile"
                        value={productFile ?? ""}
                    />
                    <Label>Product File</Label>
                    <UploadDropzone
                        endpoint="productFileUpload"
                        onClientUploadComplete={(res) => {
                            setProductFile(res[0].url);
                            toast.success("Your file have been uploaded!");
                        }}
                        onUploadError={() => {
                            toast.error("Something went wrong, try again");
                        }}
                    />
                    {state?.errors?.["productFile"]?.[0] && (
                        <p className="text-destructive">{state?.errors?.["productFile"]?.[0]}</p>
                    )}
                </div>
            </CardContent>
            <CardFooter className="mt-5">
                <SubmitButton
                    text="Create"
                />
            </CardFooter>
        </form>
    )
}
