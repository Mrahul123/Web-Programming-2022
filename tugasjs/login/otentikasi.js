function notif(){
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    if (user == 'rahul123' && pass == 'rahulokem') {
      alert('Anda Berhasil Login');
      window.location = 'loginberhasil.html';
    } else if (user == '' && pass == '') {
      alert('Username & Password Tidak Boleh Kosong');
    } else if (user == 'rahul123' && pass != 'rahulokem') {
      alert('Password yang anda masukan salah !!');
    } else if (user != 'rahul123' && pass != 'rahulokem') {
      alert('Username yang anda masukan salah !!');
    } 
  }


