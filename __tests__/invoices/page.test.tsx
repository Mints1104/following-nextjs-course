import "@testing-library/jest-dom";
import { fetchCustomers } from "../../app/lib/data";

jest.mock("../../app/lib/data", () => ({
  fetchCustomers: jest.fn(),
}));

describe("Page", () => {
  test("fetches customers", async () => {
    (fetchCustomers as jest.Mock).mockResolvedValue([
      { id: "1", name: "Acme Corp" },
    ]);

    const data = await fetchCustomers();
    expect(fetchCustomers).toHaveBeenCalledTimes(1);
    expect(data).toEqual([{ id: "1", name: "Acme Corp" }]);
  });
});
