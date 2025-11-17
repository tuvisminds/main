import { Container } from "@/components/Container";
import { Container } from "@/components/Container";
import { SprintDashboard } from "@/components/dashboard/SprintDashboard";

export default function Home() {
  return (
    <Container className="max-w-7xl space-y-8">
      <SprintDashboard />
    </Container>
  );
}
