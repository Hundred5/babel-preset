const x = import("x");
import "y";

const element = <div>Hello!</div>;

interface JobOpening {
  title: string;
  description?: string;
}

const jobOpeningOne: JobOpening = { title: "Developer" };
const jobOpeningTwo = { ...jobOpeningOne };
const description = jobOpeningTwo?.description ?? "Default";
