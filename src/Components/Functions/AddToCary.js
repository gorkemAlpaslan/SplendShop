const AddToCary = (ProductDetail) => {
  localStorage.setItem(ProductDetail.title, JSON.stringify(ProductDetail));

  if (!localStorage.getItem("purchaseProducts")) {
    localStorage.setItem(
      "purchaseProducts",
      JSON.stringify([ProductDetail.title])
    );
  } else {
    let purchaseProducts = JSON.parse(localStorage.getItem("purchaseProducts"));
    purchaseProducts.push(ProductDetail.title);
    localStorage.setItem("purchaseProducts", JSON.stringify(purchaseProducts));
  }
};

export default AddToCary;
