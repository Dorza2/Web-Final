
document.addEventListener('DOMContentLoaded', function() {
    
    
    var sellForm = document.getElementById('sellBookForm');
    var feedback = document.getElementById('feedbackMessage');

    if (sellForm) {
        sellForm.addEventListener('submit', function(e) {
            
            
            var title = document.getElementById('bookTitle').value.trim();
            if (title === "" || title.length < 3) {
                e.preventDefault(); 
                alert("Error: Book title must be at least 3 characters.");
                return false;
            }

            
            var price = document.getElementById('bookPrice').value;
            if (price === "" || Number(price) <= 0 || Number(price) > 5000) {
                e.preventDefault(); 
                alert("Error: Price must be between 1 and 5,000 NIS.");
                return false;
            }

         
            var name = document.getElementById('sellerName').value.trim();
            if (name === "" || !name.includes(" ")) {
                e.preventDefault(); 
                alert("Error: Please enter both a first and last name.");
                return false;
            }

           
            var phone = document.getElementById('sellerPhone').value.trim();
            var phoneRegex = /^05\d-?\d{7}$/;
            if (phone === "" || !phoneRegex.test(phone)) {
                e.preventDefault(); 
                alert("Error: Use a valid phone format (050-1234567).");
                return false;
            }

            
        });
    }
     $('#filterPrice').on('input', function() {
        $('#priceVal').text($(this).val());
    });

    $('#applyFilters').on('click', function() {
        const selectedGenre = $('#filterGenre').val();
        alert("Filtering for " + selectedGenre + ", (Functionality not implemented)");
    });

   
    $('.select-book').on('click', function() {
        const bookName = $(this).data('name');
        $('#selectedBookName').text(bookName);
        $('#selectionFeedback').fadeIn().addClass('gold-border');
    });
});