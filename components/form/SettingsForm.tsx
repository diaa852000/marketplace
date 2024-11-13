"use client";

import { Edit } from "lucide-react";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import SubmitButton from "../SubmitButton";
import { IUserSettingsProps } from "@/types";
import { useFormState } from "react-dom";
import { UpdateUserSettings } from "@/actions";
import { initalState } from "@/constants";
import { toast } from "sonner";
import { useEffect } from "react";


export default function SettingsForm({ firstName, lastName, email }: IUserSettingsProps) {
    const [state, formAction] = useFormState(UpdateUserSettings, initalState);

    useEffect(() => {
        if (state.status === "success") {
            toast.success(state.message);
        } else if (state.status === "error") {
            toast.error(state.message);
        }
    }, [state.status, state.message, state.errors])

    return (
        <form action={formAction}>
            <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription className="text-lg flex items-center gap-1">
                    <Edit className="w-4 h-4" />
                    <span>
                        Here you will find settings regarding your account
                    </span>
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2">
                    <Label>First Name</Label>
                    <Input
                        name="firstName"
                        type="text"
                        defaultValue={firstName}
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <Label>Last Name</Label>
                    <Input
                        name="lastName"
                        type="text"
                        defaultValue={lastName}
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <Label>Email</Label>
                    <Input
                        name="email"
                        type="email"
                        disabled
                        defaultValue={email || "You registered without using an email for example: github"}
                    />
                </div>
            </CardContent>
            <CardFooter>
                <SubmitButton
                    text="Update"
                />
            </CardFooter>
        </form>
    )
}
