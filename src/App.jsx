import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-dynamic animate-slide-in">
        <Card className="card-enhanced">
          <CardHeader className="card-header-enhanced">
            <CardTitle>Welcome to Anton Osika's Personal Site</CardTitle>
          </CardHeader>
          <CardContent className="card-content-enhanced">
            <CardDescription>
              Discover the ambitions, theory of change, and principles of Anton Osika. Explore links to detailed background and other resources.
            </CardDescription>
            <hr className="my-4" />
            <Button className="button-enhanced" onClick={() => setCount(count + 1)}>Engage with Content</Button>
            <div>Interaction Count: {count}</div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default App;