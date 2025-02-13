// Eksternal JavaScript - Mengatur tombol "Lihat Lebih Banyak"

// Menambahkan event listener untuk tombol "Lihat Lebih Banyak"
document.getElementById('btn-show-more').addEventListener('click', function() {
    const moreContent = document.getElementById('more-content');
    
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        this.textContent = 'Lihat Lebih Sedikit';
    } else {
        moreContent.style.display = 'none';
        this.textContent = 'Lihat Lebih Banyak';
    }
});

// Mendapatkan elemen form dan elemen error message
const form = document.getElementById('contact-form');
const errorMessage = document.getElementById('error-message');

// Fungsi validasi untuk nama dan email
function validateForm(event) {
    event.preventDefault(); // Mencegah form dikirimkan jika validasi gagal

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validasi nama: memastikan tidak kosong
    if (name.trim() === '') {
        errorMessage.textContent = 'Nama tidak boleh kosong.';
        return false;
    }

    // Validasi email: menggunakan regex untuk memastikan format email yang benar
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Format email tidak valid.';
        return false;
    }

    // Jika validasi berhasil
    errorMessage.textContent = '';
    alert('Pesan berhasil dikirim! ' + name);

    // Form dapat dikirim, kita hapus event.preventDefault agar form benar-benar dikirim
    form.submit();
}

// Menambahkan event listener untuk tombol kirim
form.addEventListener('submit', validateForm);
