function getProductName({ productName }: { productName: string }): string {
  return productName;
}

getProductName({ productName: "TS Bootcamp" });

const Course = {
  name: "TS",
  price: 10.99,
};

export { getProductName, Course };
