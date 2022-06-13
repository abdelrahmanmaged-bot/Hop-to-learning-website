var products = [];
// var products = PRODUCTS;
if (localStorage.getItem("Products") == null) {
    products = [
        { id: 1, imgUrl: 'stock/figures/aot figure.jfif', price: 110.00, stock: 5, rating: 4.5, name: "Eren Yeager", categories: ["figures"], anime: ["Attack on titan", "aot", "AOT"], type: "Figure" },
        { id: 2, imgUrl: 'stock/figures/jjk figure.jfif', price: 130.00, stock: 5, rating: 4.5, name: "Itadori Yuji", categories: ["figures"], anime: ["jjk", "Jujutsu Kaisen", "JJk"], type: "Figure" },
        { id: 3, imgUrl: 'stock/figures/mnha figure.jfif', price: 125.00, stock: 5, rating: 4.5, name: "Deku", categories: ["figures"], anime: ["mha", "my hearo academia", "MHA"], type: "Figure" },
        { id: 4, imgUrl: 'stock/figures/tokyo ghoul image.jfif', price: 150.00, stock: 5, rating: 4.5, name: "Kaneki Ken", categories: ["figures"], anime: ["Tokyo Ghoul"], type: "Figure" },
        { id: 5, imgUrl: 'stock/figures/naruto.jfif', price: 170.00, stock: 5, rating: 4.5, name: "Kakashi Hatake", categories: ["figures"], anime: ["naruto"], type: "Figure" },
        { id: 6, imgUrl: 'stock/figures/one Piece figure.jfif', price: 119.00, stock: 5, rating: 4.5, name: "Charlotte Katakuri", categories: ["figures"], anime: ["One piece"], type: "Figure" },
        { id: 7, imgUrl: 'stock/accessories/aot neck.jfif', price: 50.00, stock: 6, rating: 4, name: "Attack on titan Necklace", categories: ["accessories"], anime: ["aot"], type: "accessories" },
        { id: 8, imgUrl: 'stock/accessories/jjk shopping bag.jfif', price: 70.00, stock: 9, rating: 4, name: "Jujutsu Kaisen shopping bag", categories: ["accessories"], anime: ["jjk"], type: "accessories" },
        { id: 9, imgUrl: 'stock/accessories/mnha key chain.jfif', price: 20.00, stock: 4, rating: 4, name: "My Hero Academia keychain", categories: ["accessories"], anime: ["mnha"], type: "accessories" },
        { id: 10, imgUrl: 'stock/accessories/naruto bracelet.jfif', price: 35.00, stock: 5, rating: 4, name: "Naruto Bracelet", categories: ["accessories"], anime: ["naruto"], type: "accessories" },
        { id: 11, imgUrl: 'stock/accessories/one piece braclet.jfif', price: 35.00, stock: 6, rating: 5, name: "One Piece Bracelet", categories: ["accessories"], anime: ["one piece"], type: "accessories" },
        { id: 12, imgUrl: 'stock/accessories/tokyo ghoul bracelt.jfif', price: 35.00, stock: 1, rating: 3, name: "Tokyo Ghoul Bracelt", categories: ["accessories"], anime: ["tokyo ghoul"], type: "accessories" },
        { id: 13, imgUrl: 'stock/clothes/hoodie/aot hoodie.jfif', price: 220.00, stock: 6, rating: 4, name: "Attack on Titan hoodie", categories: ["clothes"], anime: ["aot"], type: "hoodie" },
        { id: 14, imgUrl: 'stock/clothes/hoodie/jjk hoodie.jfif', price: 210.00, stock: 3, rating: 4, name: "Jujutsu Kaisen hoodie", categories: ["clothes"], anime: ["jjk"], type: "hoodie" },
        { id: 15, imgUrl: 'stock/clothes/hoodie/mnha hoodie.jfif', price: 235.00, stock: 5, rating: 3, name: "My Hero Academia hoodie", categories: ["clothes"], anime: ["mnha"], type: "hoodie" },
        { id: 16, imgUrl: 'stock/clothes/hoodie/naruto Hoodie (2).jfif', price: 225.00, stock: 2, rating: 5, name: "Naruto hoodie", categories: ["clothes"], anime: ["naruto"], type: "hoodie" },
        { id: 17, imgUrl: 'stock/clothes/hoodie/rezero hoodie.jfif', price: 240.00, stock: 7, rating: 4, name: "Re:zero hoodie", categories: ["clothes"], anime: ["re zero"], type: "hoodie" },
        { id: 18, imgUrl: 'stock/clothes/hoodie/tokyo ghoul hoodie.jfif', price: 215.00, stock: 6, rating: 3, name: "Tokyo Ghoul hoodie", categories: ["clothes"], anime: ["tokyo ghoul"], type: "hoodie" },
        { id: 19, imgUrl: 'stock/clothes/t shirt/aot t shirt.jfif', price: 120.00, stock: 2, rating: 5, name: "Attack on Titan T-shirt", categories: ["clothes"], anime: ["aot"], type: "t shirt" },
        { id: 20, imgUrl: 'stock/clothes/t shirt/jjk t shirt.jfif', price: 110.00, stock: 6, rating: 3, name: "Jujutsu Kaisen T-shirt", categories: ["clothes"], anime: ["jjk"], type: "t shirt" },
        { id: 21, imgUrl: 'stock/clothes/t shirt/mnha t shirt.jfif', price: 135.00, stock: 3, rating: 4, name: "My Hero Academia T-shirt", categories: ["clothes"], anime: ["mnha"], type: "t shirt" },
        { id: 22, imgUrl: 'stock/clothes/t shirt/naruto t-shirt.jfif', price: 125.00, stock: 6, rating: 4, name: "Naruto T-shirt", categories: ["clothes"], anime: ["naruto"], type: "t shirt" },
        { id: 23, imgUrl: 'stock/clothes/t shirt/one piece.jfif', price: 125.00, stock: 7, rating: 3, name: "One Piece T-shirt", categories: ["clothes"], anime: ["one piece"], type: "t shirt" },
        { id: 24, imgUrl: 'stock/clothes/t shirt/tokyo ghoul.jfif', price: 140.00, stock: 8, rating: 4, name: "Tokyo Ghoul T-shirt", categories: ["clothes"], anime: ["tokyo ghoul"], type: "t shirt" },
    ];
    localStorage.setItem("Products", JSON.stringify(products));
} else {
    products = JSON.parse(localStorage.getItem("Products"));
}
var figures = products;

function filterProductsFigures() {
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].categories != "figures") {
            figures.splice(i, 1);
            i--;
        }
    }
}

function displayFigures() {
    filterProductsFigures();
    console.log(figures);
    for (var i = 0; i < figures.length; i++) {
        document.getElementById("mydiv").innerHTML += "<div  id='" + figures[i].id + "_holder' class='grid-item '><img src='" + figures[i].imgUrl + "'><h4>" + figures[i].name + "</h4><p>" + figures[i].rating + " <i class='fa fa-star' ></i></p><p>" + figures[i].price + " L.E.</p><p>" + figures[i].stock + " available</p></div>";
    }
}