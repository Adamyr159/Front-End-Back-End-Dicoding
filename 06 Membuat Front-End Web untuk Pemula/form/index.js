// const submitAction = document.getElementById('formDataDiri');

// submitAction.addEventListener('submit', (event) => {
//     const name = document.getElementById('inputNama').value;
//     const domisili = document.getElementById('inputDomisili').value;
//     const hiddenMessage = `Halo ${name} bagaimana cuaca di ${domisili}?`;


//     document.getElementById('messageAfterSubmit').innerText = hiddenMessage;
//     event.preventDefault();
// })


document.addEventListener('DOMContentLoaded', () => {
    const inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
    document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;

    document.getElementById('inputNama').addEventListener('input', () => {
        const jumlahKarakterDiketik = document.getElementById('inputNama').value.length;
        const jumlahKarakterMaksimal = document.getElementById('inputNama').maxLength;

        console.log('Jumlah Karakter Diketik: ', jumlahKarakterDiketik);
        console.log('Jumlah Karakter Maksimal: ', jumlahKarakterMaksimal);

        const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
        document.getElementById('sisaKarakter').innerText = sisaKarakterUpdate.toString();
        
        if(sisaKarakterUpdate === 0) {
            document.getElementById('sisaKarakter').innerHTML = "<b>Batas Maksimal Tercapai!</b>";
        } else if(sisaKarakterUpdate <= 5) {
            document.getElementById('notifikasiSisaKarakter').style.color = "red";
        } else {
            document.getElementById('notifikasiSisaKarakter').style.color = "black";
        }
    });

    document.getElementById('inputNama').addEventListener('focus', () => {
        console.log('inputNama: Focus');
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'visible';
    });

    document.getElementById('inputNama').addEventListener('blur', () => {
        console.log('inputNama: Blur');
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'hidden';
    })

    document.getElementById('inputCaptcha').addEventListener('change', () => {
        console.log('inputNama: Change');

        const inputCaptcha = document.getElementById('inputCaptcha').value;
        const submitButtonStatus = document.getElementById('submitButton');

        if (inputCaptcha === 'PRNU') {
            submitButtonStatus.removeAttribute('disabled');
        } else {
            submitButtonStatus.setAttribute('disabled');

        }
    });

    document.getElementById('formDataDiri').addEventListener('submit', (event) => {
        const inputCaptcha = document.getElementById('inputCaptcha').value;

        if (inputCaptcha === 'PRNU') {
            alert('Selamat! Captcha anda Lolos');
        } else {
            alert('Captcha anda belum tepat');
            document.getElementById('submitButton').setAttribute('disabled', '');
        }

        event.preventDefault();
    });

    document.getElementById('inputCopy').addEventListener('copy', function () {
        alert('Anda telah men-copy sesuatu...');
      });

    document.getElementById('inputPaste').addEventListener('paste', function () {
    alert('Anda telah mem-paste sebuah teks...');
    });
});