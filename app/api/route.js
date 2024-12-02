import axios from "axios";
export async function GET() {
  const result = await axios(
    "https://674df3fd635bad45618d5148.mockapi.io/mock-data/User"
  );

  return Response.json(result.data);
}
