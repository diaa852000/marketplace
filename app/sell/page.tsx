import { TipTapEditor } from "@/components/Editor";
import SelectCategory from "@/components/SelectCategory";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SellPage() {
    return (
        <section className="main-container mb-14">
            <Card>
                <form>
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
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label>Category</Label>
                            <SelectCategory/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label>Price</Label>
                            <Input placeholder="29$" type="number"/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label>Small Summary</Label>
                            <Textarea
                                placeholder="Please describe your product shortly righ here..."
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label>Description</Label>
                            <TipTapEditor/>
                        </div>
                    </CardContent>
                </form>
            </Card>
        </section>
    )
}
