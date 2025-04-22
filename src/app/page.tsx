import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
    return (
        <div className="p-5">
            <div className="flex flex-col gap-5">
                <div>
                    <Button variant="elevated">Press me</Button>
                </div>
                <div>
                    <Input placeholder="Write something..." />
                </div>
                <div>
                    <Progress value={50} />
                </div>
                <div>
                    <Textarea placeholder="Say something..." />
                </div>
                <div>
                    <Checkbox />
                </div>
            </div>
        </div>
    );
}
