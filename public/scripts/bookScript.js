
$('#btnSubmit').on('click', () => {
    var sName = $('#txtName').val();
    var sAuthor = $('#txtAuthor').val();
    var sGenre = $('#txtGenre').val();

    var oBook = {
        name: sName,
        author: sAuthor,
        genre: sGenre
    }
    console.log("clicked")
    $.ajax({
        type: "POST",
        url: "/catalog/book/create",
        data: oBook,
        success: (data) => {
            console.log(data)
        }
    });
});

$(()=>{
    $.ajax({
        type:"GET",
        url:"/catalog",
        success:(data)=>{
            console.log(data)
        }
    });
});