//This program is to display the dicount offered 
let sellingPrice=100,
    listingPrice=600,
    disountOffered,
    roundedDiscountOffered;

    // logic for dicountOffered
    disountOffered=((listingPrice-sellingPrice)/listingPrice)*100;
    console.log("Discount Offered is:" +disountOffered);
    // round the discount offered
    roundedDiscountOffered=Math.round(disountOffered);
    console.log("Rounded Discount offered is:" +  roundedDiscountOffered +'%' +' off');
