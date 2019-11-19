const http = import("http");

const element = <div>Hello!</div>;

interface JobOpening {
  title: string;
}

const jobOpeningOne: JobOpening = { title: "Developer" };
const jobOpeningTwo = { ...jobOpeningOne };
const title = jobOpeningTwo?.title ?? "Default";

const symbol = new Symbol();
const map = new Map();
