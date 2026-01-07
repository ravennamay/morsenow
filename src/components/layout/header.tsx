import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Header = () => {
  return (
    <Card className="bg-gradient-to-br from-background via-background to-accent/5 border-0 shadow-none">
      <CardHeader className="space-y-2">
        <CardTitle className="text-4xl font-bold">SignalCode</CardTitle>
        <CardDescription className="text-base">
          Transform text to morse code instantly. Type, translate, and play.
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
